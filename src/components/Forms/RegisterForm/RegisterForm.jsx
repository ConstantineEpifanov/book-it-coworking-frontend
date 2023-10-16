/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";

import Button from "../../UI-kit/Button/Button";
import Popup from "../../Popup/Popup";
import ConfirmRegisterForm from "../ConfirmRegisterForm/ConfirmRegisterForm";
import PasswordInput from "../../UI-kit/PasswordInput/PasswordInput";
import useFormAndValidation from "../../../hooks/useFormAndValidation";

import { register } from "../../../utils/Api";

const RegisterForm = ({ isOpenPopup, handleClosePopup }) => {
  const { values, errors, isValid, handleChange } = useFormAndValidation();
  const [isSuccessReg, setIsSuccessReg] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const location = useLocation();

  const handleRegister = async ({
    email,
    password,
    first_name,
    last_name,
    re_password,
  }) => {
    try {
      const res = await register({
        email,
        password,
        first_name,
        last_name,
        re_password,
      });
      setIsSuccessReg(true);
      setUserData(res);
    } catch (err) {
      setIsSuccessReg(false);
      console.log(`Что-то пошло не так: ошибка запроса ${err.message} 😔`);
    }
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    handleRegister(values);
  }

  return (
    <Popup
      isOpen={isOpenPopup}
      onClickClose={handleClosePopup}
      popupClass="popup__container_register-form"
    >
      {isSuccessReg ? (
        <ConfirmRegisterForm data={userData} />
      ) : (
        <EntryForm title="зарегистрируйтесь" onSubmit={handleSubmit}>
          <Input
            inputType="text"
            inputPlaceholder="Имя"
            inputValue={values.first_name}
            inputError={errors.first_name}
            handleChange={handleChange}
            inputName="first_name"
            inputRequired
          />
          <Input
            inputType="text"
            inputPlaceholder="Фамилия"
            inputValue={values.last_name}
            inputError={errors.last_name}
            handleChange={handleChange}
            inputName="last_name"
            inputRequired
          />
          <Input
            inputValue={values.email}
            inputError={errors.email}
            handleChange={handleChange}
            inputName="email"
            inputType="email"
            inputPlaceholder="Email"
            inputInfo="Будет использован как логин"
            inputRequired
          />
          <PasswordInput
            inputValue={values.password}
            inputError={errors.password}
            handleChange={handleChange}
            inputName="password"
            inputType="password"
            inputPlaceholder="Пароль"
            inputInfo="Используйте сложный пароль"
            inputRequired
          />
          <PasswordInput
            inputValue={values.re_password}
            inputError={errors.re_password}
            handleChange={handleChange}
            inputName="re_password"
            inputType="password"
            inputPlaceholder="Проверка пароля"
            inputRequired
          />
          <span className="input__text input__text_confirm">
            Нажимая зарегистрироваться вы даёте согласие на обработку ваших
            персональных данных{" "}
          </span>
          <Button
            btnClass="button_type_form button_type_form_margin-top"
            btnType="submit"
            btnText="Зарегистрироваться"
            onClick={() => {}}
            isValidBtn={isValid}
          />
          <Link to="/popup/login" state={{ previousLocation: location }}>
            <Button
              btnClass="button_type_link"
              btnType="button"
              btnText="Уже есть аккаунт?"
            />
          </Link>
        </EntryForm>
      )}
    </Popup>
  );
};

RegisterForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
};
RegisterForm.defaultProps = {
  isOpenPopup: true,
  handleClosePopup: () => {},
};
export default RegisterForm;
