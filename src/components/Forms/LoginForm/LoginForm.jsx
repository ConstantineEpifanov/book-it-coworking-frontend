import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";
import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";
import Popup from "../../Popup/Popup";
import useFormAndValidation from "../../../hooks/useFormAndValidation";
import PasswordInput from "../../UI-kit/PasswordInput/PasswordInput";

const LoginForm = ({ isOpenPopup, onClosePopup, onAuthorization }) => {
  const location = useLocation();
  const { values, errors, handleChange } = useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onAuthorization(values);
  }

  console.log(values, "values");
  console.log(errors, "errors");

  return (
    <Popup isOpen={isOpenPopup} onClickClose={onClosePopup}>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <EntryForm title="Войдите на сайт" onSubmit={handleSubmit}>
        <Input
          inputValue={values.email}
          inputError={errors.email}
          handleChange={handleChange}
          inputName="email"
          inputType="email"
          inputPlaceholder="Email"
        />
        <PasswordInput
          inputValue={values.password}
          inputError={errors.password}
          handleChange={handleChange}
          inputName="password"
          inputType="password"
          inputPlaceholder="Пароль"
        />

        <Button
          btnClass="button_type_form button_type_form_margin-top"
          btnType="submit"
          btnText="Войти"
          onClick={() => {}}
        />

        <Link to="/popup/register" state={{ previousLocation: location }}>
          <Button
            btnClass="button_type_link"
            btnType="button"
            btnText="Зарегистрироваться"
            onClick={() => {}}
          />
        </Link>
        <Link to="/popup/reset_password" state={{ previousLocation: location }}>
          <Button
            btnClass="button_type_link"
            btnType="button"
            btnText="Забыли пароль?"
            onClick={() => {}}
          />
        </Link>
      </EntryForm>
    </Popup>
  );
};

LoginForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  onClosePopup: PropTypes.func,
  onAuthorization: PropTypes.func,
};
LoginForm.defaultProps = {
  isOpenPopup: true,
  onAuthorization: () => {},
  onClosePopup: () => {},
};
export default LoginForm;
