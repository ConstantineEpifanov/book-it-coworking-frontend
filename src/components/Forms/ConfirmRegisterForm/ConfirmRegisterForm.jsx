/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

import Popup from "../../Popup/Popup";
import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";
import { confirmRegister } from "../../../utils/Api";
import useFormAndValidation from "../../../hooks/useFormAndValidation";

const ConfirmRegisterForm = ({ data, isOpenPopup, handleClosePopup }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { values, errors, handleChange, isValid } = useFormAndValidation();

  const handleConfirm = async ({ email, confirmation_code }) => {
    try {
      const res = await confirmRegister({ email, confirmation_code });
      if (res) {
        navigate("/popup/login", { state: { previousLocation: location } });
      }
    } catch (err) {
      console.log(`Что-то пошло не так: ошибка запроса ${err.message} 😔`);
    }
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    handleConfirm({
      email: data.email,
      confirmation_code: values.confirmation_code,
    });
  }

  return (
    <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
      <EntryForm title="Завершение регистрации" onSubmit={handleSubmit}>
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
        <Button
          btnClass="button_type_form button_type_form_margin-top"
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
