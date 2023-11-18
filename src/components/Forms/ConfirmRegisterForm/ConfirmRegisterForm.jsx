import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Popup from "../../Popup/Popup";
import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";
import { confirmRegister } from "../../../utils/Api";
import useFormAndValidation from "../../../hooks/useFormAndValidation";
import { useApiError } from "../../../hooks/useApiError";
import { CurrentUserContext } from "../../../contexts/currentUserContext";

const ConfirmRegisterForm = ({ data, isOpenPopup, handleClosePopup }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isErrApi, setIsErrApi, clearApiError } = useApiError();
  const { showMessage } = useContext(CurrentUserContext);
  const { values, errors, handleChange, isValid, resetForm } =
    useFormAndValidation();

  const handleConfirm = async ({ email, confirmation_code }) => {
    try {
      const res = await confirmRegister({ email, confirmation_code });
      if (res) {
        showMessage(res.message, "info");
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
      <EntryForm
        title="Завершение регистрации"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleConfirm({
            email: data.email,
            confirmation_code: values.confirmation_code,
          });
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
        <span className="entry-form__text_error">{`${
          isErrApi ? isErrApi.message : ""
        }`}</span>
        <Button
          btnClass="button_type_form"
          btnType="submit"
          btnText="Отправить"
          isValidBtn={isValid}
          onClick={() => {}}
        />
        <Button
          btnClass="button_type_link"
          btnType="button"
          btnText="Новый код"
          onClick={() => {}}
        />
      </EntryForm>
    </Popup>
  );
};

ConfirmRegisterForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }),
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
};

ConfirmRegisterForm.defaultProps = {
  data: undefined,
  isOpenPopup: true,
  handleClosePopup: () => {},
};

export default ConfirmRegisterForm;
