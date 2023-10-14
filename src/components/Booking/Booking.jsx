import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import "./Booking.scss";
// import { getLocationPlanPhoto, getSpots } from '../../utils/Api';
import Button from "../UI-kit/Button/Button";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Calendar } from "../Calendar/Calendar";
import { TabSwitcher } from "../TabSwitcher/TabSwitcher";

// Функции-заглушки вместо обращений к API
const getLocationPlanPhoto = () =>
  Promise.resolve({
    image:
      "http://185.41.160.27/media/images/plans/workplace_plan2_MyVLYSU.png",
  });

export const Booking = ({
  location: {
    id,
    // open_time,
    // close_time,
    // days_open,
  },
}) => {
  const FIRST_SPOT_TYPE = "Общая зона";
  const SECOND_SPOT_TYPE = "Переговорная";
  const [planPhoto, setPlanPhoto] = useState("");
  const [isWorkplacesEnabled, setWorkplacesEnabled] = useState(true);
  const [isMeetingRoomsEnabled, setMeetingRoomsEnabled] = useState(false);

  const handleSwitcherClick = (selectedSpotType) => {
    if (selectedSpotType === FIRST_SPOT_TYPE) {
      setWorkplacesEnabled(true);
      setMeetingRoomsEnabled(false);
      return;
    }
    setWorkplacesEnabled(false);
    setMeetingRoomsEnabled(true);
  };

  const loadPlanPhoto = useCallback(async () => {
    try {
      const { image } = await getLocationPlanPhoto(id);
      setPlanPhoto(image);
    } catch (err) {
      console.log(err.message);
    }
  }, [id]);

  useEffect(() => {
    loadPlanPhoto(id);
  }, [id, loadPlanPhoto]);

  return (
    <main className="booking" aria-label="Страница бронирования">
      <SectionTitle titleText="Бронирование" />
      <section
        className="booking__section"
        aria-label="Секция выбора даты и времени"
      >
        <h2 className="booking__section-title">1. Выберите дату и время</h2>
        <Calendar />
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
          </section>
          <section
            className={`booking__tab${
              !isMeetingRoomsEnabled ? " booking__text-disabled" : ""
            }`}
          >
            <h3 className="booking__tab-title">В одной переговорной 8 мест</h3>
            <p className="booking__spot-price">600 &#8381;/час</p>
          </section>
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
    open_time: PropTypes.string,
    close_time: PropTypes.string,
    count_workspace: PropTypes.number,
    count_meeting_room: PropTypes.number,
    days_open: PropTypes.string,
  }),
};

Booking.defaultProps = {
  location: {
    id: null,
    open_time: null,
    close_time: null,
    count_workspace: null,
    count_meeting_room: null,
    days_open: null,
  },
};
