/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

import { resetPass, resetPassConfirmCode } from "../../../utils/Api";
import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";
import Popup from "../../Popup/Popup";
import useFormAndValidation from "../../../hooks/useFormAndValidation";
import { useApiError } from "../../../hooks/useApiError";
import PasswordInput from "../../UI-kit/PasswordInput/PasswordInput";

const RestorePassForm = ({ isOpenPopup, handleClosePopup }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();
  const { isErrApi, setIsErrApi, clearApiError } = useApiError();

  const [isSuccessApi, setIsSuccessApi] = React.useState({
    resetPass: true,
    changePass: false,
  });
  const [userEmail, setUserEmail] = React.useState("");

  // отправка запроса на отправку пароля на почту
  const handleResetPassCode = async ({ email }) => {
    try {
      const res = await resetPassConfirmCode({ email });

      if (res) {
        setUserEmail(email);
        setIsSuccessApi({
          ...isSuccessApi,
          changePass: true,
          resetPass: false,
        });
      }
    } catch (err) {
      setIsErrApi({ ...isErrApi, message: err });
      console.error(
        "Что-то пошло не так: ошибка запроса 😔",
        JSON.stringify(err, null, 2),
      );
    }
  };

  // отправка запроса на смену пароля
  const handleResetPass = async ({
    confirmation_code,
    password,
    re_password,
  }) => {
    try {
      const res = await resetPass({
        email: userEmail,
        confirmation_code,
        password,
        re_password,
      });
      if (res) {
        console.log(res.message);
        setIsSuccessApi({
          ...isSuccessApi,
          changePass: true,
          resetPass: false,
        });
        navigate("/popup/login", { state: { previousLocation: location } });
      }
    } catch (err) {
      setIsErrApi({ ...isErrApi, message: err });
      console.error(
        "Что-то пошло не так: ошибка запроса 😔",
        JSON.stringify(err, null, 2),
      );
    }
  };

  return (
    <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
      {/* форма с отправкой кода на почту  */}
      {isSuccessApi.resetPass ? (
        <EntryForm
          title="Восстановление пароля"
          onSubmit={(evt) => {
            evt.preventDefault();
            handleResetPassCode(values);
            // очистка форм и ошибок
            clearApiError();
            resetForm();
          }}
        >
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
            btnType="submit"
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
      ) : (
        ""
      )}

      {/* форма с отправкой кода  и изменения пароля */}
      {isSuccessApi.changePass ? (
        <EntryForm
          title="Смена пароля"
          onSubmit={(evt) => {
            evt.preventDefault();
            handleResetPass(values);
            // очистка форм и ошибок
            clearApiError();
            resetForm();
          }}
        >
          <Input
            inputType="text"
            inputPlaceholder="Код подтверждения"
            inputInfo="Введите код подтверждения, который был отправлен вам на почту"
            inputValue={values.confirmation_code}
            inputError={errors.confirmation_code}
            handleChange={handleChange}
            inputName="confirmation_code"
            inputRequired
          />
          <PasswordInput
            inputType="password"
            inputPlaceholder="Пароль"
            inputInfo="Введите новый пароль"
            inputValue={values.password}
            inputError={errors.password}
            inputName="password"
            handleChange={handleChange}
          />
          <PasswordInput
            inputType="password"
            inputPlaceholder="Проверка пароля"
            inputInfo="Подтвердите пароль"
            inputValue={values.re_password}
            inputError={errors.re_password}
            inputName="re_password"
            handleChange={handleChange}
          />
          <span className="entry-form__text_error">
            {isErrApi && `${isErrApi.message}`}
          </span>
          <Button
            btnClass="button_type_form"
            btnType="submit"
            btnText="Сохранить"
            isValidBtn={isValid}
            onClick={() => {}}
          />
          <Button
            btnClass="button_type_link"
            btnType="button"
            btnText="Назад"
            onClick={() => {
              clearApiError();
              setIsSuccessApi({
                changePass: false,
                resetPass: true,
              });
            }}
          />
        </EntryForm>
      ) : (
        ""
      )}
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
