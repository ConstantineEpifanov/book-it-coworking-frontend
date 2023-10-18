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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { values, handleChange, errors, isValid } = useFormAndValidation();

  useEffect(() => {
    setEditedUser(currentUser);
  }, [currentUser]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleEditClick = () => {
    setIsEdited(true);
  };

  const handleCancelClick = () => {
    setIsEdited(false);
    handleScrollToTop();
  };

  const hasChanges = () =>
    Object.keys(values).some((key) => values[key] !== editedUser[key]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const changedFields = {};
    Object.keys(values).forEach((key) => {
      if (values[key] !== editedUser[key]) {
        changedFields[key] = values[key];
      }
    });
    setEditedUser((prev) => ({
      ...prev,
      ...changedFields,
    }));
    editUserData(changedFields).finally(() => setIsSubmitting(false));
    setIsEdited(false);
    handleScrollToTop();
  };

  return (
    <section className="profile-data">
      <div className="profile-data__header-container">
        <h2 className="profile-data__title">Персональные данные</h2>
      </div>
      <img
        src={ProfilePhoto}
        className="profile-data__image"
        alt="Фото профиля"
      />

      {!isEdited ? (
        <ul className="profile-data__info-list">
          <li className="profile-data__list-item">
            <span>Имя</span>
            <span>{editedUser?.first_name}</span>
          </li>
          <li className="profile-data__list-item">
            <span>Фамилия</span>
            <span>{editedUser?.last_name}</span>
          </li>
          <li className="profile-data__list-item">
            <span>Дата рождения</span>
            <span>{editedUser?.birth_date}</span>
          </li>
          <li className="profile-data__list-item">
            <span>Номер телефона</span>
            <span>{editedUser?.phone && formatPhone(editedUser?.phone)}</span>
          </li>
          <li className="profile-data__list-item">
            <span>Адрес эл. почты</span>
            <span>{editedUser?.email}</span>
          </li>
          <li className="profile-data__list-item">
            <span>Род деятельности</span>
            <span>{editedUser?.occupation}</span>
          </li>
        </ul>
      ) : (
        <div className="profile-data__form">
          <ProfileDataForm title="Редактирование данных профиля">
            <ul className="profile-data__list">
              {[
                { id: 1, name: "first_name", placeholder: "Имя" },
                { id: 2, name: "last_name", placeholder: "Фамилия" },
                { id: 3, name: "birth_date", placeholder: "Дата рождения" },
                { id: 4, name: "phone", placeholder: "Номер телефона" },
                { id: 5, name: "email", placeholder: "Email" },
                { id: 6, name: "occupation", placeholder: "Род деятельности" },
              ].map((field) => (
                <li key={field.id} className="profile-data__list-input">
                  <Input
                    inputClass="profile-data__input"
                    inputType="text"
                    inputName={field.name}
                    inputValue={values[field.name] ?? editedUser[field.name]}
                    inputError={errors[field.name]}
                    handleChange={handleChange}
                    inputPlaceholder={field.placeholder}
                  />
                </li>
              ))}
            </ul>
          </ProfileDataForm>
        </div>
      )}

      <p className="profile-data__info">
        мы запрашиваем информацию исключительно в целях рекламы и промо-акций
        для вас
      </p>
      {isEdited ? (
        <div className="profile-data__buttons">
          <Button
            btnText="Отменить"
            btnClass="button__profile-small button_type_transparent"
            onClick={handleCancelClick}
            btnType="button"
          />
          <Button
            btnText={!isSubmitting ? "Сохранить" : "Сохранение..."}
            btnClass="button__profile-edit"
            onClick={handleSubmit}
            btnType="submit"
            isValidBtn={isValid && hasChanges() && !isSubmitting}
          />
        </div>
      ) : (
        <Button
          btnText="Редактировать"
          btnClass="button__profile-small button_type_transparent"
          onClick={handleEditClick}
          btnType="button"
        />
      )}
    </section>
  );
};
