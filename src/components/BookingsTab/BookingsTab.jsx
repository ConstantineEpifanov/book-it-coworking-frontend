import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../UI-kit/Button/Button";

import ClockIcon from "../../images/profile-icons/time.svg";
import CardIcon from "../../images/profile-icons/card.svg";

import "./BookingsTab.scss";

const statusLabels = {
  Confirmed: (
    <span className="bookings__status bookings__status_confirmed">
      Подтверждено
    </span>
  ),
  Processing: (
    <span className="bookings__status bookings__status_processing">
      В обработке
    </span>
  ),
};

const BookingsCard = ({ item }) => (
  <li className="bookings__card" key={item.id}>
    <img
      className="bookings__card-image"
      src={item.spot.image}
      alt={item.spot.name}
    />
    <div className="bookings__card-text-container">
      <h3 className="bookings__card-name">{item.spot.name}</h3>
      {!item.isFinished && (
        <div className="bookings__status">
          {statusLabels[item.status] || "Статус неизвестен"}
        </div>
      )}

      <div
        className={`bookings__card-date-row ${
          item.isFinished ? "bookings__card-date-row_isfinished" : ""
        }`}
      >
        <img
          src={ClockIcon}
          className="bookings__card-like"
          alt="Иконка часов"
        />
        <div className="bookings__card-date-container">
          <p className="bookings__card-date">{item.date}</p>
          <p className="bookings__card-date">
            {item.start_time}-{item.end_time}
          </p>
        </div>
        <div className="bookings__card-price-container">
          <img
            src={CardIcon}
            className="bookings__card-like"
            alt="Иконка платежной карты"
          />
          <span className="bookings__card-price">{item.bill} ₽</span>
        </div>
      </div>
      {item.isFinished ? (
        <Button btnText="Оставить отзыв" btnClass="button__profile-bookings" />
      ) : (
        <Button btnText="Отменить" btnClass="button__profile-bookings" />
      )}
    </div>
  </li>
);

export const BookingsTab = ({ bookings }) => {
  const [activeTab, setActiveTab] = useState("active");

  const filteredBookings =
    activeTab === "active"
      ? bookings.filter((item) => !item.isFinished)
      : bookings.filter((item) => item.isFinished);

  return (
    <section className="bookings">
      <h2 className="bookings__title">Бронирования</h2>
      <div className="bookings__tabs">
        <button
          className={`bookings__tab-button ${
            activeTab === "active" ? "bookings__tab-button_active" : ""
          }`}
          onClick={() => setActiveTab("active")}
        >
          Активные
        </button>
        <button
          className={`bookings__tab-button ${
            activeTab === "finished" ? "bookings__tab-button_active" : ""
          }`}
          onClick={() => setActiveTab("finished")}
        >
          Завершенные
        </button>
      </div>
      <ul className="bookings__card-list">
        {filteredBookings.map((item) => (
          <BookingsCard item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

BookingsCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    spot: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
    date: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    bill: PropTypes.number,
    isFinished: PropTypes.bool,
    status: PropTypes.oneOf(["Confirmed", "Processing"]),
  }),
};

BookingsCard.defaultProps = {
  item: PropTypes.shape({}),
};

BookingsTab.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      spot: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
      }),
      date: PropTypes.string,
      start_time: PropTypes.string,
      end_time: PropTypes.string,
      bill: PropTypes.number,
      isFinished: PropTypes.bool,
      status: PropTypes.oneOf(["Confirmed", "Processing"]),
    }),
  ),
};

BookingsTab.defaultProps = {
  bookings: [
    {
      id: undefined,
      spot: {},
      date: undefined,
      start_time: undefined,
      end_time: undefined,
      bill: undefined,
      isFinished: false,
      status: "Processing",
    },
  ],
};
