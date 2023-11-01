import { useContext } from "react";
import PropTypes from "prop-types";
import useFormAndValidation from "../../../hooks/useFormAndValidation";
import { useApiError } from "../../../hooks/useApiError";
import { CurrentUserContext } from "../../../contexts/currentUserContext";

import { changePass } from "../../../utils/Api";

import EntryForm from "../EntryForm/EntryForm";
import Button from "../../UI-kit/Button/Button";
import PasswordInput from "../../UI-kit/PasswordInput/PasswordInput";

const ChangePassForm = ({ handleClosePopup }) => {
  const { showMessage } = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm } =
    useFormAndValidation();
  const { isErrApi, setIsErrApi, clearApiError } = useApiError();

  const handleSubmit = (e) => {
    e.preventDefault();
    changePass(values)
      .then((res) => {
        showMessage(res.message, "info");
        clearApiError();
        resetForm();
        handleClosePopup();
      })
      .catch((err) =>
        setIsErrApi({
          ...isErrApi,
          message: err.current_password || err.error,
        }),
      );
  };

  return (
    <EntryForm title="Смена пароля" onSubmit={handleSubmit}>
      <PasswordInput
        inputType="password"
        inputPlaceholder="Текущий Пароль"
        inputInfo="Введите текущий пароль"
        inputValue={values.current_password}
        inputError={errors.current_password}
        inputName="current_password"
        handleChange={handleChange}
        inputRequired
      />

      <PasswordInput
        inputType="password"
        inputPlaceholder="Новый Пароль"
        inputInfo="Введите новый пароль"
        inputValue={values.password}
        inputError={errors.password}
        inputName="password"
        handleChange={handleChange}
        inputRequired
      />
      <PasswordInput
        inputType="password"
        inputPlaceholder="Проверка пароля"
        inputInfo="Подтвердите пароль"
        inputValue={values.re_password}
        inputError={errors.re_password}
        inputName="re_password"
        handleChange={handleChange}
        inputRequired
      />
      <span className="entry-form__text_error">
        {isErrApi && `${isErrApi.message}`}
      </span>
      <Button
        btnClass="button_type_form"
        btnType="submit"
        btnText="Сохранить"
        isValidBtn={isValid}
      />
      <Button
        btnClass="button_type_link"
        btnType="button"
        btnText="Назад"
        onClick={() => {
          clearApiError();
          handleClosePopup();
        }}
      />
    </EntryForm>
  );
};

ChangePassForm.propTypes = {
  handleClosePopup: PropTypes.func,
};

ChangePassForm.defaultProps = {
  handleClosePopup: undefined,
};

export default ChangePassForm;
