import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CurrentUserContext } from "../../../contexts/currentUserContext";

import { SUBSCRIPTION_ERROR } from "../../../utils/constants";

import "./SubscriptionForm.scss";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";

const SubscriptionForm = ({ onSubmit }) => {
  const { currentUser, isLoggedIn, showMessage } =
    useContext(CurrentUserContext);

  const handleInputFocus = () =>
    !isLoggedIn ? showMessage(SUBSCRIPTION_ERROR, "error") : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <div className="subscription">
      <p className="subscription__message">
        Ненавязчивая рассылка об акциях и новостях сайта
      </p>
      <form className="subscription-form" onSubmit={handleSubmit} noValidate>
        <fieldset className="subscription-form__box">
          <div className="input__wrapper">
            <Input
              inputType="email"
              inputClass="input__subscription"
              inputPlaceholder="E-mail"
              inputValue={currentUser.email}
              handleFocus={handleInputFocus}
            />
          </div>
          <Button
            btnClass="button__subscription button_type_form"
            btnText={currentUser.is_subscribed ? "Подписаны!" : "Подписаться"}
            btnType="submit"
            onClick={handleSubmit}
            isValidBtn={isLoggedIn && !currentUser.is_subscribed}
          />
        </fieldset>
      </form>
    </div>
  );
};

SubscriptionForm.propTypes = {
  onSubmit: PropTypes.func,
};

SubscriptionForm.defaultProps = {
  onSubmit: () => {},
};

export { SubscriptionForm };
