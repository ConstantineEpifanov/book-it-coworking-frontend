import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

import { BookingsCard } from "../BookingsCard/BookingsCard";

import { getActiveOrders, getFinishedOrders } from "../../utils/Api";

import "./BookingsTab.scss";

export const BookingsTab = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (activeTab === "active") {
      getActiveOrders()
        .then((data) => {
          const modData = data.map((item) => ({
            ...item,
            isFinished: false,
          }));
          setBookings(modData);
        })
        .catch(() => {});
    } else if (activeTab === "finished") {
      getFinishedOrders()
        .then((data) => {
          const modData = data.map((item) => ({
            ...item,
            isFinished: true,
          }));
          setBookings(modData);
        })
        .catch(() => {});
    }
  }, [activeTab]);

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
        {bookings.map((item) => (
          <BookingsCard item={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

// BookingsTab.propTypes = {
//   bookings: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       spot: PropTypes.shape({
//         name: PropTypes.string,
//         image: PropTypes.string,
//       }),
//       date: PropTypes.string,
//       start_time: PropTypes.string,
//       end_time: PropTypes.string,
//       bill: PropTypes.number,
//       isFinished: PropTypes.bool,
//       status: PropTypes.oneOf(["Confirmed", "Processing"]),
//     }),
//   ),
// };

// BookingsTab.defaultProps = {
//   bookings: [
//     {
//       id: undefined,
//       spot: {},
//       date: undefined,
//       start_time: undefined,
//       end_time: undefined,
//       bill: undefined,
//       isFinished: false,
//       status: "Processing",
//     },
//   ],
// };
