import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";

import Button from "../../UI-kit/Button/Button";
import Popup from "../../Popup/Popup";
import PasswordInput from "../../UI-kit/PasswordInput/PasswordInput";
import useFormAndValidation from "../../../hooks/useFormAndValidation";

const RegisterForm = ({ isOpenPopup, handleClosePopup, onRegistration }) => {
  const { values, errors, handleChange } = useFormAndValidation();
  const location = useLocation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegistration(values);
  }

  return (
    <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <EntryForm title="Регистрация" onSubmit={handleSubmit}>
        <Input
          inputType="text"
          inputPlaceholder="Имя"
          inputValue={values.first_name}
          inputError={errors.first_name}
          handleChange={handleChange}
          inputName="first_name"
        />
        <Input
          inputType="text"
          inputPlaceholder="Фамилия"
          inputValue={values.last_name}
          handleChange={handleChange}
          inputName="last_name"
        />
        <Input
          inputValue={values.email}
          inputError={errors.email}
          handleChange={handleChange}
          inputName="email"
          inputType="email"
          inputPlaceholder="Email"
          inputInfo="Будет использован как логин"
        />
        <PasswordInput
          inputValue={values.password}
          inputError={errors.password}
          handleChange={handleChange}
          inputName="password"
          inputType="password"
          inputPlaceholder="Пароль"
          inputInfo="Используйте сложный пароль"
        />
        <PasswordInput
          inputValue={values.re_password}
          inputError={errors.re_password}
          handleChange={handleChange}
          inputName="re_password"
          inputType="password"
          inputPlaceholder="Проверка пароля"
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
        />
        <Link to="/popup/login" state={{ previousLocation: location }}>
          <Button
            btnClass="button_type_link"
            btnType="button"
            btnText="Уже есть аккаунт?"
          />
        </Link>
      </EntryForm>
    </Popup>
  );
};

RegisterForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
  onRegistration: PropTypes.func,
};
RegisterForm.defaultProps = {
  isOpenPopup: true,
  handleClosePopup: () => {},
  onRegistration: () => {},
};
export default RegisterForm;
