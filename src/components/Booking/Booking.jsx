import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useContext,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { CurrentUserContext } from "../../contexts/currentUserContext";

import "./Booking.scss";
import { getLocationPlanPhoto, getSpots, postOrder } from "../../utils/Api";
import Button from "../UI-kit/Button/Button";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Calendar } from "../Calendar/Calendar";
import { TabSwitcher } from "../TabSwitcher/TabSwitcher";
import { ButtonsList } from "../ButtonsList/ButtonsList";
import {
  WORKING_DAYS_COUNTS,
  EQUIPMENT_GENERAL_CATEGORY,
  EQUIPMENT_MEETING_CATEGORY,
  ALLOWED_TIME_RANGES,
  COWORKING_SPOTS_SPACE_TYPE,
  COWORKING_MEETING_ROOMS_SPACE_TYPE,
} from "../../utils/constants";
import useInitialVisibilityState from "./hooks/useInitialVisibilityState";
import BookingCalendarPopup from "../BookingCalendarPopup/BookingCalendarPopup";
import SortData from "../UI-kit/SortData/SortData";

dayjs.locale("ru");

// Возвращает число дня: от 1 до 7
const getWeekDayNumber = (date) => {
  const dayNumber = date.getDay();
  const resultNumber = dayNumber === 0 ? 7 : dayNumber;
  return resultNumber;
};

// Возвращает дату в формате YYYY-MM-DD
const getDateString = (date) => {
  const month = date.getMonth() + 1;
  const monthString = month < 10 ? `0${month}` : month.toString();
  return `${date.getFullYear()}-${monthString}-${date.getDate()}`;
};

// Вернет true, если тот же день месяца
const isSameDateDay = (firstDate, secondDate) => {
  const firstDay = new Date(
    firstDate.getFullYear(),
    firstDate.getMonth(),
    firstDate.getDate(),
  );
  const secondDay = new Date(
    secondDate.getFullYear(),
    secondDate.getMonth(),
    secondDate.getDate(),
  );
  return firstDay.getTime() === secondDay.getTime();
};

// Возвращает строку времени в формате "00:00"
const getTimeWithZeroPrefixedMinutes = (timeArray) => {
  let resultTime = `${timeArray[0]}:`;
  resultTime = `${resultTime}${
    timeArray[1] < 10 ? `0${timeArray[1]}` : timeArray[1]
  }`;
  return resultTime;
};

// Возвращает объект с параметрами для кнопки промежутка времени
const getRangeItem = (id, startTime, endTime, onItemClick) => {
  const resultName = `${getTimeWithZeroPrefixedMinutes(
    startTime,
  )}\xa0-\xa0${getTimeWithZeroPrefixedMinutes(endTime)}`;
  const resultStartTime = startTime
    .map((item) => (item < 10 ? `0${item}` : item))
    .join(":");
  const resultEndTime = endTime
    .map((item) => (item < 10 ? `0${item}` : item))
    .join(":");

  return {
    id,
    name: resultName,
    startTime: resultStartTime,
    endTime: resultEndTime,
    onClick: onItemClick,
    isEnabled: true,
  };
};

// Возвращает массив промежутков времени
const getTimeRangeItems = (startTime, endTime, onItemClick) => {
  const [startHour, startMinutes] = startTime
    .split(":")
    .map((i) => parseInt(i, 10));
  const [endHour, endMinutes] = endTime.split(":").map((i) => parseInt(i, 10));
  const resultRanges = [];

  if (startHour > endHour) {
    throw new Error(
      `End hour can't be less than start hour: start hour - "${startHour}", end hour - ${endHour}`,
    );
  }

  for (let i = 0; i < endHour - startHour; i += 1) {
    const rangeStartHour = startHour + i;
    const rangeEndHour = rangeStartHour + 1;
    const rangeStartTime = [rangeStartHour, startMinutes];
    let rangeEndTime = [rangeEndHour, startMinutes];

    if (rangeStartHour === endHour && startMinutes >= endMinutes) {
      break;
    }

    if (rangeStartHour === endHour && startMinutes < endMinutes) {
      resultRanges.push(
        getRangeItem(
          i,
          rangeStartTime,
          `${rangeEndHour}:${endMinutes}`,
          onItemClick,
        ),
      );
      break;
    }

    if (rangeEndHour === endHour) {
      rangeEndTime = [rangeEndHour, endMinutes];
    }

    resultRanges.push(
      getRangeItem(i, rangeStartTime, rangeEndTime, onItemClick),
    );
  }

  return resultRanges;
};

// Получение пары часов и минут из строки времени
const getHourAndMinutes = (time) =>
  time.split(":").map((item) => parseInt(item, 10));

// Получение массива массивов, являющихся группами промежутков времени - они содержат id элементов,
// которым разрешено быть друг с другом в одной группе
const getAllowedRanges = (baseRanges, itemsList) => {
  const allowedRanges = baseRanges.reduce((ranges, allowedRange) => {
    const [allowedRangeStartHour, allowedRangeStartMinutes] = getHourAndMinutes(
      allowedRange.startTime,
    );
    const [allowedRangeEndHour, allowedRangeEndMinutes] = getHourAndMinutes(
      allowedRange.endTime,
    );

    const range = itemsList.reduce((itemsRange, item) => {
      const [itemStartHour, itemStartMinutes] = getHourAndMinutes(
        item.startTime,
      );
      const [itemEndHour, itemEndMinutes] = getHourAndMinutes(item.endTime);
      if (
        itemStartHour >= allowedRangeStartHour &&
        itemStartMinutes >= allowedRangeStartMinutes &&
        itemEndHour <= allowedRangeEndHour &&
        itemEndMinutes <= allowedRangeEndMinutes
      ) {
        itemsRange.push(item.id);
      }
      return itemsRange;
    }, []);

    if (range.length > 0) {
      ranges.push(range);
    }

    return ranges;
  }, []);

  return allowedRanges;
};

// Функция сортировки элементов списка промежутков времени
const timeSortFunc = (a, b) => {
  const [firstHour, firstMinutes] = getHourAndMinutes(a.startTime);
  const [secondHour, secondMinutes] = getHourAndMinutes(b.startTime);

  if (firstHour === secondHour) {
    return firstMinutes - secondMinutes;
  }

  return firstHour - secondHour;
};

// Функция сортировки элементов списка рабочих мест
const spotsSortFunc = (a, b) => {
  const aNum = parseInt(a.name, 10);
  const bNum = parseInt(b.name, 10);
  return aNum - bNum;
};

export const Booking = () => {
  const IS_TIME_RANGES_MULTISELECT = false;
  const DEFAULT_DATE_BUTTON_TEXT = "Выбрать дату и время";

  const location = useLocation();

  const navigate = useNavigate();
  const coworking = useRef(location.state);
  const [currentCoworkingState, setCurrentCoworkingState] = useState(coworking);
  const [planPhoto, setPlanPhoto] = useState("");
  const [datesSelected, setDatesSelected] = useState([]);
  const [timeRangesSelected, setTimeRangesSelected] = useState([]);
  const [spotsSelected, setSpotsSelected] = useState([]);
  const [meetingRoomsSelected, setMeetingRoomsSelected] = useState([]);
  const [currentSpotPrice, setCurrentSpotPrice] = useState("");
  const [currentMeetingPrice, setCurrentMeetingPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [spots, setSpots] = useState([]);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [isSpotsEnabled, setSpotsEnabled] = useState(true);
  const [isWorkplacesEnabled, setWorkplacesEnabled] = useState(false);
  const [isMeetingRoomsEnabled, setMeetingRoomsEnabled] = useState(false);
  const [isPlanPhotoVisible, setIsPlanPhotoVisible] = useState(false);
  const [isDatePopupOpened, setDatePopupOpened] = useState(false);
  const { showMessage } = useContext(CurrentUserContext);
  const [chooseDateButtonText, setChooseDateButtonText] = useState(
    DEFAULT_DATE_BUTTON_TEXT,
  );

  const initialVisibilityState = useInitialVisibilityState();
  const [sectionsVisibility, setSectionsVisibility] = useState(
    initialVisibilityState,
  );

  const permittedSpots = useMemo(
    () => [
      { text: "--", id: -1 },
      ...spots
        .filter((item) => item.isEnabled)
        .sort(spotsSortFunc)
        .map((item) => ({ text: item.name, id: item.id })),
    ],
    [spots],
  );

  // Обнволение видимости секций
  const updateSectionsVisibility = (initiator) => {
    switch (initiator) {
      case "time":
        setSectionsVisibility((prev) => ({
          ...prev,
          spotsSection: { ...prev.spotsSection, isVisible: true },
        }));
        break;
      case "spotType":
        setSectionsVisibility((prev) => ({
          ...prev,
          dateSection: { ...prev.dateSection, isVisible: true },
        }));
        break;
      default:
        break;
    }
  };

  // Обработчик клика по кнопке выбора даты и времени
  const handleOpenDatePopup = () => {
    setDatePopupOpened(true);
  };

  // Обработчик закрытия попапа выбора даты и времени
  const handleCloseDatePopup = () => {
    setDatesSelected([]);
    setTimeRangesSelected([]);
    setDatePopupOpened(false);
    setChooseDateButtonText(DEFAULT_DATE_BUTTON_TEXT);
  };

  // Обработчик закрытия попапа выбора даты и времени
  const handleSaveDatePopup = () => {
    setDatePopupOpened(false);
    if (datesSelected.length > 0 && timeRangesSelected.length > 0) {
      const dateText = dayjs(datesSelected.at(0)).format("D MMMM YYYY");
      const timeText = `${timeRangesSelected.at(0).startTime}-${
        timeRangesSelected.at(-1).endTime
      }`;
      setChooseDateButtonText(`${dateText} ${timeText}`);
      return;
    }
    setChooseDateButtonText(DEFAULT_DATE_BUTTON_TEXT);
  };

  // Обработчик клика по кнопке "Показать план помещения"
  const handleShowPlanPhoto = () => {
    setIsPlanPhotoVisible((prev) => !prev);
  };

  // Обработчик клика по изображению плана помещения
  const handlePlanPhotoClick = (e) => {
    e.preventDefault();
  };

  // Обработчик выбора даты
  const handleCalendarClick = (dates) => {
    setDatesSelected(dates);
  };

  // Обработчик выбора времени
  const handleTimeItemClick = async (selectedRanges) => {
    setTimeRangesSelected(selectedRanges);
  };

  const [timeRangeItems, setTimeRangeItems] = useState([]);

  // Разрешенные группы промежутков времени
  const allowedRanges = useMemo(
    () => getAllowedRanges(ALLOWED_TIME_RANGES, timeRangeItems),
    [timeRangeItems],
  );

  // Обработчик выбора типа места
  const handleSwitcherClick = (selectedSpotType) => {
    if (selectedSpotType === COWORKING_SPOTS_SPACE_TYPE) {
      setSpotsEnabled(true);
      setMeetingRoomsEnabled(false);
      return;
    }
    setSpotsEnabled(false);
    setMeetingRoomsEnabled(true);
  };

  // Обработчик выбора типа места для мобильной версии
  const handleSpotTypeClick = (selectedSpotType) => {
    updateSectionsVisibility("spotType");
    handleSwitcherClick(selectedSpotType);
  };

  // Конфиг кнопок типов для мобильной версии
  const spotTypes = useRef([
    {
      id: 0,
      name: COWORKING_SPOTS_SPACE_TYPE,
      onClick: () => handleSpotTypeClick(COWORKING_SPOTS_SPACE_TYPE),
      isEnabled: true,
    },
    {
      id: 1,
      name: COWORKING_MEETING_ROOMS_SPACE_TYPE,
      onClick: () => handleSpotTypeClick(COWORKING_MEETING_ROOMS_SPACE_TYPE),
      isEnabled: true,
    },
  ]);

  // Обработчик выбора места в общей зоне
  const handleSpotSelect = (selectedItems) => {
    setSpotsSelected(selectedItems);
  };

  // Обработчик выбора переговорной
  const handleMeetingRoomSelect = (selectedItems) => {
    setMeetingRoomsSelected(selectedItems);
  };

  // Обработчик выбора рабочего метса в выпадающем списке
  const handleSpotDropdownSelect = ({ spot }) => {
    const foundSpot = spots.find((item) => item.name === spot);
    if (foundSpot) {
      setSpotsSelected((prev) => [...prev, foundSpot]);
      return;
    }
    setSpotsSelected([]);
  };

  // Обработчик клика по кнопке "Назад"
  const handleBackButton = (e) => {
    e.preventDefault();
    navigate("/points");
  };

  // Обработчик кнопки "Перейти к оплате"
  const handlePayClick = async () => {
    let workplaceCategory = EQUIPMENT_GENERAL_CATEGORY;
    let selectedWorkplaces = spotsSelected.map((item) => item.name).join(", ");
    let selectedSpotId = spotsSelected.at(0)?.id;
    const selectedDate = datesSelected.at(0);
    const timeSeleted = [...timeRangesSelected].sort(timeSortFunc);
    const { startTime } = timeSeleted.at(0);
    const { endTime } = timeSeleted.at(-1);

    if (meetingRoomsSelected.length > 0) {
      selectedSpotId = meetingRoomsSelected.at(0).id;
      workplaceCategory = EQUIPMENT_MEETING_CATEGORY;
      selectedWorkplaces = meetingRoomsSelected
        .map((item) => item.name)
        .join(", ");
    }

    try {
      const { id: orderId } = await postOrder(
        coworking.current.id,
        selectedSpotId,
        {
          date: getDateString(selectedDate),
          start_time: startTime,
          end_time: endTime,
        },
      );

      navigate("/payments", {
        state: {
          id: coworking.current.id,
          spotId: selectedSpotId,
          name: coworking.current.name,
          location: coworking.current.location,
          category: workplaceCategory,
          equipment: selectedWorkplaces,
          date: selectedDate,
          startTime,
          endTime,
          bill: totalPrice,
          orderId,
        },
      });
    } catch (err) {
      showMessage("Бронирование доступно после авторизации");
    }
  };

  // Получение текущей цены выбранного массива мест
  const getSelectedPrice = (selectedItems) =>
    selectedItems.reduce((sum, item) => {
      const newSum = sum + parseInt(item.price, 10);
      return newSum;
    }, 0);

  // Дополнительные правила-функции для проверки дат календаря
  // Если функция возвращает true - дата календаря будет недоступной
  const getCalendarExtraRules = useCallback(
    () => [
      // Дата будет недоступной, если день недели даты будет больше рабочих дней недели для коворкинга
      (date) =>
        getWeekDayNumber(date) >
        WORKING_DAYS_COUNTS[currentCoworkingState.daysOpen],
    ],
    [currentCoworkingState],
  );

  const calendarExtraRules = getCalendarExtraRules();

  // Получение информации о всех местах в данной location, по заданной дате и промежутку времени
  const getWorkplacesData = useCallback(
    async ({ id, date, startTime, endTime }) => {
      let result = {};
      try {
        const spotsData = (
          await getSpots(id, {
            category: EQUIPMENT_GENERAL_CATEGORY,
            date,
            start_time: startTime,
            end_time: endTime,
          })
        ).map((item) => ({
          ...item,
          isEnabled: !item.is_ordered,
          onClick: handleSpotSelect,
        }));

        const meetingRoomsData = (
          await getSpots(id, {
            category: EQUIPMENT_MEETING_CATEGORY,
            date,
            start_time: startTime,
            end_time: endTime,
          })
        ).map((item) => ({
          ...item,
          isEnabled: !item.is_ordered,
          onClick: handleMeetingRoomSelect,
        }));
        result = {
          spots: spotsData,
          meetingRooms: meetingRoomsData,
        };
      } catch (err) {
        console.log(err.message);
      }
      return result;
    },
    [],
  );

  // Приведение двух списков мест к одному списку
  // Если в одном из сравниваемых списках место будет занято, то оно будет занято в результирующем списке
  const mergeSpotsStates = (firstSpots, secondSpots) => {
    if (!firstSpots) {
      return secondSpots;
    }

    if (!secondSpots) {
      return firstSpots;
    }

    return firstSpots.map((firtsItem) => {
      const secondItem = secondSpots.find((item) => firtsItem.id === item.id);
      return {
        ...firtsItem,
        isEnabled: firtsItem.isEnabled && secondItem.isEnabled,
      };
    });
  };

  // Получение состояния рабочих мест для даты, для каждого выбранного промежутка времени
  // Для каждого промежутка времени будет выполнен запрос к серверу
  // Имеет смысл, когда сервер не умеет обрабатывать разрывы в промежутках
  const getSpotsStatesByDividedTimes = useCallback(
    async (selectedDate) => {
      const result = await timeRangesSelected.reduce(
        async (timeResult, timeRange) => {
          const previousTimeResult = await timeResult;
          const timeItem = timeRangeItems.find(
            (item) => item.id === timeRange.id,
          );
          if (!timeItem) {
            return timeResult;
          }
          const preparedDate = `${selectedDate.getFullYear()}-${
            selectedDate.getMonth() + 1
          }-${selectedDate.getDate()}`;
          const receivedWorkplaces = await getWorkplacesData({
            id: coworking.current.id,
            date: preparedDate,
            startTime: timeItem.startTime,
            endTime: timeItem.endTime,
          });

          return {
            spots: mergeSpotsStates(
              previousTimeResult.spots,
              receivedWorkplaces.spots,
            ),
            meetingRooms: mergeSpotsStates(
              previousTimeResult.meetingRooms,
              receivedWorkplaces.meetingRooms,
            ),
          };
        },
        {},
      );
      return result;
    },
    [getWorkplacesData, timeRangeItems, timeRangesSelected],
  );

  // Получение состояния рабочих мест для даты
  const getSpotsStates = useCallback(
    async (selectedDate) => {
      const { startTime } = timeRangesSelected.at(0);
      const { endTime } = timeRangesSelected.at(-1);

      const preparedDate = `${selectedDate.getFullYear()}-${
        selectedDate.getMonth() + 1
      }-${selectedDate.getDate()}`;
      const receivedWorkplaces = await getWorkplacesData({
        id: coworking.current.id,
        date: preparedDate,
        startTime,
        endTime,
      });

      return {
        spots: receivedWorkplaces.spots,
        meetingRooms: receivedWorkplaces.meetingRooms,
      };
    },
    [getWorkplacesData, timeRangesSelected],
  );

  // Запрос данных и сравнение данных о всех местах в локации
  // Запрос к бэку будет выполнен для каждой выбранной даты, для каждого выбранного времени
  // Для варианта с singleSelect, запрос должен будет выполниться один раз при выборе времени
  const loadWorkplaces = useCallback(async () => {
    const resultSpots = await datesSelected.reduce(
      async (dateResult, selectedDate) => {
        const previousDateResult = await dateResult;
        let dateSpots = {};

        // Если включен мультиселект в списке промежутков времени, то могут быть разрывы
        // между выбранными промежутками, для этого будет использоваться getSpotsStatesByDividedTimes
        // Если сервер будет сам обрабатывать случай с разрывами, то эта проверка будет лишней
        // и тяжелую getSpotsStatesByDividedTimes можно будет убрать
        if (IS_TIME_RANGES_MULTISELECT) {
          dateSpots = await getSpotsStatesByDividedTimes(selectedDate);
        } else {
          dateSpots = await getSpotsStates(selectedDate);
        }

        const mergedLists = {
          spots: mergeSpotsStates(previousDateResult.spots, dateSpots.spots),
          meetingRooms: mergeSpotsStates(
            previousDateResult.meetingRooms,
            dateSpots.meetingRooms,
          ),
        };
        return mergedLists;
      },
      {},
    );

    if (resultSpots.spots) {
      setSpots(resultSpots.spots);
      setMeetingRooms(resultSpots.meetingRooms);
    }
  }, [
    IS_TIME_RANGES_MULTISELECT,
    datesSelected,
    getSpotsStatesByDividedTimes,
    getSpotsStates,
  ]);

  // Начальная загрузка рабочих мест
  // Получаем количество рабочих мест на завтрашний день. Из-за ограничений бэка
  const loadWorkplacesInitial = useCallback(
    async (coworkingState) => {
      const date = new Date();
      const tomorrowDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + 1,
      );
      const preparedDate = `${tomorrowDate.getFullYear()}-${
        tomorrowDate.getMonth() + 1
      }-${tomorrowDate.getDate()}`;
      const resultSpots = await getWorkplacesData({
        id: coworkingState.id,
        date: preparedDate,
        startTime: coworkingState.openTime,
        endTime: coworkingState.closeTime,
      });
      setSpots(resultSpots.spots);
      setMeetingRooms(resultSpots.meetingRooms);
    },
    [getWorkplacesData],
  );

  // Загрузка изображения плана помещения
  const loadPlanPhoto = useCallback(async (locationId) => {
    try {
      const { image } = await getLocationPlanPhoto(locationId);
      setPlanPhoto(image);
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  // Получить актуальные промежутки времени. Активными будут те, что будут позже или равны текущему времени
  const getAvailableTimeRanges = useCallback(
    (currentTimeRanges) =>
      currentTimeRanges.map((timeRange) => ({
        ...timeRange,
        isEnabled: !datesSelected.some((date) => {
          const todayDate = new Date();
          if (isSameDateDay(date, todayDate)) {
            const [rangeStartHour, rangeStartMinutes] = getHourAndMinutes(
              timeRange.startTime,
            );
            const todayHour = todayDate.getHours();
            const todayMinutes = todayDate.getMinutes();
            if (rangeStartHour > todayHour) {
              return false;
            }
            if (rangeStartHour === todayHour) {
              return rangeStartMinutes < todayMinutes;
            }
            return true;
          }
          return false;
        }),
      })),
    [datesSelected],
  );

  // Реакция на изменение размера окна. Установка обновленной видимости секций
  useEffect(() => {
    setSectionsVisibility(initialVisibilityState);
  }, [initialVisibilityState]);

  // Рекация на изменение доступности. Сброс выбранных значений
  useEffect(() => {
    if (!isSpotsEnabled) {
      setSpotsSelected([]);
    }

    if (!isMeetingRoomsEnabled) {
      setMeetingRoomsSelected([]);
    }

    if (!isWorkplacesEnabled) {
      setSpotsSelected([]);
      setMeetingRoomsSelected([]);
    }
  }, [isSpotsEnabled, isMeetingRoomsEnabled, isWorkplacesEnabled]);

  // Реакция на изменение выбранных рабочих мест, переговорных комнат и промежутков времени
  useEffect(() => {
    const spotPrice = getSelectedPrice(spotsSelected);
    setCurrentSpotPrice(spotPrice === 0 ? "\u200b" : `${spotPrice} ₽/час`);

    const meetingRoomPrice = getSelectedPrice(meetingRoomsSelected);
    setCurrentMeetingPrice(
      meetingRoomPrice === 0 ? "\u200b" : `${meetingRoomPrice} ₽/час`,
    );

    setTotalPrice(
      spotPrice * timeRangesSelected.length +
        meetingRoomPrice * timeRangesSelected.length,
    );
  }, [spotsSelected, meetingRoomsSelected, timeRangesSelected]);

  // Реакция на изменение выбранных промежутков времени
  useEffect(() => {
    if (timeRangesSelected.length > 0) {
      updateSectionsVisibility("time");
      loadWorkplaces();
      setWorkplacesEnabled(true);
      return;
    }
    setWorkplacesEnabled(false);
  }, [timeRangesSelected, loadWorkplaces]);

  // Реакция на изменение выбранной даты
  useEffect(() => {
    if (datesSelected.length > 0) {
      setTimeRangeItems(getAvailableTimeRanges);
    }
    setTimeRangesSelected([]);
  }, [datesSelected, getAvailableTimeRanges]);

  // Первоначальная загрузка компонента
  useEffect(() => {
    const coworkingState = JSON.parse(sessionStorage.getItem("coworkingState"));

    if (!coworking.current && !coworkingState) {
      navigate("/", { replace: true });
      return;
    }

    if (!coworking.current) {
      coworking.current = coworkingState;
    }

    setCurrentCoworkingState(coworking.current);
    sessionStorage.setItem("coworkingState", JSON.stringify(coworking.current));

    const { id, openTime, closeTime } = coworking.current;

    setTimeRangeItems(
      getTimeRangeItems(openTime, closeTime, handleTimeItemClick),
    );
    loadPlanPhoto(id);
    loadWorkplacesInitial(coworking.current);
  }, [loadPlanPhoto, loadWorkplacesInitial, navigate]);

  return (
    <main className="booking" aria-label="Страница бронирования">
      {initialVisibilityState.isMobileView && (
        <BookingCalendarPopup
          onDateSelect={handleCalendarClick}
          onClickClose={handleCloseDatePopup}
          onSaveClick={handleSaveDatePopup}
          isOpen={isDatePopupOpened}
          timeListProps={{
            isEnabled: datesSelected.length > 0,
            itemsList: timeRangeItems,
            allowedRanges,
            sortFunc: timeSortFunc,
            isMultiselect: IS_TIME_RANGES_MULTISELECT,
            listClassName:
              "booking__buttons-list booking__buttons-list_type_time-ranges",
          }}
        />
      )}
      <Button
        onClick={handleBackButton}
        btnClass="button_type_back"
        btnText="Назад"
      />
      <SectionTitle
        titleText="Бронирование"
        titleClass="section-title_booking"
      />
      {sectionsVisibility.dividedSpotTypesSection.isVisible && (
        <section
          className="booking__section"
          aria-label="Секция выбора типа рабочего времени"
        >
          <h2 className="booking__section-title">
            {sectionsVisibility.dividedSpotTypesSection.stepNumber}. Выберите
            тип рабочего места
          </h2>
          <ButtonsList
            itemsList={spotTypes.current}
            itemsClassName="button_type_booking booking__spot-type-button"
            disableDeselect
            listClassName="booking__buttons-list booking__buttons-list_type_spot-types"
          />
        </section>
      )}
      {sectionsVisibility.dateSection.isVisible && (
        <section
          className="booking__section"
          aria-label="Секция выбора даты и времени"
          style={{
            "--buttons-list-rows-main": Math.ceil(timeRangeItems.length / 5),
            "--buttons-list-rows-1256": Math.ceil(timeRangeItems.length / 4),
            "--buttons-list-rows-1064": Math.ceil(timeRangeItems.length / 3),
            "--buttons-list-rows-1024": Math.ceil(timeRangeItems.length / 4),
            "--buttons-list-rows-944": Math.ceil(timeRangeItems.length / 3),
            "--buttons-list-rows-594": Math.ceil(timeRangeItems.length / 2),
          }}
        >
          <h2 className="booking__section-title">
            {sectionsVisibility.dateSection.stepNumber}. Выберите дату и время
          </h2>

          {!initialVisibilityState.isMobileView ? (
            <div className="booking__flex-container">
              <Calendar
                selectCallback={handleCalendarClick}
                extraRules={calendarExtraRules}
              />
              <ButtonsList
                isEnabled={datesSelected.length > 0}
                itemsList={timeRangeItems}
                allowedRanges={allowedRanges}
                sortFunc={timeSortFunc}
                isMultiselect={IS_TIME_RANGES_MULTISELECT}
                listClassName="booking__buttons-list booking__buttons-list_type_time-ranges"
              />
            </div>
          ) : (
            <Button
              onClick={handleOpenDatePopup}
              btnClass="booking__choose-date-button button_type_transparent"
              btnText={chooseDateButtonText}
            />
          )}
        </section>
      )}

      {sectionsVisibility.spotsSection.isVisible && (
        <>
          <section
            className="booking__section"
            aria-label="Секция выбора рабочего места"
          >
            <header className="booking__section-header">
              <h2 className="booking__section-title">
                {`${sectionsVisibility.spotsSection.stepNumber}. Выберите ${
                  sectionsVisibility.isMobileView
                    ? "место"
                    : "тип рабочего места"
                }`}
              </h2>
              {!sectionsVisibility.isMobileView && (
                <Button
                  btnClass="button_type_link-underline booking__photo-button"
                  btnText={
                    isPlanPhotoVisible
                      ? "Скрыть план помещения"
                      : "Посмотреть план помещения"
                  }
                  onClick={handleShowPlanPhoto}
                />
              )}
            </header>
            <div className="booking__flex-container booking__flex-container_type_spots">
              <a
                href="/"
                onClick={handlePlanPhotoClick}
                className={clsx({
                  "booking__plan-photo-link": true,
                  "booking__plan-photo-link_visible":
                    isPlanPhotoVisible || sectionsVisibility.isMobileView,
                })}
              >
                <img
                  className={clsx({
                    "booking__plan-photo": true,
                    "booking__plan-photo_visible":
                      isPlanPhotoVisible || sectionsVisibility.isMobileView,
                  })}
                  src={planPhoto}
                  alt="Схема коворкинга"
                />
              </a>
              {!sectionsVisibility.isMobileView && (
                <TabSwitcher
                  firstCaption={COWORKING_SPOTS_SPACE_TYPE}
                  secondCaption={COWORKING_MEETING_ROOMS_SPACE_TYPE}
                  containerClassName="booking__spot-switcher"
                  onClick={handleSwitcherClick}
                />
              )}
              <div className="booking__tabs-container">
                <section
                  className={clsx({
                    booking__tab: true,
                    booking__tab_disabled:
                      isMeetingRoomsEnabled &&
                      !isSpotsEnabled &&
                      !sectionsVisibility.isMobileView,
                    booking__tab_hidden:
                      (!isWorkplacesEnabled || !isSpotsEnabled) &&
                      sectionsVisibility.isMobileView,
                  })}
                  aria-hidden={!isWorkplacesEnabled || !isSpotsEnabled}
                >
                  {!sectionsVisibility.isMobileView ? (
                    <>
                      <h3 className="booking__tab-title">
                        Одна цифра - одно рабочее место
                      </h3>
                      <p className="booking__spot-price">{currentSpotPrice}</p>
                      <ButtonsList
                        isEnabled={
                          isWorkplacesEnabled &&
                          isSpotsEnabled &&
                          datesSelected.length > 0 &&
                          timeRangesSelected.length > 0
                        }
                        listType="spots"
                        itemsList={spots}
                        sortFunc={spotsSortFunc}
                        listClassName="booking__buttons-list booking__buttons-list_type_spots"
                      />
                    </>
                  ) : (
                    <SortData
                      handleSelectChange={handleSpotDropdownSelect}
                      selectName="spot"
                      titleSort=""
                      array={permittedSpots}
                      size="medium"
                      isDisabled
                      className="booking__spots-dropdown"
                      shouldDropSelected={
                        !(
                          isWorkplacesEnabled &&
                          isSpotsEnabled &&
                          datesSelected.length > 0 &&
                          timeRangesSelected.length > 0
                        )
                      }
                    />
                  )}
                </section>
                <section
                  className={clsx({
                    booking__tab: true,
                    booking__tab_disabled:
                      isSpotsEnabled &&
                      !isMeetingRoomsEnabled &&
                      !sectionsVisibility.isMobileView,
                    booking__tab_hidden:
                      (!isWorkplacesEnabled || !isMeetingRoomsEnabled) &&
                      sectionsVisibility.isMobileView,
                  })}
                  aria-hidden={!isWorkplacesEnabled || !isMeetingRoomsEnabled}
                >
                  {!sectionsVisibility.isMobileView && (
                    <>
                      <h3 className="booking__tab-title">
                        В одной переговорной 8 мест
                      </h3>
                      <p className="booking__spot-price">
                        {currentMeetingPrice}
                      </p>
                    </>
                  )}
                  <ButtonsList
                    isEnabled={
                      isWorkplacesEnabled &&
                      isMeetingRoomsEnabled &&
                      datesSelected.length > 0 &&
                      timeRangesSelected.length > 0
                    }
                    listType="meeting-rooms"
                    itemsList={meetingRooms}
                    sortFunc={spotsSortFunc}
                    listClassName="booking__buttons-list booking__buttons-list_type_meeting-rooms"
                  />
                </section>
              </div>
            </div>
          </section>
          <section
            className="booking__section"
            aria-label="Секция итоговой суммы к оплате"
          >
            {!sectionsVisibility.isMobileView && (
              <h2 className="booking__section-title">{`Сумма к оплате: ${totalPrice}`}</h2>
            )}
            <Button
              btnClass="button_type_form button_size_middle booking__pay-button"
              btnText="Перейти к оплате"
              isValidBtn={!!totalPrice}
              onClick={handlePayClick}
            />
          </section>
        </>
      )}
    </main>
  );
};

Booking.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.number,
    openTime: PropTypes.string,
    closeTime: PropTypes.string,
    daysOpen: PropTypes.string,
  }),
};

Booking.defaultProps = {
  location: {
    id: null,
    openTime: null,
    closeTime: null,
    daysOpen: null,
  },
};
