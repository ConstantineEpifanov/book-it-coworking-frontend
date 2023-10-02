import React from "react";
import PropTypes from "prop-types";
import "./Input.scss";

function Input({
  inputClass,
  inputType,
  inputName,
  inputPlaceholder,
  inputInfo,
}) {
  const [value, setValue] = React.useState("");
  const [inputError, setInputError] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setInputError(event.target.validationMessage);
  };

  return (
    <div className="input__items">
      {value && (
        <label
          htmlFor={inputName}
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
        value={value || ""}
        onChange={handleChange}
        required
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
  inputClass: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  inputInfo: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};

Input.defaultProps = {
  inputClass: "",
  inputName: "",
  inputPlaceholder: "",
  inputInfo: "",
  // onChangeInput: () => {},
};

export default Input;
