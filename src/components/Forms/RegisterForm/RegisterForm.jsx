import PropTypes from "prop-types";

import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import Button from "../../UI-kit/Button/Button";
import Popup from "../../Popup/Popup";
import PasswordInput from "../../UI-kit/PasswordInput/PasswordInput";

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
      <PasswordInput
        inputType="password"
        inputPlaceholder="Пароль"
        inputInfo="Используйте сложный пароль"
      />
      <PasswordInput inputType="password" inputPlaceholder="Проверка пароля" />
      <span className="input__text input__text_confirm">
        Нажимая зарегистрироваться вы даёте согласие на обработку ваших
        персональных данных{" "}
      </span>
      <Button
        btnClass="button_type_form button_type_form_margin-top"
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
