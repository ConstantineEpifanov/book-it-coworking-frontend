import React from "react";
import PropTypes from "prop-types";
import "./SubscriptionForm.scss";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";

const SubscriptionForm = ({ onSubmit, formValue, subStatus }) => {
  const onChangeInput = () => {};

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
              inputValue={formValue}
              onChangeInput={onChangeInput}
            />
          </div>
          <Button
            btnClass="button__subscription button_type_form"
            btnText={subStatus ? "Подписаны!" : "Подписаться"}
            btnType="submit"
            onClick={handleSubmit}
            isValidBtn={!subStatus}
          />
        </fieldset>
      </form>
    </div>
  );
};

SubscriptionForm.propTypes = {
  onSubmit: PropTypes.func,
  formValue: PropTypes.string,
  subStatus: PropTypes.string,
};

SubscriptionForm.defaultProps = {
  onSubmit: () => {},
  formValue: "",
  subStatus: "",
};

export { SubscriptionForm };
