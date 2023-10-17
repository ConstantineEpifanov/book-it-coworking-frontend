import { useEffect, useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState({});

  const hasErrors = (err) => Object.values(err).some((value) => value !== "");
  const hasValues = (val) => !Object.values(val).some((value) => value === "");

  const handleFocus = (evt) => {
    setIsActiveInput(evt.target);
    const input = evt.target;
    setForm({
      ...form,
      activeInput: input.name,
    });
  };

  const handleBlur = () => {
    setForm({
      ...form,
      activeInput: "",
    });
  };

  const updateFormInput = (data) => {
    setForm((prevForm) => ({
      ...prevForm,
      ...data,
    }));
  };

  const resetForm = () => {
    setForm(initialState);
  };

  const hardChangeIsFormValid = (boolean) => {
    setIsFormValid(boolean);
  };

  const handleChange = (evt) => {
    const input = evt.target;

    setForm((prevState) => ({
      ...prevState,
      [input.name]: input.value,
    }));

    setErrors((prevState) => ({
      ...prevState,
      [input.name]: input.validationMessage,
    }));
  };

  const handleSelectChange = (selectedObj) => {
    setForm((prevState) => ({
      ...prevState,
      ...selectedObj,
    }));
  };

  useEffect(() => {
    const checkInitial = () =>
      !Object.keys(form).every((key) => form[key] === initialState[key]);

    setIsFormValid(!hasErrors(errors) && hasValues(form) && checkInitial());
  }, [form, errors, initialState]);

  return {
    form,
    setForm,
    errors,
    isFormValid,
    handleChange,
    handleSelectChange,
    resetForm,
    hardChangeIsFormValid,
    handleFocus,
    handleBlur,
    updateFormInput,
    isActiveInput,
  };
};

export default useForm;
