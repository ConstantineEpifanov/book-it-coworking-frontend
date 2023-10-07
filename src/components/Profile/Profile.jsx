import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import Button from "../UI-kit/Button/Button";

import "./Profile.scss";

import { ProfileDataTab } from "../ProfileDataTab/ProfileDataTab";
import { SecurityTab } from "../SecurityTab/SecurityTab";
import { PaymentTab } from "../PaymentTab/PaymentTab";
import { BookingsTab } from "../BookingsTab/BookingsTab";
import { FavoritesTab } from "../FavoritesTab/FavoritesTab";

const validTabs = [
  "personalData",
  "security",
  "payment",
  "bookings",
  "favorites",
];

export const Profile = ({ user, favorites, bookings }) => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const tabFromURL = pathParts[pathParts.length - 1];
    setActiveTab(validTabs.includes(tabFromURL) ? tabFromURL : "personalData");
  }, [location.pathname]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "personalData":
        return <ProfileDataTab user={user} />;
      case "security":
        return <SecurityTab user={user} />;
      case "payment":
        return <PaymentTab user={user} />;
      case "bookings":
        return <BookingsTab bookings={bookings} />;
      case "favorites":
        return <FavoritesTab favorites={favorites} />;
      default:
        return null;
    }
  };

  return (
    <section className="profile">
      <div className="profile__menu">
        <Link to="/profile/personalData">
          <Button
            btnClass={`button__profile button__profile_data ${
              activeTab === "personalData" ? "button__profile_data-active" : ""
            }`}
            btnText="Персональные данные"
          />
        </Link>
        <Link to="/profile/security">
          <Button
            btnClass={`button__profile button__profile_security ${
              activeTab === "security" ? "button__profile_security-active" : ""
            }`}
            btnText="Безопасность и конфиденциальность"
            isActive={activeTab === "security"}
          />
        </Link>
        <Link to="/profile/payment">
          <Button
            btnClass={`button__profile button__profile_payment ${
              activeTab === "payment" ? "button__profile_payment-active" : ""
            }`}
            btnText="Платежные данные"
            isActive={activeTab === "payment"}
          />
        </Link>
        <Link to="/profile/bookings">
          <Button
            btnClass={`button__profile button__profile_bookings ${
              activeTab === "bookings" ? "button__profile_bookings-active" : ""
            }`}
            btnText="Бронирования"
            isActive={activeTab === "bookings"}
          />
        </Link>
        <Link to="/profile/favorites">
          <Button
            btnClass={`button__profile button__profile_favorites ${
              activeTab === "favorites"
                ? "button__profile_favorites-active"
                : ""
            }`}
            btnText="Избранное"
            isActive={activeTab === "favorites"}
          />
        </Link>
      </div>
      <div className="profile__tab">{renderTabContent()}</div>
    </section>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    birth_date: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    occupation: PropTypes.string,
    password: PropTypes.string,
    card: PropTypes.shape({
      number: PropTypes.string,
      valid: PropTypes.string,
      type: PropTypes.string,
    }),
  }),
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      street: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      image: PropTypes.string,
    }),
  ),
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      spot: PropTypes.shape({
        name: PropTypes.string,
      }),
      date: PropTypes.string,
      start_time: PropTypes.string,
      end_time: PropTypes.string,
      bill: PropTypes.number,
      status: PropTypes.oneOf(["Confirmed", "Processing"]),
    }),
  ),
};

Profile.defaultProps = {
  user: {
    first_name: "",
    last_name: "",
    birth_date: "",
    phone: "",
    email: "",
    occupation: "",
    password: "",
    card: {},
  },
  favorites: [],
  bookings: [],
};
