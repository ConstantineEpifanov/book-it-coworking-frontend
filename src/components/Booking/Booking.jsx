import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "./Booking.scss";
import { getLocationPlanPhoto, getSpots, postOrder } from "../../utils/Api";
// import { locationData } from "../../config/exampleBookingData";
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
} from "../../utils/constants";

// Возвращает число дня: от 1 до 7
const getNormalizedDayNumber = (date) => {
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

// Получение массива массивов, являющихся группами - они содержат id элементов,
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

const timeSortFunc = (a, b) => {
  const [firstHour, firstMinutes] = getHourAndMinutes(a.startTime);
  const [secondHour, secondMinutes] = getHourAndMinutes(b.startTime);

  if (firstHour === secondHour) {
    return firstMinutes - secondMinutes;
  }

  return firstHour - secondHour;
};

const spotsSortFunc = (a, b) => {
  const aNum = parseInt(a.name, 10);
  const bNum = parseInt(b.name, 10);
  return aNum - bNum;
};

export const Booking = () => {
  const FIRST_SPOT_TYPE = "Общая зона";
  const SECOND_SPOT_TYPE = "Переговорная";

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
    if (selectedSpotType === FIRST_SPOT_TYPE) {
      setSpotsEnabled(true);
      setMeetingRoomsEnabled(false);
      return;
    }
    setSpotsEnabled(false);
    setMeetingRoomsEnabled(true);
  };

  // Обработчик выбора места в общей зоне
  const handleSpotSelect = (selectedItems) => {
    setSpotsSelected(selectedItems);
  };

  // Обработчик выбора переговорной
  const handleMeetingRoomSelect = (selectedItems) => {
    setMeetingRoomsSelected(selectedItems);
  };

  // Обработчик клика по кнопке "Назад"
  const handleBackButton = (e) => {
    e.preventDefault();
    navigate(-1);
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
      console.log(err.message);
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
      (date) =>
        getNormalizedDayNumber(date) >
        WORKING_DAYS_COUNTS[currentCoworkingState.daysOpen],
    ],
    [currentCoworkingState],
  );

  const calendarExtraRules = getCalendarExtraRules();

  // Получение информации о всех местах в данной location
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

  // Запрос данных и сравнение данных о всех местах в локации
  // Запрос к бэку будет выполнен для каждой выбранной даты, для каждого выбранного времени
  // Для варианта с singleSelect, запрос должен будет выполниться один раз при выборе времени
  const loadWorkplaces = useCallback(async () => {
    const resultSpots = await datesSelected.reduce(
      async (dateResult, selectedDate) => {
        const dateSpots = await timeRangesSelected.reduce(
          async (timeResult, timeRange) => {
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
                timeResult.spots,
                receivedWorkplaces.spots,
              ),
              meetingRooms: mergeSpotsStates(
                timeResult.meetingRooms,
                receivedWorkplaces.meetingRooms,
              ),
            };
          },
          {},
        );
        return {
          spots: mergeSpotsStates(dateResult.spots, dateSpots.spots),
          meetingRooms: mergeSpotsStates(
            dateResult.meetingRooms,
            dateSpots.meetingRooms,
          ),
        };
      },
      {},
    );

    if (resultSpots.spots) {
      setSpots(resultSpots.spots);
      setMeetingRooms(resultSpots.meetingRooms);
    }
  }, [datesSelected, timeRangesSelected, timeRangeItems, getWorkplacesData]);

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

  // Рекация на изменение доступности
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
      <Button
        onClick={handleBackButton}
        btnClass="button_type_back"
        btnText="Назад"
      />
      <SectionTitle titleText="Бронирование" />
      <section
        className="booking__section"
        aria-label="Секция выбора даты и времени"
      >
        <h2 className="booking__section-title">1. Выберите дату и время</h2>
        <div className="booking__flex-container">
          <Calendar
            selectCallback={handleCalendarClick}
            extraRules={calendarExtraRules}
          />
          <ButtonsList
            isEnabled={datesSelected.length > 0}
            listType="time-ranges"
            itemsList={timeRangeItems}
            allowedRanges={allowedRanges}
            sortFunc={timeSortFunc}
          />
        </div>
      </section>

      <section
        className="booking__section"
        aria-label="Секция выбора рабочего места"
      >
        <h2 className="booking__section-title">
          2. Выберете тип рабочего места
        </h2>
        <img
          className="booking__plan-photo"
          src={planPhoto}
          alt="Схема коворкинга"
        />
        <div className="booking__flex-container">
          <TabSwitcher
            firstCaption={FIRST_SPOT_TYPE}
            secondCaption={SECOND_SPOT_TYPE}
            containerClassName="booking__spot-switcher"
            onClick={handleSwitcherClick}
          />
          <div className="booking__tabs-container">
            <section
              className={`booking__tab${
                !isWorkplacesEnabled ? " booking__text-disabled" : ""
              }`}
            >
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
              />
            </section>
            <section
              className={`booking__tab${
                !isMeetingRoomsEnabled ? " booking__text-disabled" : ""
              }`}
            >
              <h3 className="booking__tab-title">
                В одной переговорной 8 мест
              </h3>
              <p className="booking__spot-price">{currentMeetingPrice}</p>
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
              />
            </section>
          </div>
        </div>
      </section>
      <section
        className="booking__section"
        aria-label="Секция итоговой суммы к оплате"
      >
        <h2 className="booking__section-title">{`Сумма к оплате: ${totalPrice}`}</h2>
        <Button
          btnClass="button_type_form button_size_middle"
          btnText="Перейти к оплате"
          isValidBtn={!!totalPrice}
          onClick={handlePayClick}
        />
      </section>
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
