import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import logoSearch from "../../../images/search-icon.svg";
import SortData from "../../UI-kit/SortData/SortData";
import { coWorkingOptions, metroOptions } from "../../../config/dataOptions";
import { searchLocations } from "../../../utils/Api";

import useForm from "../../../hooks/useForm";

const SearchForm = ({ lastSearchRequest }) => {
  const { form, handleChange, handleSelectChange } = useForm({
    search: lastSearchRequest,
    category: "",
  });

  const inputComponent = React.useMemo(
    () => (
      <Input
        inputClass="input__search"
        inputType="search"
        inputName="search"
        inputValue={form.search}
        // inputError={form.search}
        handleChange={handleChange}
        inputRequired
        inputPlaceholder="Искать по названию... "
      />
    ),
    [form.search, handleChange],
  );

  const formSearchSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    searchLocations({
      name: form.search,
      category: form.category,
      metro: form.metro,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  function handleSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <div className="entry-form__container">
      <form
        className="entry-form__inner entry-form__inner_select"
        name="form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="entry-form__search">
          {/* @ TODO подумать над реализацией смены иконки при ошибке */}
          <img
            src={logoSearch}
            alt="иконка поиска"
            className="entry-form__search-img"
          />

          {inputComponent}
        </div>
        <SortData
          selectName="category"
          titleSort="Вид рабочего места"
          array={coWorkingOptions}
          size="max"
          handleSelectChange={handleSelectChange}
        />
        <SortData
          selectName="metro"
          titleSort="Линия метро"
          array={metroOptions}
          size="min"
          handleSelectChange={handleSelectChange}
        />
        <Button
          btnClass="button_type_form button_type_form-select"
          btnType="button"
          btnText="Искать"
          onClick={formSearchSubmit}
        />
        <Button
          btnClass="button_type_transparent button_type_transparent-select"
          btnType="button"
          btnText="Сбросить"
          onClick={() => {}}
        />
      </form>
    </div>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  lastSearchRequest: PropTypes.string,
};

SearchForm.defaultProps = {
  lastSearchRequest: "",
};
