import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { profileMenuItems } from "../../utils/constants";

import Button from "../UI-kit/Button/Button";
import { BackLink } from "./BackLink";

import "./Profile.scss";

import { ProfileDataTab } from "../ProfileDataTab/ProfileDataTab";
import { SecurityTab } from "../SecurityTab/SecurityTab";
import { PaymentTab } from "../PaymentTab/PaymentTab";
import { BookingsTab } from "../BookingsTab/BookingsTab";
import { FavoritesTab } from "../FavoritesTab/FavoritesTab";

const renderTabContent = (active) => {
  switch (active) {
    case "data":
      return <ProfileDataTab />;
    case "security":
      return <SecurityTab />;
    case "payment":
      return <PaymentTab />;
    case "bookings":
      return <BookingsTab />;
    case "favorites":
      return <FavoritesTab />;
    default:
      return null;
  }
};

export const Profile = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const tabFromURL = pathParts[pathParts.length - 1];
    setActiveTab(
      profileMenuItems.some((tab) => tab.id === tabFromURL)
        ? tabFromURL
        : "data",
    );
  }, [location.pathname]);

  return (
    <section className="profile">
      <div className="profile__menu">
        {profileMenuItems.map((tab) => (
          <Link key={tab.id} to={`/profile/${tab.id}`}>
            <Button
              btnClass={`button__profile button__profile_${tab.id} ${
                activeTab === tab.id ? `button__profile_${tab.id}-active` : ""
              }`}
              btnText={tab.text}
            />
          </Link>
        ))}
      </div>
      <div className="profile__tab">
        <BackLink />
        {renderTabContent(activeTab)}
      </div>
    </section>
  );
};
