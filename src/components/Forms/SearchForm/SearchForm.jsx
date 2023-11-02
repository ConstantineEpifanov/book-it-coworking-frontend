import React from "react";
import PropTypes from "prop-types";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
// import logoSearch from "../../../images/search-icon.svg";
import SortData from "../../UI-kit/SortData/SortData";
import MultiChoiceDropdown from "../../UI-kit/MultiChoiceDropdown/MultiChoiceDropdown";
import { coWorkingOptions } from "../../../config/dataOptions";
import { searchLocations } from "../../../utils/Api";

import useForm from "../../../hooks/useForm";
import { useResize } from "../../../hooks/useResize";

const SearchForm = ({
  metroArray,
  handleUpdateCoworkings,
  limit,
  offset,
  resetPagination,
  isFiltersShown,
}) => {
  const lastSearchRequest = sessionStorage.getItem("lastSearchRequest") || "";
  const { form, handleChange, handleSelectChange } = useForm({
    search: lastSearchRequest,
    category: "",
    metro: [],
  });

  const { isScreenSmall, isScreenMedium } = useResize();
  const isMobile = isScreenSmall || isScreenMedium;

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
    <div
      className={`entry-form__container ${
        isMobile ? "entry-form__container_location_coworking-search-mobile" : ""
      }`}
    >
      <form
        className={`entry-form__inner entry-form__inner_select ${
          isMobile ? "entry-form__inner_location_coworking-search-mobile" : ""
        }`}
        name="form"
        autoComplete="off"
        onSubmit={formSearchSubmit}
      >
        <div
          className={`entry-form__search ${
            isMobile
              ? "entry-form__search_location_coworking-search-mobile"
              : ""
          }`}
        >
          {/* @ TODO подумать над реализацией смены иконки при ошибке */}
          {/* <img
            src={logoSearch}
            alt="иконка поиска"
            className="entry-form__search-img"
          /> */}
          <Input
            inputClass={`input__search ${
              isMobile ? "input__search_type_mobile" : ""
            }`}
            inputType="search"
            inputName="search"
            inputValue={form.search}
            handleChange={handleChange}
            inputPlaceholder="Найти рабочее место..."
            inputRequired={false}
            isInputSearch
          />
        </div>
        {!isMobile ? (
          <>
            <SortData
              // extraClass={isMobile ? "sort_location_coworking-search-mobile" : ""}
              selectName="category"
              titleSort="Вид рабочего места"
              array={coWorkingOptions}
              size={isMobile ? "mini" : "max"}
              handleSelectChange={handleSelectChange}
            />
            <MultiChoiceDropdown
              // extraClass={
              //   isMobile ? "dropdown_location_coworking-search-mobile" : ""
              // }
              dropdownName="metro"
              dropdownTitle="Станции метро"
              array={metroArray}
              size={isMobile ? "mini" : "max"}
              handleSelectChange={handleSelectChange}
            />
          </>
        ) : (
          ""
        )}
        <Button
          btnClass={`button_type_form button_type_submit-search ${
            isMobile ? "button_location_coworking-search-mobile" : ""
          }`}
          btnType="submit"
          btnText="Искать"
        />
        {isMobile && isFiltersShown && (
          <div className="entry-form__filters">
            <SortData
              // extraClass={isMobile ? "sort_location_coworking-search-mobile" : ""}
              selectName="category"
              titleSort="Вид рабочего места"
              array={coWorkingOptions}
              size="max"
              handleSelectChange={handleSelectChange}
            />
            <MultiChoiceDropdown
              // extraClass={
              //   isMobile ? "dropdown_location_coworking-search-mobile" : ""
              // }
              dropdownName="metro"
              dropdownTitle="Станции метро"
              array={metroArray}
              size="max"
              handleSelectChange={handleSelectChange}
            />
          </div>
        )}
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
  isFiltersShown: PropTypes.bool,
};

SearchForm.defaultProps = {
  limit: 0,
  offset: 0,
  isFiltersShown: true,
};
