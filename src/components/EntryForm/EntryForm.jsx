import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

import "./EntryForm.css";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";

// поправить название
function EntryForm({ title, children, btnText, onSubmit, isValidBtn }) {
  return (
    <Popup title="Вход" isOpen="true">
      <section className="entry-form" aria-label={title}>
        <div className="entry-form__container">
          <h3 className="entry-form__title">{title}</h3>
          <form name="form" className="entry-form__box" onSubmit={onSubmit}>
            {children}
            <Button
              btnClass={`button_type_form ${
                isValidBtn ? "" : "button_disabled"
              }`}
              btnType="submit"
              btnText={btnText}
            />
          </form>
        </div>
      </section>
    </Popup>
  );
}

EntryForm.propTypes = {
  title: PropTypes.string,
  isValidBtn: PropTypes.bool,
  btnText: PropTypes.string,
  onSubmit: PropTypes.func,
};

EntryForm.defaultProps = {
  title: "Вход",
  btnText: "Сохранить",
  isValidBtn: true,
  onSubmit: undefined,
};

export default EntryForm;
