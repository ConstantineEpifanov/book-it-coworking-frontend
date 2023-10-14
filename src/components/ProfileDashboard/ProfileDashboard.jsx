import React from "react";
import { Link } from "react-router-dom";

import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ProfileItem } from "../ProfileItem/ProfileItem";

import UserIcon from "../../images/profile-icons/UserIcon";
import HeartIcon from "../../images/profile-icons/HeartIcon";
import SuitcaseIcon from "../../images/profile-icons/SuitcaseIcon";
import LockIcon from "../../images/profile-icons/LockIcon";
import CardIcon from "../../images/profile-icons/CardItem";

import "./ProfileDashboard.scss";

export const ProfileDashboard = () => (
  <div className="profile-dashboard">
    <SectionTitle titleText="Личный кабинет" />
    <div className="profile-dashboard__card-list">
      <div className="profile-dashboard__card-row">
        <Link className="profile-dashboard__link" to="/profile/personalData">
          <ProfileItem title="Персональные данные" svgElement={<UserIcon />} />
        </Link>
        <Link className="profile-dashboard__link" to="/profile/security">
          <ProfileItem
            title="Безопасность и конфиденциальность"
            svgElement={<LockIcon />}
          />
        </Link>
      </div>
      <div className="profile-dashboard__card-row">
        <Link className="profile-dashboard__link" to="/profile/payment">
          <ProfileItem title="Платежные данные" svgElement={<CardIcon />} />
        </Link>
        <Link className="profile-dashboard__link" to="/profile/bookings">
          <ProfileItem title="Бронирования" svgElement={<SuitcaseIcon />} />
        </Link>
      </div>
      <div className="profile-dashboard__card-center">
        <Link
          className="profile-dashboard__link"
          to="/profile/favorites"
          state={null}
        >
          <ProfileItem title="Избранное" svgElement={<HeartIcon />} />
        </Link>
      </div>
    </div>
  </div>
);
