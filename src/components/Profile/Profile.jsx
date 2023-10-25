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

// import LeftArrow from "../../images/profile-icons/left-arrow.svg";

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
        {/* <Link to="/profile/payment">
          <Button
            btnClass={`button__profile button__profile_payment ${
              activeTab === "payment" ? "button__profile_payment-active" : ""
            }`}
            btnText="Платежные данные"
            isActive={activeTab === "payment"}
          />
        </Link> */}
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

      <div className="profile__tab">
        <Link to="/profile" className="profile__back">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="profile__back-svg"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icons">
              <path
                id="Vector"
                d="M14.2828 3.501L6.5098 11.475C6.37328 11.6151 6.29688 11.8029 6.29688 11.9985C6.29688 12.1941 6.37328 12.3819 6.5098 12.522L14.2828 20.499C14.3464 20.5643 14.4224 20.6162 14.5064 20.6517C14.5904 20.6871 14.6806 20.7054 14.7718 20.7054C14.863 20.7054 14.9532 20.6871 15.0372 20.6517C15.1212 20.6162 15.1972 20.5643 15.2608 20.499C15.3916 20.3651 15.4649 20.1852 15.4649 19.998C15.4649 19.8108 15.3916 19.631 15.2608 19.497L7.9513 11.9985L15.2608 4.5015C15.3912 4.36762 15.4641 4.18813 15.4641 4.00125C15.4641 3.81437 15.3912 3.63488 15.2608 3.501C15.1972 3.43569 15.1212 3.38377 15.0372 3.34833C14.9532 3.31288 14.863 3.29462 14.7718 3.29462C14.6806 3.29462 14.5904 3.31288 14.5064 3.34833C14.4224 3.38377 14.3464 3.43569 14.2828 3.501Z"
                fill="#122023"
              />
            </g>
          </svg>
          Назад
        </Link>
        {renderTabContent()}
      </div>
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
