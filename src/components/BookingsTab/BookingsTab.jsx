import React, { useState, useEffect } from "react";

import { BookingsCard } from "../BookingsCard/BookingsCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import Button from "../UI-kit/Button/Button";

import { getActiveOrders, getFinishedOrders } from "../../utils/Api";

import "./BookingsTab.scss";

export const BookingsTab = () => {
  const defaultCardsNumber = 3;
  const [activeTab, setActiveTab] = useState("active");
  const [bookings, setBookings] = useState([]);
  const [loadedCount, setLoadedCount] = useState(defaultCardsNumber);
  const [visibleBookings, setVisibleBookings] = useState([]);

  useEffect(() => {
    if (activeTab === "active") {
      getActiveOrders()
        .then((data) => {
          const modData = data.map((item) => ({
            ...item,
            isFinished: false,
          }));
          setBookings(modData);
          setLoadedCount(defaultCardsNumber);
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
          setLoadedCount(defaultCardsNumber);
        })
        .catch(() => {});
    }
  }, [activeTab]);

  useEffect(() => {
    const visible = bookings.slice(0, loadedCount);
    setVisibleBookings(visible);
  }, [bookings, loadedCount]);

  const handleShowMore = () => {
    setLoadedCount((prevCount) => prevCount + defaultCardsNumber);
  };

  const onUpdateStatus = (itemId) => {
    const updatedBookings = bookings.filter((item) => item.id !== itemId);

    setBookings(updatedBookings);
  };

  const onReviewSubmit = (itemId) => {
    const updatedBookings = bookings.map((item) => {
      if (item.id === itemId) {
        return { ...item, reviews: 1 };
      }
      return item;
    });

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
          type="button"
          onClick={() => setActiveTab("active")}
        >
          Активные
        </button>
        <button
          className={`bookings__tab-button ${
            activeTab === "finished" ? "bookings__tab-button_active" : ""
          }`}
          type="button"
          onClick={() => setActiveTab("finished")}
        >
          Завершенные
        </button>
      </div>
      <ul className="bookings__card-list">
        {bookings.length === 0 && (
          <span className="bookings__nodata">Пока бронирований нет</span>
        )}
        {visibleBookings.map((item) => (
          <BookingsCard
            item={item}
            key={item.id}
            onUpdateStatus={onUpdateStatus}
            onReviewSubmit={onReviewSubmit}
          />
        ))}
      </ul>
      {visibleBookings.length !== bookings.length && (
        <div className="bookings__button-container">
          <Button
            btnText="Еще"
            onClick={handleShowMore}
            btnClass="button_more button_type_transparent button_size_medium"
          />
        </div>
      )}
    </section>
  );
};
