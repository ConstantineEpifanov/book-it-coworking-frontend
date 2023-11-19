import React from "react";
import PropTypes from "prop-types";

import "./EntryForm.scss";

function EntryForm({ title, formClass, onSubmit, children }) {
  return (
    <section className={`entry-form ${formClass}`} aria-label={title}>
      <div className="entry-form__container">
        <h3 className="entry-form__title">{title}</h3>
        <form
          className="entry-form__inner"
          name="form"
          onSubmit={onSubmit}
          autoComplete="off"
        >
          <fieldset className="entry-form__box">{children}</fieldset>
        </form>
      </div>
    </section>
  );
}

EntryForm.propTypes = {
  title: PropTypes.string,
  formClass: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
};

EntryForm.defaultProps = {
  title: "",
  formClass: "",
  onSubmit: () => {},
};

export default EntryForm;
