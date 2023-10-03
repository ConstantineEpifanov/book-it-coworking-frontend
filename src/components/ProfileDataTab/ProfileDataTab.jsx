import React from "react";
import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";
import "./ProfileDataTab.scss";

import ProfilePhoto from "../../images/ProfilePhoto.png";

export const ProfileDataTab = ({ user }) => {
  function formatPhone(phoneNumber) {
    return phoneNumber
      .replace(/\D/g, "")
      .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 $2 $3 $4 $5");
  }

  return (
    <section className="profile-data">
      <div className="profile-data__header-container">
        <h2 className="profile-data__title">Персональные данные</h2>
        <Button btnText="Редактировать" btnClass="button__profile-edit" />
      </div>
      <img
        src={ProfilePhoto}
        className="profile-data__image"
        alt="Фото профиля"
      />
      <ul className="profile-data__list">
        <li className="profile-data__list-item">
          <span>Имя</span>
          <span>{user.first_name}</span>
        </li>
        <li className="profile-data__list-item">
          <span>Фамилия</span>
          <span>{user.last_name}</span>
        </li>
        <li className="profile-data__list-item">
          <span>Дата рождения</span>
          <span>{user.birth_date}</span>
        </li>
        <li className="profile-data__list-item">
          <span>Номер телефона</span>
          <span>{formatPhone(user.phone)}</span>
        </li>
        <li className="profile-data__list-item">
          <span>Адрес эл. почты</span>
          <span>{user.email}</span>
        </li>
        <li className="profile-data__list-item">
          <span>Род деятельности</span>
          <span>{user.occupation}</span>
        </li>
      </ul>
      <p className="profile-data__info">
        мы запрашиваем информацию исключительно в целях рекламы и промо-акций
        для вас
      </p>
    </section>
  );
};

ProfileDataTab.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    birth_date: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    occupation: PropTypes.string,
  }),
};

ProfileDataTab.defaultProps = {
  user: {
    first_name: "",
    last_name: "",
    birth_date: "",
    phone: "",
    email: "",
    occupation: "",
  },
};
