import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import "./Booking.scss";
// import { getLocationPlanPhoto, getSpots } from '../../utils/Api';
import { locationData } from "../../config/exampleBookingData";
import Button from "../UI-kit/Button/Button";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Calendar } from "../Calendar/Calendar";
import { TabSwitcher } from "../TabSwitcher/TabSwitcher";
import { ButtonsList } from "../ButtonsList/ButtonsList";
import {
  WORKING_DAYS_COUNTS,
  EQUIPMENT_GENERAL_CATEGORY,
  EQUIPMENT_MEETING_CATEGORY,
} from "../../utils/constants";

// Блок функций-заглушек, используются вместо обращений к API
const getLocationPlanPhoto = () =>
  Promise.resolve({
    image:
      "https://spotit.acceleratorpracticum.ru/media/images/plans/workplace_plan2_MyVLYSU.png",
  });

const getWorkplaces = ({
  /* locationId, */ type,
  date,
  startTime,
  endTime,
}) => {
  if (
    type !== EQUIPMENT_GENERAL_CATEGORY &&
    type !== EQUIPMENT_MEETING_CATEGORY
  ) {
    throw new Error("Unknown workplace type");
  }

  return Promise.resolve(locationData.getSpots(type, date, startTime, endTime));
};
// - окончание блока функций заглушек

// Возвращает число дня: от 1 до 7
const getNormalizedDayNumber = (date) => {
  const dayNumber = date.getDay();
  const resultNumber = dayNumber === 0 ? 7 : dayNumber;
  return resultNumber;
};

// Возвращает инстанс с параметрами для кнопки промежутка времени
const getRangeItem = (id, startTime, endTime, onItemClick) => {
  const resultStartTime = startTime
    .map((item) => (item < 10 ? `0${item}` : item))
    .join(":");
  const resultEndTime = endTime
    .map((item) => (item < 10 ? `0${item}` : item))
    .join(":");

  return {
    id,
    name: `${resultStartTime} - ${resultEndTime}`,
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

export const Booking = ({
  location: { id, openTime, closeTime, daysOpen },
}) => {
  const FIRST_SPOT_TYPE = "Общая зона";
  const SECOND_SPOT_TYPE = "Переговорная";
  const [planPhoto, setPlanPhoto] = useState("");
  const [datesSelected, setDatesSelected] = useState([]);
  const [timeRangesSelected, setTimeRangesSelected] = useState([]);
  const [spots, setSpots] = useState([]);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [isSpotsEnabled, setSpotsEnabled] = useState(false);
  const [isWorkplacesEnabled, setWorkplacesEnabled] = useState(true);
  const [isMeetingRoomsEnabled, setMeetingRoomsEnabled] = useState(false);

  const handleCalendarClick = (dates) => {
    setDatesSelected(dates);
  };

  const handleTimeItemClick = async (selectedRanges) => {
    setTimeRangesSelected(selectedRanges);
  };

  const [timeRangeItems] = useState(
    getTimeRangeItems(openTime, closeTime, handleTimeItemClick),
  );

  const handleSwitcherClick = (selectedSpotType) => {
    if (selectedSpotType === FIRST_SPOT_TYPE) {
      setWorkplacesEnabled(true);
      setMeetingRoomsEnabled(false);
      return;
    }
    setWorkplacesEnabled(false);
    setMeetingRoomsEnabled(true);
  };

  const handleSpotSelect = (selectedItems) => {
    console.log(selectedItems);
  };

  // Дополнительные правила-функции для проверки дат календаря
  // Если функция возвращает true - дата календаря будет недоступной
  const calendarExtraRules = [
    (date) => getNormalizedDayNumber(date) > WORKING_DAYS_COUNTS[daysOpen],
  ];

  const getWorkplacesData = useCallback(
    async ({ locationId, date, startTime, endTime }) => {
      let result = {};
      try {
        const spotsData = (
          await getWorkplaces({
            locationId,
            type: EQUIPMENT_GENERAL_CATEGORY,
            date,
            startTime,
            endTime,
          })
        ).map((item) => ({
          ...item,
          isEnabled: !item.isOrdered,
          onClick: handleSpotSelect,
        }));

        const meetingRoomsData = (
          await getWorkplaces({
            locationId,
            type: EQUIPMENT_MEETING_CATEGORY,
            date,
            startTime,
            endTime,
          })
        ).map((item) => ({
          ...item,
          isEnabled: !item.isOrdered,
          onClick: handleSpotSelect,
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
        isOrdered: firtsItem.isOrdered && secondItem.isOrdered,
      };
    });
  };

  //
  const loadWorkplaces = useCallback(async () => {
    const resultSpots = await datesSelected.reduce(
      async (dateResult, selectedDate) => {
        const dateSpots = await timeRangesSelected.reduce(
          async (timeResult, timeRange) => {
            const timeItem = timeRangeItems.find(
              (item) => item.id === timeRange,
            );
            if (!timeItem) {
              return timeResult;
            }
            const preparedDate = `${selectedDate.getFullYear()}-${
              selectedDate.getMonth() + 1
            }-${selectedDate.getDate()}`;
            const receivedWorkplaces = await getWorkplacesData({
              id,
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
  }, [
    id,
    datesSelected,
    timeRangesSelected,
    timeRangeItems,
    getWorkplacesData,
  ]);

  // Начальная загрузка рабочих мест
  // Получаем количество рабочих мест на завтрашний день. Из-за ограничений бэка
  const loadWorkplacesInitial = useCallback(async () => {
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
      id,
      date: preparedDate,
      startTime: openTime,
      endTime: closeTime,
    });
    setSpots(resultSpots.spots);
    setMeetingRooms(resultSpots.meetingRooms);
  }, [id, getWorkplacesData, openTime, closeTime]);

  // Загрузка изображения плана помещения
  const loadPlanPhoto = useCallback(async () => {
    try {
      const { image } = await getLocationPlanPhoto(id);
      setPlanPhoto(image);
    } catch (err) {
      console.log(err.message);
    }
  }, [id]);

  // Реакция на изменение выбранных промежутков времени
  useEffect(() => {
    if (timeRangesSelected) {
      loadWorkplaces();
      setSpotsEnabled(true);
      return;
    }
    setSpotsEnabled(false);
  }, [timeRangesSelected, loadWorkplaces]);

  useEffect(() => {
    loadPlanPhoto(id);
    loadWorkplacesInitial();
  }, [id, loadPlanPhoto, loadWorkplacesInitial]);

  return (
    <main className="booking" aria-label="Страница бронирования">
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
              <p className="booking__spot-price">200 &#8381;/час</p>
              <ButtonsList
                isEnabled={
                  isSpotsEnabled &&
                  isWorkplacesEnabled &&
                  datesSelected.length > 0 &&
                  timeRangesSelected.length > 0
                }
                listType="spots"
                itemsList={spots}
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
              <p className="booking__spot-price">600 &#8381;/час</p>
              <ButtonsList
                isEnabled={
                  isSpotsEnabled &&
                  isMeetingRoomsEnabled &&
                  datesSelected.length > 0 &&
                  timeRangesSelected.length > 0
                }
                listType="meeting-rooms"
                itemsList={meetingRooms}
              />
            </section>
          </div>
        </div>
      </section>
      <section
        className="booking__section"
        aria-label="Секция итоговой суммы к оплате"
      >
        <h2 className="booking__section-title">Сумма к оплате: 1200</h2>
        <Button
          btnClass="button_type_form button_size_middle"
          btnText="Перейти к оплате"
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
