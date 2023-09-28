import PropTypes from "prop-types";

import EntryForm from "../EntryForm/EntryForm";
import Popup from "../Popup/Popup";
import Button from "../UI-kit/Button/Button";
import Input from "../UI-kit/Input/Input";

const RegisterForm = ({ isOpenPopup, handleClosePopup }) => (
  <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
    <EntryForm title="Регистрация">
      <Input inputType="text" inputPlaceholder="Имя" />
      <Input inputType="text" inputPlaceholder="Фамилия" />
      <Input
        inputType="email"
        inputPlaceholder="Email"
        inputInfo="Будет использован как логин"
      />
      <Input
        inputType="password"
        inputPlaceholder="Пароль"
        inputInfo="Используйте сложный пароль"
      />
      <Input inputType="password" inputPlaceholder="Проверка пароля" />
      <Button
        btnClass="button_type_form"
        btnType="button"
        btnText="Зарегистрироваться"
        onClick={() => {}}
      />
      <Button
        btnClass="button_type_link"
        btnType="button"
        btnText="Уже есть аккаунт?"
        onClick={() => {}}
      />
    </EntryForm>
  </Popup>
);

RegisterForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
};
RegisterForm.defaultProps = {
  isOpenPopup: true,
  handleClosePopup: () => {},
};
export default RegisterForm;
