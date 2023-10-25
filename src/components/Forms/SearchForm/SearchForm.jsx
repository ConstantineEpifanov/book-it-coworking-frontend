import React from "react";
import PropTypes from "prop-types";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import logoSearch from "../../../images/search-icon.svg";
import SortData from "../../UI-kit/SortData/SortData";
import MultiChoiceDropdown from "../../UI-kit/MultiChoiceDropdown/MultiChoiceDropdown";
import { coWorkingOptions } from "../../../config/dataOptions";
import { searchLocations } from "../../../utils/Api";

import useForm from "../../../hooks/useForm";

const SearchForm = ({
  metroArray,
  handleUpdateCoworkings,
  limit,
  offset,
  resetPagination,
}) => {
  const lastSearchRequest = sessionStorage.getItem("lastSearchRequest") || "";
  const { form, handleChange, handleSelectChange } = useForm({
    search: lastSearchRequest,
    category: "",
    metro: [],
  });

  const inputComponent = React.useMemo(
    () => (
      <Input
        inputClass="input__search"
        inputType="search"
        inputName="search"
        inputValue={form.search}
        handleChange={handleChange}
        inputPlaceholder="Искать по названию"
        inputRequired={false}
      />
    ),
    [form.search, handleChange],
  );

  const formSearchSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("lastSearchRequest", form.search);
    resetPagination();
    searchLocations({
      search: form.search,
      category: form.category,
      metro: form.metro,
      offset,
      limit,
    })
      .then((res) => {
        handleUpdateCoworkings(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="entry-form__container">
      <form
        className="entry-form__inner entry-form__inner_select"
        name="form"
        autoComplete="off"
        onSubmit={formSearchSubmit}
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
        <MultiChoiceDropdown
          dropdownName="metro"
          dropdownTitle="Станции метро"
          array={metroArray}
          size="max"
          handleSelectChange={handleSelectChange}
        />
        <Button
          btnClass="button_type_form button_type_submit-search"
          btnType="submit"
          btnText="Искать"
        />
      </form>
    </div>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  handleUpdateCoworkings: PropTypes.func.isRequired,
  limit: PropTypes.number,
  offset: PropTypes.number,
  metroArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  resetPagination: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  limit: 0,
  offset: 0,
};
