import PropTypes from "prop-types";
import React from "react";

import { Link, useLocation } from "react-router-dom";
import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";
import Popup from "../../Popup/Popup";
import useFormAndValidation from "../../../hooks/useFormAndValidation";
import PasswordInput from "../../UI-kit/PasswordInput/PasswordInput";
import { useApiError } from "../../../hooks/useApiError";
import { login } from "../../../utils/Api";
import { CurrentUserContext } from "../../../contexts/currentUserContext";

const LoginForm = ({ isOpenPopup, onClosePopup, onGetUserInfo }) => {
  const location = useLocation();
  const { isErrApi, setIsErrApi, clearApiError } = useApiError();
  const { setIsLoggedIn, setIsLoading } = React.useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, resetForm } =
    useFormAndValidation();

  const handleAuthorization = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const data = await login({ email, password });
      localStorage.setItem("token", data.auth_token);
      await onGetUserInfo();
      setIsLoggedIn(true);
      onClosePopup();
    } catch (err) {
      setIsLoading(false);
      setIsErrApi({ ...isErrApi, message: err });
      console.error(
        "Что-то пошло не так: ошибка запроса 😔",
        JSON.stringify(err, null, 2),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Popup isOpen={isOpenPopup} onClickClose={onClosePopup}>
      <EntryForm
        title="Войдите на сайт"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleAuthorization(values);
          // очистка форм и ошибок
          clearApiError();
          resetForm();
        }}
      >
        <Input
          inputValue={values.email}
          inputError={errors.email}
          handleChange={handleChange}
          inputName="email"
          inputType="email"
          inputPlaceholder="Email"
          inputRequired
        />
        <PasswordInput
          inputValue={values.password}
          inputError={errors.password}
          handleChange={handleChange}
          inputName="password"
          inputType="password"
          inputPlaceholder="Пароль"
          inputRequired
        />
        <span className="entry-form__text_error">{`${
          isErrApi ? isErrApi.message : ""
        }`}</span>
        <Button
          btnClass="button_type_form"
          btnType="submit"
          btnText="Войти"
          onClick={() => {}}
          isValidBtn={isValid}
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
            btnClass="button_type_link button_type_link-password"
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
  onGetUserInfo: PropTypes.func,
  // isErrApi: PropTypes.shape({
  //   message: PropTypes.string,
  //   status: PropTypes.string,
  // }),
};
LoginForm.defaultProps = {
  isOpenPopup: true,
  onGetUserInfo: () => {},
  onClosePopup: () => {},
  // isErrApi: { message: '', status: '' },
};
export default LoginForm;
