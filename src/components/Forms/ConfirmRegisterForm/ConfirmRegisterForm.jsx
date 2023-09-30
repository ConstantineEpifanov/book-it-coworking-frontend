import PropTypes from "prop-types";
import Popup from "../../Popup/Popup";
import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";

const ConfirmRegisterForm = ({ isOpenPopup, handleClosePopup }) => (
  <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
    <EntryForm title="Завершение регистрации">
      <Input
        inputType="text"
        inputPlaceholder="Код подтверждения"
        inputInfo="Введите код подтверждения, который был отправлен вам на почту"
      />
      <Button
        btnClass="button_type_form button_type_form_margin-top"
        btnType="button"
        btnText="Отправить"
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

ConfirmRegisterForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
};
ConfirmRegisterForm.defaultProps = {
  isOpenPopup: true,
  handleClosePopup: () => {},
};
export default ConfirmRegisterForm;
