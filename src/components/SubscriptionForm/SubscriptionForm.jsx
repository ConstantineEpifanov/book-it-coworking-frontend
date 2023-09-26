import React from "react";
import PropTypes from "prop-types";
import "./SubscriptionForm.scss";
import Input from "../UI-kit/Input/Input";
import Button from "../UI-kit/Button/Button";

const SubscriptionForm = ({ onSubmit }) => (
  <div className="subscription">
    <p className="subscription__message">
      Ненавязчивая рассылка об акциях и новостях сайта
    </p>
    <form className="subscription-form" onSubmit={onSubmit} noValidate>
      <fieldset className="subscription-form__box">
        <Input
          inputType="email"
          inputClass="subscription__input"
          inputPlaceholder="E-mail"
        />
        <Button
          btnClass="subscription__button"
          btnText="Подписаться"
          btnType="submit"
        />
      </fieldset>
    </form>
  </div>
);

SubscriptionForm.propTypes = {
  onSubmit: PropTypes.func,
};

SubscriptionForm.defaultProps = {
  onSubmit: () => {},
};

export { SubscriptionForm };
