import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Calendar.scss";

const getStartDayOfWeek = (date) => {
  const dayNumber = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const dayOfWeek = dayNumber === 0 ? 7 : dayNumber;
  return dayOfWeek;
};

export const Calendar = ({
  selectCallback = null,
  isMultiSelect = false,
  initialDate = null,
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

  const [date, setDate] = useState(todayDate);
  const [selectedDates, setSelectedDates] = useState([]);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfWeek(date));

  // Количество дней в текущем месяце
  const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const handleCellClick = (cellDay) => {
    if (cellDay < 1) {
      return;
    }

    if (selectedDates.includes(cellDay)) {
      setSelectedDates(selectedDates.filter((item) => item !== cellDay));
      return;
    }

    if (isMultiSelect) {
      setSelectedDates((prev) => [...prev, cellDay]);
      return;
    }

    setSelectedDates([cellDay]);
  };

  const getCellText = (cellDay) => {
    if (cellDay < 1) {
      return "";
    }

    if (cellDay < 10) {
      return `0${cellDay}`;
    }

    return cellDay.toString();
  };

  useEffect(() => {
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfWeek(date));
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
        {Array(days + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const cellDay = index - (startDay - 2);
            const key = `cell${index}`;
            const cellText = getCellText(cellDay);
            return (
              <div className="calendar__cell">
                <button
                  className={`calendar__button${
                    selectedDates.includes(cellDay)
                      ? " calendar__button_highlighted"
                      : ""
                  }`}
                  key={key}
                  onClick={() => handleCellClick(cellDay)}
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
};

Calendar.defaultProps = {
  selectCallback: null,
  isMultiSelect: false,
  initialDate: null,
};
