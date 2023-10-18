/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import React from "react";

import { resetPassConfirmCode } from "../../../utils/Api";
import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";
import Popup from "../../Popup/Popup";
import useFormAndValidation from "../../../hooks/useFormAndValidation";
import { useApiError } from "../../../hooks/useApiError";

const RestorePassForm = ({ isOpenPopup, handleClosePopup }) => {
  const { isErrApi, setIsErrApi } = useApiError();
  // const [isSuccess, setIsSuccess] = React.useState(false);
  const { values, errors, isValid, handleChange } = useFormAndValidation();
  const navigate = useNavigate();

  const handleResetPassConfirmCode = async ({ email }) => {
    try {
      const res = await resetPassConfirmCode({
        email,
      });
      console.log(res);
    } catch (err) {
      setIsErrApi({ ...isErrApi, message: err });
      console.log(`Что-то пошло не так: ошибка запроса ${err.message} 😔`);
    }
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    handleResetPassConfirmCode(values);
    setIsErrApi("");
  }
  return (
    <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
      <EntryForm title="Восстановление пароля" onSubmit={handleSubmit}>
        <Input
          inputType="email"
          inputPlaceholder="Email"
          inputValue={values.email}
          inputError={errors.email}
          handleChange={handleChange}
          inputName="email"
          inputRequired
          inputInfo="Код для сброса пароля будет направлен на этот адрес электронной почты"
        />
        <span className="entry-form__text_error">
          {isErrApi && `${isErrApi.message}`}
        </span>
        <Button
          btnClass="button_type_form"
          btnType="button"
          btnText="Сбросить пароль"
          isValidBtn={isValid}
          onClick={() => {}}
        />
        <Button
          btnClass="button_type_link"
          btnType="button"
          btnText="Назад"
          onClick={() => navigate(-1)}
        />
      </EntryForm>
    </Popup>
  );
};
RestorePassForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
};
RestorePassForm.defaultProps = {
  isOpenPopup: true,
  handleClosePopup: () => {},
};
export default RestorePassForm;
