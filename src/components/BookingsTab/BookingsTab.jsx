import React, { useState } from "react";
import PropTypes from "prop-types";

import { BookingsCard } from "../BookingsCard/BookingsCard";

import "./BookingsTab.scss";

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
