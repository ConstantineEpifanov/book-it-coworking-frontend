import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";
import Popup from "../../Popup/Popup";

const RestorePassForm = ({ isOpenPopup, handleClosePopup }) => {
  const navigate = useNavigate();
  return (
    <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
      <EntryForm title="Восстановление пароля">
        <Input
          inputType="email"
          inputPlaceholder="Email"
          inputInfo="Код для сброса пароля будет направлен на этот адрес электронной почты"
        />
        <Button
          btnClass="button_type_form button_type_form_margin-top"
          btnType="button"
          btnText="Сбросить пароль"
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
