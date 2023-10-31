import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";

import useFormAndValidation from "../../hooks/useFormAndValidation";
import { editUserData } from "../../utils/Api";
// import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";
import Input from "../UI-kit/Input/Input";
import ProfileDataForm from "../Forms/ProfileDataForm/ProfileDataForm";
import AvatarUpload from "../AvatarUpload/AvatarUpload";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import "./ProfileDataTab.scss";

import {
  formatPhone,
  formatDate,
  getMaxDate,
  checkMobile,
} from "../../utils/utils";
import { PROFILE_DATA_UPDATE, BASIC_ERROR } from "../../utils/constants";

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

  useEffect(() => {
    function handleResize() {
      setIsEdited(checkMobile());
    }

    setIsEdited(checkMobile());

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  function handleErrors(err) {
    if (err.phone) {
      showMessage(err.phone[0], "error");
    } else if (err.email) {
      showMessage(err.email[0], "error");
    } else {
      showMessage(BASIC_ERROR, "error");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    editUserData(editedUser)
      .then(() => {
        showMessage(PROFILE_DATA_UPDATE, "info");
        setСurrentUser(editedUser);
      })
      .catch(handleErrors)
      .finally(() => {
        setIsSubmitting(false);
      });

    setIsEdited(checkMobile());
    handleScrollToTop();
  };

  const infoMessage = (
    <p className="profile-data__info">
      *мы запрашиваем информацию исключительно в целях рекламы и промо-акций для
      вас
    </p>
  );

  return (
    <section className="profile-data">
      <SectionTitle
        titleText="Персональные данные"
        titleClass="section-title_profile"
      />
      <AvatarUpload />

      {!isEdited ? (
        <ul className="profile-data__info-list">
          <li className="profile-data__list-item">
            <h3 className="profile-data__label">Имя</h3>
            <p className="profile-data__text-overflow">
              {editedUser?.first_name}
            </p>
          </li>
          <li className="profile-data__list-item">
            <h3 className="profile-data__label">Фамилия</h3>
            <p className="profile-data__text-overflow">
              {editedUser?.last_name}
            </p>
          </li>
          <li className="profile-data__list-item">
            <h3 className="profile-data__label">Дата рождения</h3>
            <p className="profile-data__text-overflow">
              {editedUser?.birth_date && formatDate(editedUser?.birth_date)}
            </p>
          </li>
          <li className="profile-data__list-item">
            <h3 className="profile-data__label">Номер телефона</h3>
            <p className="profile-data__text-overflow">
              {editedUser?.phone && formatPhone(editedUser?.phone)}
            </p>
          </li>
          <li className="profile-data__list-item">
            <h3 className="profile-data__label">Адрес эл. почты</h3>
            <p className="profile-data__text-overflow">{editedUser?.email}</p>
          </li>
          <li className="profile-data__list-item">
            <h3 className="profile-data__label">Род деятельности</h3>
            <p className="profile-data__text-overflow">
              {editedUser?.occupation}
            </p>
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
                  minLength: 2,
                },
                {
                  id: 2,
                  name: "last_name",
                  placeholder: "Фамилия",
                  required: true,
                  type: "text",
                  maxLength: 21,
                  minLength: 2,
                },
                {
                  id: 3,
                  name: "birth_date",
                  placeholder: "Дата рождения",
                  required: false,
                  type: "date",
                  max: getMaxDate(),
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
                    inputMinLength={field.minLength}
                    inputMaxValue={field.max}
                  />
                </li>
              ))}
            </ul>
          </ProfileDataForm>
          {infoMessage}{" "}
        </div>
      )}

      {!isEdited && infoMessage}
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
          btnClass="button__profile-small button__profile-edit"
          onClick={handleEditClick}
          btnType="button"
        />
      )}
    </section>
  );
};
