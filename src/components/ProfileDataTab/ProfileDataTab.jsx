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

import { formatPhone, formatDate } from "../../utils/utils";
import { PROFILE_DATA_UPDATE } from "../../utils/constants";

export const ProfileDataTab = () => {
  const { currentUser, setСurrentUser, showMessage } =
    useContext(CurrentUserContext);
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

  const hasChanges = () => currentUser !== editedUser;

  const handleFormChange = (e) => {
    handleChange(e);
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    editUserData(editedUser)
      .then(() => {
        showMessage(PROFILE_DATA_UPDATE, "info");
        setСurrentUser(editedUser);
      })
      .finally(() => {
        setIsSubmitting(false);
      });

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
            <span className="profile-data__label">Имя</span>
            <span className="profile-data__text-overflow">
              {editedUser?.first_name}
            </span>
          </li>
          <li className="profile-data__list-item">
            <span className="profile-data__label">Фамилия</span>
            <span className="profile-data__text-overflow">
              {editedUser?.last_name}
            </span>
          </li>
          <li className="profile-data__list-item">
            <span className="profile-data__label">Дата рождения</span>
            <span className="profile-data__text-overflow">
              {editedUser?.birth_date && formatDate(editedUser?.birth_date)}
            </span>
          </li>
          <li className="profile-data__list-item">
            <span className="profile-data__label">Номер телефона</span>
            <span className="profile-data__text-overflow">
              {editedUser?.phone && formatPhone(editedUser?.phone)}
            </span>
          </li>
          <li className="profile-data__list-item">
            <span className="profile-data__label">Адрес эл. почты</span>
            <span className="profile-data__text-overflow">
              {editedUser?.email}
            </span>
          </li>
          <li className="profile-data__list-item">
            <span className="profile-data__label">Род деятельности</span>
            <span className="profile-data__text-overflow">
              {editedUser?.occupation}
            </span>
          </li>
        </ul>
      ) : (
        <div className="profile-data__form">
          <ProfileDataForm title="Редактирование данных профиля">
            <ul className="profile-data__list">
              {[
                {
                  id: 1,
                  name: "first_name",
                  placeholder: "Имя",
                  required: true,
                  type: "text",
                  maxLength: 21,
                },
                {
                  id: 2,
                  name: "last_name",
                  placeholder: "Фамилия",
                  required: true,
                  type: "text",
                  maxLength: 21,
                },
                {
                  id: 3,
                  name: "birth_date",
                  placeholder: "Дата рождения",
                  required: false,
                  type: "date",
                },
                {
                  id: 4,
                  name: "phone",
                  placeholder: "Номер телефона",
                  required: false,
                  type: "text",
                },
                {
                  id: 5,
                  name: "email",
                  placeholder: "Email",
                  required: true,
                  type: "email",
                },
                {
                  id: 6,
                  name: "occupation",
                  placeholder: "Род деятельности",
                  required: false,
                  type: "text",
                },
              ].map((field) => (
                <li key={field.id} className="profile-data__list-input">
                  <Input
                    inputClass="profile-data__input"
                    inputType={field.type}
                    inputName={field.name}
                    inputValue={values[field.name] ?? editedUser[field.name]}
                    inputError={errors[field.name]}
                    handleChange={handleFormChange}
                    inputPlaceholder={field.placeholder}
                    inputRequired={field.required}
                    inputMaxLength={field.maxLength}
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
