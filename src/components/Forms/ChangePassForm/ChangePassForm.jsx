import PropTypes from "prop-types";
import Popup from "../../Popup/Popup";
import EntryForm from "../EntryForm/EntryForm";
import Button from "../../UI-kit/Button/Button";
import PasswordInput from "../../UI-kit/PasswordInput/PasswordInput";

const ChangePassForm = ({ isOpenPopup, handleClosePopup }) => (
  <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
    <EntryForm title="Смена пароля">
      <PasswordInput
        inputType="password"
        inputPlaceholder="Пароль"
        inputInfo="Введите новый пароль"
      />
      <PasswordInput
        inputType="password"
        inputPlaceholder="Проверка пароля"
        inputInfo="Подтвердите пароль"
      />
      <Button
        btnClass="button_type_form button_type_form_margin-top"
        btnType="button"
        btnText="Сохранить"
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

ChangePassForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
};
ChangePassForm.defaultProps = {
  isOpenPopup: true,
  handleClosePopup: () => {},
};
export default ChangePassForm;
