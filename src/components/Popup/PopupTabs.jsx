import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import LoginForm from "../Forms/LoginForm/LoginForm";
// import RegisterForm from "../Forms/RegisterForm/RegisterForm";
import Popup from "./Popup";

export function PopupTabs({ isOpen, onClickClose }) {
  const { popupType } = useParams();

  // Основываясь на значении popupType, вы можете определить, какой попап отобразить

  return (
    <div>
      <Popup isOpenPopup={isOpen} onClosePopup={onClickClose}>
        {/* В зависимости от значения popupType отобразите соответствующий попап */}
        {popupType === "login" && <LoginForm />}
        {/* {popupType === "register" && <RegisterForm />} */}
      </Popup>
    </div>
  );
}

PopupTabs.propTypes = {
  isOpen: PropTypes.bool,
  onClickClose: PropTypes.func,
};
PopupTabs.defaultProps = {
  isOpen: true,
  onClickClose: () => {},
};
