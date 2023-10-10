import React from "react";

// Регулярное выражение для проверки имени
export const regExpName = /^[a-zA-Zа-яА-Я\sё-]+$/;

// Регулярное выражение для проверки адреса электронной почты
export const regExpEmail =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?[a-zA-Z0-9])*.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export default function useFormAndValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setIsValid(e.target.closest("form").checkValidity());

    // Валидация поля "Имя" и "Фамилия"
    if (name === "last_name" || name === "first_name") {
      const isValidName = regExpName.test(value);
      setErrors({
        ...errors,
        [name]: isValidName ? "" : "Введите корректное имя",
      });
      if (!isValidName) {
        setIsValid(false);
      }
    }
    // Валидация поля "Email"
    else if (name === "email") {
      const isValidEmail = regExpEmail.test(String(value).toLowerCase().trim());
      setErrors({
        ...errors,
        [name]: isValidEmail ? "" : "Введите корректный email",
      });
      if (!isValidEmail) {
        setIsValid(false);
      }
    }
    // Валидация поля "Password"
    else if (name === "password" || name === "re_password") {
      setErrors({ ...errors, [name]: e.target.validationMessage });
    }
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = true) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
