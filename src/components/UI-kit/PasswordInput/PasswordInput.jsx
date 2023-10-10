import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

function PasswordInput({
  inputValue,
  inputError,
  inputClass,
  inputName,
  inputPlaceholder,
  inputInfo,
  handleChange,
}) {
  // const [value, setValue] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  // const [inputError, setInputError] = React.useState("");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  //   setInputError(event.target.validationMessage);
  // };

  return (
    <>
      <div className="input__items">
        {inputValue && (
          <label
            htmlFor={inputName}
            className={`input__label ${
              inputError ? "input__label_error" : ""
            }}`}
          >
            {inputPlaceholder}
          </label>
        )}
        <input
          id={inputName}
          className={`input ${inputClass} ${inputError ? "input-error" : ""}`}
          type={passwordVisible ? "text" : "password"}
          name={inputName}
          placeholder={inputPlaceholder}
          value={inputValue || ""}
          onChange={handleChange}
          required
        />
        {/* если данные введены, покажи кнопку */}
        {inputValue && (
          <Button
            btnClass={`button__password-toggle ${
              passwordVisible
                ? "button__password-toggle-hide"
                : "button__password-toggle-active"
            }`}
            onClick={() => setPasswordVisible(!passwordVisible)}
          />
        )}
      </div>
      {/* если нет ошибки ввода, то покажи информацию */}
      {inputError ? (
        <span className="input__text input__text_error">{inputError}</span>
      ) : (
        <span className="input__text input__text_info">{inputInfo}</span>
      )}
    </>
  );
}

PasswordInput.propTypes = {
  inputClass: PropTypes.string,
  inputValue: PropTypes.string,
  inputError: PropTypes.string,
  inputName: PropTypes.string,
  inputInfo: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  handleChange: () => {},
};

PasswordInput.defaultProps = {
  inputClass: "",
  inputValue: null,
  inputError: null,
  inputName: "",
  inputPlaceholder: "",
  inputInfo: "",
  handleChange: () => {},
};

export default PasswordInput;
