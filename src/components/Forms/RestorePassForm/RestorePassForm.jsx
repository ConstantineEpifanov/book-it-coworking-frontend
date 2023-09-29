import PropTypes from "prop-types";

import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";
import Popup from "../../Popup/Popup";

const RestorePassForm = ({ isOpenPopup, handleClosePopup }) => (
  <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
    <EntryForm title="Восстановление пароля">
      <Input
        inputType="email"
        inputPlaceholder="Email"
        inputInfo="Ссылка для сброса пароля будет направлена на этот адрес электронной почты"
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
        onClick={() => {}}
      />
    </EntryForm>
  </Popup>
);

RestorePassForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
};
RestorePassForm.defaultProps = {
  isOpenPopup: true,
  handleClosePopup: () => {},
};
export default RestorePassForm;
