import PropTypes from "prop-types";

import EntryForm from "../EntryForm/EntryForm";
import Popup from "../Popup/Popup";
import Button from "../UI-kit/Button/Button";
import Input from "../UI-kit/Input/Input";

const LoginForm = ({ isOpenPopup, handleClosePopup }) => (
  <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
    <EntryForm title="Войдите на сайт">
      <Input inputType="email" inputPlaceholder="Email" />
      <Input
        inputType="password"
        inputPlaceholder="Пароль"
        inputInfo="Забыли пароль?"
      />
      <Button
        btnClass="button_type_form"
        btnType="button"
        btnText="Войти"
        onClick={() => {}}
      />
      <Button
        btnClass="button_type_link"
        btnType="button"
        btnText="Зарегистрироваться"
        onClick={() => {}}
      />
    </EntryForm>
  </Popup>
);

LoginForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
};
LoginForm.defaultProps = {
  isOpenPopup: true,
  handleClosePopup: () => {},
};
export default LoginForm;
