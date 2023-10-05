import React from "react";
// import PropTypes from 'prop-types';

import "./Booking.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const Booking = () => (
  <main className="booking" aria-label="Страница бронирования">
    <SectionTitle titleText="Бронирование" />
    <section
      className="booking__date-section"
      aria-label="Секция выбора даты и времени"
    >
      <h2 className="booking__section-title">1. Выберите дату и время</h2>
    </section>

    <section
      className="booking__date-section"
      aria-label="Секция выбора рабочего места"
    >
      <h2 className="booking__section-title">2. Выберете тип рабочего места</h2>
    </section>
    <section
      className="booking__date-section"
      aria-label="Секция итоговой суммы к оплате"
    >
      <h2 className="booking__section-title">Сумма к оплате: 1200</h2>
    </section>
  </main>
);
