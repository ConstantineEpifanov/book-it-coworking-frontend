// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import "./Button.css";

function Button({ btnClass, btnType, btnText, onClick }) {
  return (
    <button className={`button ${btnClass}`} type={btnType} onClick={onClick}>
      {btnText}
    </button>
  );
}
Button.propTypes = {
  btnClass: PropTypes.string,
  btnType: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  btnClass: "",
  btnText: "",
  onClick: undefined,
};
export default Button;
