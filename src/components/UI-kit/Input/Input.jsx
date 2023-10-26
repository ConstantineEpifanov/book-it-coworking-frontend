import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

function Input({
  inputValue,
  inputError,
  inputClass,
  inputType,
  inputName,
  inputPlaceholder,
  inputInfo,
  handleChange,
  handleFocus,
  inputRequired,
  inputDisabled,
  inputMaxLength,
  inputMinLength,
  inputMaxValue,
}) {
  return (
    <div className="input__items">
      {inputValue && (
        <label
          htmlFor={inputName}
          tabIndex="-1"
          className={`input__label ${inputError ? "input__label-error" : ""}}`}
        >
          {inputPlaceholder}
        </label>
      )}
      <input
        className={`input ${inputClass} ${inputError ? "input-error" : ""}`}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValue || ""}
        onChange={handleChange}
        onFocus={handleFocus}
        required={inputRequired}
        disabled={inputDisabled}
        maxLength={inputMaxLength}
        minLength={inputMinLength}
        autoComplete="off"
        max={inputMaxValue}
      />
      {/* если нет ошибки ввода, то покажи информацию */}
      {inputError ? (
        <span className="input__text input__text_error">{inputError}</span>
      ) : (
        <span className="input__text input__text_info">{inputInfo}</span>
      )}
    </div>
  );
}

Input.propTypes = {
  inputValue: PropTypes.string,
  inputError: PropTypes.string,
  inputClass: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  inputInfo: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputRequired: PropTypes.bool,
  inputMaxLength: PropTypes.number,
  inputMinLength: PropTypes.number,
  inputDisabled: PropTypes.bool,
  inputMaxValue: PropTypes.string,

  handleChange: () => {},
  handleFocus: () => {},
};

Input.defaultProps = {
  inputClass: "",
  inputValue: "",
  inputError: "",
  inputName: "",
  inputPlaceholder: "",
  inputInfo: "",
  inputRequired: true,
  inputDisabled: false,
  inputMaxLength: undefined,
  inputMinLength: undefined,
  inputMaxValue: undefined,
  handleChange: () => {},
  handleFocus: () => {},
};

export default Input;
