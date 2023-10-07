import React from "react";
import "./ProfileDashboard.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ProfileItem } from "../ProfileItem/ProfileItem";

import UserIcon from "../../images/profile-icons/UserIcon";
import HeartIcon from "../../images/profile-icons/HeartIcon";
import SuitcaseIcon from "../../images/profile-icons/SuitcaseIcon";
import LockIcon from "../../images/profile-icons/LockIcon";
import CardIcon from "../../images/profile-icons/CardItem";

export const ProfileDashboard = () => (
  <div className="profile-dashboard">
    <SectionTitle titleText="Личный кабинет" />
    <div className="profile-dashboard__card-list">
      <div className="profile-dashboard__card-row">
        <ProfileItem title="Персональные данные" svgElement={<UserIcon />} />
        <ProfileItem
          title="Безопасность и конфиденциальность"
          svgElement={<LockIcon />}
        />
      </div>
      <div className="profile-dashboard__card-row">
        <ProfileItem title="Платежные данные" svgElement={<CardIcon />} />
        <ProfileItem title="Бронирования" svgElement={<SuitcaseIcon />} />
      </div>
      <div className="profile-dashboard__card-center">
        <ProfileItem title="Избранное" svgElement={<HeartIcon />} />
      </div>
    </div>
  </div>
);
