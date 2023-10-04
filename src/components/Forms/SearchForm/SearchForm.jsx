import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import logoSearch from "../../../images/search-icon.svg";
import SortData from "../../UI-kit/SortData/SortData";
import { coWorkingOptions, metroOptions } from "../../../config/dataOptions";

const SearchForm = () => (
  <div className="entry-form__container">
    <form
      className="entry-form__inner entry-form__inner_select"
      name="form"
      autoComplete="off"
    >
      <div className="entry-form__search">
        {/* @ TODO подумать над реализацией смены иконки при ошибке */}
        <img
          src={logoSearch}
          alt="иконка поиска"
          className="entry-form__search-img"
        />
        <Input
          inputClass="input__search"
          inputType="search"
          inputName="search"
          inputPlaceholder="Искать по названию... "
        />
      </div>
      <SortData
        titleSort="Вид рабочего места"
        array={coWorkingOptions}
        size="max"
      />
      <SortData titleSort="Линия метро" array={metroOptions} size="min" />
      <Button
        btnClass="button_type_form button_type_form-select"
        btnType="button"
        btnText="Искать"
        onClick={() => {}}
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

export default SearchForm;
