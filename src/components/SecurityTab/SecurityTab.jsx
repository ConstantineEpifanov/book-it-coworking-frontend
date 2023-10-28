/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useResize } from "../../hooks/useResize";
import "./SecurityTab.scss";

import { deleteUser } from "../../utils/Api";
import { BASIC_ERROR } from "../../utils/constants";

import Input from "../UI-kit/Input/Input";

import usePopupOpen from "../../hooks/usePopupOpen";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import ChangePassForm from "../Forms/ChangePassForm/ChangePassForm";

import Button from "../UI-kit/Button/Button";
import Popup from "../Popup/Popup";

export const SecurityTab = () => {
  const { currentUser, setIsLoggedIn, setСurrentUser, showMessage } =
    useContext(CurrentUserContext);
  const { isOpenPopup, handleOpenPopup, handleClosePopup } = usePopupOpen();
  const [popupActive, setPopupActive] = useState(null);

  const navigate = useNavigate();

  const { isScreenSmall } = useResize();

  function hidePassword(password) {
    const maxLength = 15;
    return "*".repeat(
      password?.length ? Math.min(maxLength, password?.length) : maxLength,
    );
  }

  const handleCloseSecurityPopup = () => {
    handleClosePopup();
    setPopupActive(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setСurrentUser({});
    localStorage.clear();
    navigate("/");
  };

  const handleDelete = () => {
    deleteUser(currentUser.id)
      .then(() => {
        handleLogout();
        showMessage("Аккаунт успешно удален", "info");
      })
      .catch(() => showMessage(BASIC_ERROR))
      .finally(() => {
        setPopupActive(null);
      });
  };

  return (
    <section className="security">
      <SectionTitle
        titleText="Безопасность и конфиденциальность"
        titleClass="section-title_profile"
      />
      <ul className="security__board">
        <li className="security__board-row">
          {!isScreenSmall ? (
            <div className="security__password-container">
              <span className="security__feature-name">Пароль</span>
              <span>{hidePassword(currentUser.password)}</span>
            </div>
          ) : (
            <Input
              inputPlaceholder="Пароль"
              inputValue={hidePassword()}
              inputClass="security__input"
              inputType="password"
              inputDisabled
            />
          )}
          <Button
            btnText="Изменить"
            btnClass="button__profile-small button_type_security"
            onClick={() => {
              setPopupActive("pass");
              handleOpenPopup();
            }}
          />
        </li>
        <li className="security__board-row">
          <div className="security__sessions-container">
            <span className="security__feature-name">Активные сессии</span>
            <p className="security__feature-description">
              Нажмите “Выйти”, и в течение 10 минут вы выйдете из аккаунта на
              всех устройствах, кроме этого
            </p>
          </div>
          <Button
            btnText="Выйти"
            btnClass="button__profile-small button_type_security"
            onClick={() =>
              showMessage("Вы успешно вышли на других устройствах", "info")
            }
          />
        </li>
        <li className="security__board-row">
          <div className="security__exit-container">
            <span className="security__feature-name">Выйти из аккаунта</span>
            <p className="security__feature-description">Завершить сеанс</p>
          </div>
          <Button
            btnText="Завершить"
            btnClass="button__profile-small button_type_security"
            onClick={() => {
              handleLogout();
              showMessage("Вы успешно вышли", "info");
            }}
          />
        </li>
        <li className="security__board-row">
          <div className="security__delete-container">
            <span className="security__feature-name">Удалить аккаунт</span>
            <p className="security__feature-description">
              Мы вас ценим как клиента
            </p>
          </div>
          <Button
            btnText="Удалить"
            btnClass="button__profile-small button_type_security"
            onClick={() => {
              setPopupActive("delete");
              handleOpenPopup();
            }}
          />
        </li>
      </ul>
      <Popup
        isOpen={isOpenPopup}
        popupClass={
          popupActive === "pass" ? "" : "security__popup popup_type_whitemobile"
        }
        onClickClose={handleCloseSecurityPopup}
      >
        {popupActive === "pass" ? (
          <ChangePassForm handleClosePopup={handleCloseSecurityPopup} />
        ) : (
          <>
            <p className="security__popup-text">
              Вы действительно хотите удалить аккаунт? Данная операция
              необратима.
            </p>
            <div className="bookings-card__button-container">
              <Button
                btnText="Нет"
                btnType="button"
                btnClass="button__profile-transparent button_type_cancel"
                onClick={handleCloseSecurityPopup}
              />

              <Button
                btnText="Да, удалить"
                btnType="button"
                btnClass="button__profile-edit button_type_delete"
                onClick={handleDelete}
              />
            </div>
          </>
        )}
      </Popup>
    </section>
  );
};
