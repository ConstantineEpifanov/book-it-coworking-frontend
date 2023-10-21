// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import "./Button.scss";

function Button({
  btnClass,
  btnType,
  btnText,
  onClick,
  isValidBtn,
  backgroundColor,
}) {
  return (
    <button
      className={`button ${btnClass}`}
      type={btnType}
      onClick={onClick || undefined}
      style={backgroundColor && { backgroundColor }}
      disabled={!isValidBtn}
    >
      {btnText}
    </button>
  );
}
Button.propTypes = {
  btnClass: PropTypes.string,
  btnType: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  isValidBtn: PropTypes.bool,
};

Button.defaultProps = {
  btnClass: "button_type_form",
  btnText: "",
  btnType: "button",
  onClick: null,
  backgroundColor: null,
  isValidBtn: true,
};

export default Button;
