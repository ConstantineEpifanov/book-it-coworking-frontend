import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";
// import Input from "../UI-kit/Input/Input";

import "./ProfileDataTab.scss";

import ProfilePhoto from "../../images/ProfilePhoto.png";

import { getUserInfo } from "../../utils/Api";

import { formatPhone } from "../../utils/utils";

export const ProfileDataTab = () => {
  // eslint-disable-next-line no-unused-vars
  const [isEdited, setIsEdited] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = () => {
      getUserInfo()
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error("Ошибка при получении данных пользователя");
        })
        .then((userData) => {
          setEditedUser(userData);
        })
        .catch((error) => {
          // Обработка ошибок
          console.error(error);
        });
    };

    fetchUserInfo();
  }, []);

  const handleEditClick = () => {
    setIsEdited(true);
  };

  const handleSaveClick = () => {
    // Отправка запроса
    setIsEdited(false);
  };

  // eslint-disable-next-line no-unused-vars
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  return (
    <section className="profile-data">
      <div className="profile-data__header-container">
        <h2 className="profile-data__title">Персональные данные</h2>
        {isEdited ? (
          <Button
            btnText="Сохранить"
            btnClass="button__profile-edit"
            onClick={handleSaveClick}
          />
        ) : (
          <Button
            btnText="Редактировать"
            btnClass="button__profile-edit"
            onClick={handleEditClick}
          />
        )}
      </div>
      <img
        src={ProfilePhoto}
        className="profile-data__image"
        alt="Фото профиля"
      />
      <ul className="profile-data__list">
        <li className="profile-data__list-item">
          <span>Имя</span>
          {isEdited ? (
            <input
              type="text"
              name="first_name"
              value={editedUser?.first_name}
              onChange={handleInputChange}
            />
          ) : (
            <span>{editedUser?.first_name}</span>
          )}
        </li>
        <li className="profile-data__list-item">
          <span>Фамилия</span>
          {isEdited ? (
            <input
              type="text"
              name="last_name"
              value={editedUser?.last_name}
              onChange={handleInputChange}
            />
          ) : (
            <span>{editedUser?.last_name}</span>
          )}
        </li>
        <li className="profile-data__list-item">
          <span>Дата рождения</span>
          {isEdited ? (
            <input
              type="text"
              name="birth_date"
              value={editedUser?.birth_date}
              onChange={handleInputChange}
            />
          ) : (
            <span>{editedUser?.birth_date}</span>
          )}
        </li>
        <li className="profile-data__list-item">
          <span>Номер телефона</span>
          {isEdited ? (
            <input
              type="text"
              name="phone"
              value={editedUser?.phone}
              onChange={handleInputChange}
            />
          ) : (
            <span>{editedUser?.phone && formatPhone(editedUser?.phone)}</span>
          )}
        </li>
        <li className="profile-data__list-item">
          <span>Адрес эл. почты</span>
          {isEdited ? (
            <input
              type="text"
              name="email"
              value={editedUser?.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{editedUser?.email}</span>
          )}
        </li>
        <li className="profile-data__list-item">
          <span>Род деятельности</span>
          {isEdited ? (
            <input
              type="text"
              name="occupation"
              value={editedUser?.occupation}
              onChange={handleInputChange}
            />
          ) : (
            <span>{editedUser?.occupation}</span>
          )}
        </li>
      </ul>
      <p className="profile-data__info">
        мы запрашиваем информацию исключительно в целях рекламы и промо-акций
        для вас
      </p>
    </section>
  );
};

// ProfileDataTab.propTypes = {
//   user: PropTypes.shape({
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//     birth_date: PropTypes.string,
//     phone: PropTypes.string,
//     email: PropTypes.string,
//     occupation: PropTypes.string,
//   }),
// };

// ProfileDataTab.defaultProps = {
//   user: {
//     first_name: "",
//     last_name: "",
//     birth_date: "",
//     phone: "",
//     email: "",
//     occupation: "",
//   },
// };
