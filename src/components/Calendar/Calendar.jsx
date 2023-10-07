import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Calendar.scss";

const getStartDayOfWeek = (date) => {
  const dayNumber = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const dayOfWeek = dayNumber === 0 ? 7 : dayNumber;
  return dayOfWeek;
};

const getMonthDays = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const isDayDateEarlier = (firstDate, secondDate) => {
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
  return firstDay.getTime() < secondDay.getTime();
};

const isDayDateLater = (firstDate, secondDate) => {
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
  return firstDay.getTime() > secondDay.getTime();
};

export const Calendar = ({
  selectCallback = null,
  isMultiSelect = false,
  initialDate = null,
  maxDatesRange = 60,
}) => {
  const DAYS_NAMES = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  const MONTHS_NAMES = [
    "ЯНВАРЬ",
    "ФЕВРАЛЬ",
    "МАРТ",
    "АПРЕЛЬ",
    "МАЙ",
    "ИЮНЬ",
    "ИЮЛЬ",
    "АВГУСТ",
    "СЕНТЯБРЬ",
    "ОКТЯБРЬ",
    "НОЯБРЬ",
    "ДЕКАБРЬ",
  ];

  const todayDate = new Date();

  // Последняя доступная дата, начиная с сегодняшнего дня
  const lastPermitedDate = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() + maxDatesRange - 1,
  );

  const [date, setDate] = useState(todayDate);
  const [selectedDates, setSelectedDates] = useState([]);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  // День недели, в который начинается месяц
  const [startDay, setStartDay] = useState(getStartDayOfWeek(date));
  const [currentMonthDays, setCurrentMonthDays] = useState(getMonthDays(date));

  // Количество дней в текущем месяце
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const isDateSelected = (dateArray, cellDate) =>
    dateArray.some(
      (selectedDate) => selectedDate.getTime() === cellDate.getTime(),
    );

  // Считаем, сколько ячеек отображать
  const getCalendarDaysCount = (daysOfMonth, startDayIndex) => {
    let resultDays = daysOfMonth + startDayIndex;
    const daysRemainder = resultDays % 7;

    if (daysRemainder !== 0) {
      resultDays += 7 - daysRemainder;
    }

    return resultDays;
  };

  // Подготовить текст ячейки
  const getCellText = (cellDay, currentDate, monthDays) => {
    let resultDay = cellDay;

    if (resultDay < 1) {
      const previousMonthDays = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0,
      ).getDate();
      return previousMonthDays + resultDay;
    }

    if (resultDay > monthDays) {
      resultDay -= monthDays;
    }

    if (resultDay < 10) {
      return `0${resultDay}`;
    }

    return resultDay.toString();
  };

  // Получить подходящий css-класс
  const getCellContentClass = (nowDate, cellDay, currentDate, monthDays) => {
    const cellDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      cellDay,
    );

    if (isDateSelected(selectedDates, cellDate)) {
      return " calendar__button_highlighted";
    }

    if (cellDay < 1) {
      return " calendar__button_previous-month";
    }

    if (cellDay > monthDays) {
      return " calendar__button_next-month";
    }

    if (isDayDateEarlier(cellDate, nowDate)) {
      return " calendar__button_inaccessible-days";
    }

    if (isDayDateLater(cellDate, lastPermitedDate)) {
      return " calendar__button_inaccessible-days";
    }

    return "";
  };

  const handleCellClick = (cellDay, monthDays) => {
    if (cellDay < 1) {
      setDate(new Date(date.getFullYear(), date.getMonth(), 0));
      return;
    }

    if (cellDay > monthDays) {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
      return;
    }

    const cellDate = new Date(date.getFullYear(), date.getMonth(), cellDay);

    if (isDateSelected(selectedDates, cellDate)) {
      setSelectedDates(
        selectedDates.filter(
          (selectedDate) => selectedDate.getTime() !== cellDate.getTime(),
        ),
      );
      return;
    }

    if (isMultiSelect) {
      setSelectedDates((prev) => [...prev, cellDate]);
      return;
    }

    setSelectedDates([cellDate]);
  };

  const handlePreviousClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth(), 0));
  };

  const handleNextClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  useEffect(() => {
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfWeek(date));
    setCurrentMonthDays(getMonthDays(date));
  }, [date]);

  useEffect(() => {
    if (initialDate) {
      setDate(new Date(initialDate));
    }
  }, [initialDate]);

  useEffect(() => {
    if (selectCallback) {
      selectCallback(selectedDates);
    }
  }, [selectedDates, selectCallback]);

  return (
    <article className="calendar">
      <header className="calendar__header">
        <h3 className="calendar__header-title">{`${MONTHS_NAMES[month]} ${year}`}</h3>
        <nav className="calendar__navigation">
          <button
            className="calendar__navigation-button calendar__navigation-button_type_previous"
            aria-label="Предыдущий месяц"
            onClick={handlePreviousClick}
          />
          <button
            className="calendar__navigation-button calendar__navigation-button_type_next"
            aria-label="Следующий месяц"
            onClick={handleNextClick}
          />
        </nav>
      </header>
      <div className="calendar__body">
        {DAYS_NAMES.map((dayName) => (
          <div
            key={dayName}
            className="calendar__cell calendar__cell_type_header"
          >
            <span>{dayName}</span>
          </div>
        ))}
        {Array(getCalendarDaysCount(days, startDay - 1))
          .fill(null)
          .map((_, index) => {
            // Получение номера дня в месяце
            // Может быть отрицательным (будет относиться к предыдущему месяцу)
            const cellDay = index - (startDay - 2);
            const key = `cell${index}`;
            const cellText = getCellText(cellDay, date, currentMonthDays);
            return (
              <div key={key} className="calendar__cell">
                <button
                  className={`calendar__button${getCellContentClass(
                    todayDate,
                    cellDay,
                    date,
                    currentMonthDays,
                  )}`}
                  key={`${key}button`}
                  onClick={() => handleCellClick(cellDay, currentMonthDays)}
                  type="button"
                  aria-label={`${MONTHS_NAMES[month]} ${cellDay}`}
                >
                  {cellText}
                </button>
              </div>
            );
          })}
      </div>
    </article>
  );
};

Calendar.propTypes = {
  selectCallback: PropTypes.func,
  isMultiSelect: PropTypes.bool,
  initialDate: PropTypes.string,
  maxDatesRange: PropTypes.number,
};

Calendar.defaultProps = {
  selectCallback: null,
  isMultiSelect: false,
  initialDate: null,
  maxDatesRange: 60,
};
