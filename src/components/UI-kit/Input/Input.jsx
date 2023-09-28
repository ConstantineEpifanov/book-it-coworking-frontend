import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import "./Input.scss";

function Input({
  inputClass,
  inputType,
  inputName,
  inputPlaceholder,
  inputValue,
  onChangeInput,
  inputInfo,
}) {
  const [inputError, setInputError] = React.useState("");

  const handleChange = (event) => {
    onChangeInput(event.target.value);
    setInputError(event.target.validationMessage);
  };

  return (
    <>
      <input
        className={`input ${inputClass}`}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={handleChange}
        required
      />
      {inputError ? (
        <span className="input__error">{inputError}</span>
      ) : (
        <span className="input__info">{inputInfo}</span>
      )}
    </>
  );
}

Input.propTypes = {
  inputClass: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  inputInfo: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func,
};

Input.defaultProps = {
  inputClass: "",
  inputName: "",
  inputPlaceholder: "",
  inputInfo: "",
  onChangeInput: () => {},
};

export default Input;
