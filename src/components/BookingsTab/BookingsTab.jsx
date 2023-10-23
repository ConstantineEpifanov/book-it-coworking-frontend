import React, { useState, useEffect } from "react";

import { BookingsCard } from "../BookingsCard/BookingsCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";

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

  const onUpdateStatus = (itemId) => {
    const updatedBookings = bookings.filter((item) => item.id !== itemId);

    setBookings(updatedBookings);
  };

  return (
    <section className="bookings">
      <SectionTitle
        titleText="Бронирования"
        titleClass="section-title_profile"
      />
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
        {bookings.length === 0 && (
          <span className="bookings__nodata">Пока бронирований нет</span>
        )}
        {bookings.map((item) => (
          <BookingsCard
            item={item}
            key={item.id}
            onUpdateStatus={onUpdateStatus}
          />
        ))}
      </ul>
    </section>
  );
};
