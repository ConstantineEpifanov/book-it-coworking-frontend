import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";

import useFormAndValidation from "../../hooks/useFormAndValidation";
import { editUserData } from "../../utils/Api";
// import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";
import Input from "../UI-kit/Input/Input";
import ProfileDataForm from "../Forms/ProfileDataForm/ProfileDataForm";

import "./ProfileDataTab.scss";

import ProfilePhoto from "../../images/ProfilePhoto.png";

import { formatPhone } from "../../utils/utils";

export const ProfileDataTab = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [isEdited, setIsEdited] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  const { values, handleChange, errors, isValid } = useFormAndValidation();

  useEffect(() => {
    setEditedUser(currentUser);
  }, [currentUser]);

  const handleEditClick = () => {
    setIsEdited(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const changedFields = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key in values) {
      if (values[key] !== editedUser[key]) {
        changedFields[key] = values[key];
      }
    }

    setEditedUser((prev) => ({
      ...prev,
      ...changedFields,
    }));
    editUserData(changedFields);
    setIsEdited(false);
  };

  return (
    <section className="profile-data">
      {" "}
      <div className="profile-data__header-container">
        <h2 className="profile-data__title">Персональные данные</h2>
        {isEdited ? (
          <Button
            btnText="Сохранить"
            btnClass="button__profile-edit"
            onClick={handleSubmit}
            btnType="submit"
            isValidBtn={isValid && currentUser !== editUserData}
          />
        ) : (
          <Button
            btnText="Редактировать"
            btnClass="button__profile-edit"
            onClick={handleEditClick}
            btnType="button"
          />
        )}
      </div>
      <img
        src={ProfilePhoto}
        className="profile-data__image"
        alt="Фото профиля"
      />
      <ProfileDataForm title="Редактирование данных профиля">
        <ul className="profile-data__list">
          <li className="profile-data__list-item">
            <span>Имя</span>
            {isEdited ? (
              <Input
                inputType="text"
                inputName="first_name"
                inputValue={values.first_name ?? editedUser.first_name}
                inputError={errors.first_name}
                handleChange={handleChange}
              />
            ) : (
              <span>{editedUser?.first_name}</span>
            )}
          </li>
          <li className="profile-data__list-item">
            <span>Фамилия</span>
            {isEdited ? (
              <Input
                inputType="text"
                inputName="last_name"
                inputValue={values.last_name ?? editedUser.last_name}
                inputError={errors.last_name}
                handleChange={handleChange}
              />
            ) : (
              <span>{editedUser?.last_name}</span>
            )}
          </li>
          <li className="profile-data__list-item">
            <span>Дата рождения</span>
            {isEdited ? (
              <Input
                inputType="text"
                inputName="birth_date"
                inputValue={values.birth_date ?? editedUser.birth_date}
                inputError={errors.birth_date}
                handleChange={handleChange}
              />
            ) : (
              <span>{editedUser?.birth_date}</span>
            )}
          </li>
          <li className="profile-data__list-item">
            <span>Номер телефона</span>
            {isEdited ? (
              <Input
                inputType="text"
                inputName="phone"
                inputValue={values.phone ?? editedUser.phone}
                inputError={errors.phone}
                handleChange={handleChange}
              />
            ) : (
              <span>{editedUser?.phone && formatPhone(editedUser?.phone)}</span>
            )}
          </li>
          <li className="profile-data__list-item">
            <span>Адрес эл. почты</span>
            {isEdited ? (
              <Input
                inputType="text"
                inputName="email"
                inputValue={values.email ?? editedUser.email}
                inputError={errors.email}
                handleChange={handleChange}
              />
            ) : (
              <span>{editedUser?.email}</span>
            )}
          </li>
          <li className="profile-data__list-item">
            <span>Род деятельности</span>
            {isEdited ? (
              <Input
                inputType="text"
                inputName="occupation"
                inputValue={values.occupation ?? editedUser.occupation}
                inputError={errors.occupation}
                handleChange={handleChange}
              />
            ) : (
              <span>{editedUser?.occupation}</span>
            )}
          </li>
        </ul>{" "}
      </ProfileDataForm>
      <p className="profile-data__info">
        мы запрашиваем информацию исключительно в целях рекламы и промо-акций
        для вас
      </p>
    </section>
  );
};
