import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../UI-kit/Button/Button";

import "./Profile.scss";

import { ProfileDataTab } from "../ProfileDataTab/ProfileDataTab";
import { SecurityTab } from "../SecurityTab/SecurityTab";
import { PaymentTab } from "../PaymentTab/PaymentTab";
import { BookingsTab } from "../BookingsTab/BookingsTab";
import { FavoritesTab } from "../FavoritesTab/FavorutesTab";

export const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState("personalData");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "personalData":
        return <ProfileDataTab user={user} />;
      case "security":
        return <SecurityTab user={user} />;
      case "payment":
        return <PaymentTab user={user} />;
      case "bookings":
        return <BookingsTab />;
      case "favorites":
        return <FavoritesTab />;
      default:
        return null;
    }
  };

  return (
    <section className="profile">
      <div className="profile__menu">
        <Button
          btnClass={`button__profile button__profile_data ${
            activeTab === "personalData" ? "button__profile_data-active" : ""
          }`}
          btnText="Персональные данные"
          onClick={() => handleTabClick("personalData")}
        />
        <Button
          btnClass={`button__profile button__profile_security ${
            activeTab === "security" ? "button__profile_security-active" : ""
          }`}
          btnText="Безопасность и конфиденциальность"
          onClick={() => handleTabClick("security")}
          isActive={activeTab === "security"}
        />
        <Button
          btnClass={`button__profile button__profile_payment ${
            activeTab === "payment" ? "button__profile_payment-active" : ""
          }`}
          btnText="Платежные данные"
          onClick={() => handleTabClick("payment")}
          isActive={activeTab === "payment"}
        />
        <Button
          btnClass={`button__profile button__profile_bookings ${
            activeTab === "bookings" ? "button__profile_bookings-active" : ""
          }`}
          btnText="Бронирования"
          onClick={() => handleTabClick("bookings")}
          isActive={activeTab === "bookings"}
        />
        <Button
          btnClass={`button__profile button__profile_favorites ${
            activeTab === "favorites" ? "button__profile_favorites-active" : ""
          }`}
          btnText="Избранное"
          onClick={() => handleTabClick("favorites")}
          isActive={activeTab === "favorites"}
        />
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
      number: PropTypes.string.isRequired,
      valid: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  }),
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
};
