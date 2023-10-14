import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import "./Booking.scss";
// import { getLocationPlanPhoto, getSpots } from '../../utils/Api';
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
  const [planPhoto, setPlanPhoto] = useState("");

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
          firstCaption="Общая зона"
          secondCaption="Переговорная"
          containerClassName="booking__spot-switcher"
        />
      </section>
      <section
        className="booking__section"
        aria-label="Секция итоговой суммы к оплате"
      >
        <h2 className="booking__section-title">Сумма к оплате: 1200</h2>
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
