import React from "react";

const validationPatterns = {
  first_name: /^[a-zA-Zа-яА-Я\sё.-]+$/,
  last_name: /^[a-zA-Zа-яА-Я\sё.-]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+7\d{10}$/,
  // birth_date: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
  birth_date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  // phoneNumber: /^\+7\d{10}$/,
  date: /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
  confirmation_code: /^\d{6}$/,
};

const validationMessages = {
  first_name: "Может содержать только буквы, дефисы и точки",
  last_name: "Может содержать только буквы, дефисы и точки",
  email: "Введите корректный email",
  phone: "Введите номер телефона в формате +7XXXXXXXXXX",
  birth_date: "Введите дату в формате гггг-мм-дд",
  confirmation_code: "Некорректный код",
  password: "Пароль должен содержать не менее 6 символов",
  re_password: "Пароли должны совпадать",
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
      //  // валидация всех полей 
      if (validationPatterns[name]) {
        const isValidField = validationPatterns[name].test(value);
        setErrors({
          ...errors,
          [name]: isValidField ? "" : validationMessages[name],
        });
        if (!isValidField) {
          setIsValid(false);
        }
      } 
      // валидация полей с паролем 
      else if (name === "password") {
        if (value.length < 6) {
          setErrors({ ...errors, [name]: validationMessages[name] });
          setIsValid(false);
        } else {
          setErrors({ ...errors, [name]: "" });
        }
      } else if (name === "re_password") {
        if (value !== values.password) {
          setErrors({ ...errors, [name]: validationMessages[name] });
          setIsValid(false);
        } else {
          setErrors({ ...errors, [name]: "" });
        }
      }
       // валидация полей с обязательным заполнением 
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