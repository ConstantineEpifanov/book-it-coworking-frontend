import React from "react";

const validationPatterns = {
  name: /^[a-zA-Zа-яА-Я\sё.-]+$/,
  email:
    /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?[a-zA-Z0-9])*.[a-zA-Z](-?[a-zA-Z0-9])+$/,
  phoneNumber: /^\+7\d{10}$/,
  date: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
};

const validationMessages = {
  name: "Может содержать только буквы, дефисы и точки",
  email: "Введите корректный email",
  phoneNumber: "Введите номер телефона в формате +7XXXXXXXXXX",
  date: "Введите дату в формате дд.мм.гггг",
};

export default function useFormAndValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setValues({ ...values, [name]: value });
    setIsValid(e.target.closest("form").checkValidity());

    if (value) {
      if (validationPatterns[name]) {
        const isValidField = validationPatterns[name].test(value);
        setErrors({
          ...errors,
          [name]: isValidField ? "" : validationMessages[name],
        });
        if (!isValidField) {
          setIsValid(false);
        }
      } else if (name === "password" || name === "re_password") {
        setErrors({ ...errors, [name]: e.target.validationMessage });
      }
    } else if (required && !value) {
      setErrors({
        ...errors,
        [name]: "Поле обязательно для заполнения",
      });
      setIsValid(false);
    } else {
      setErrors({ ...errors, [name]: "" });
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
