import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

import "./EntryForm.scss";

function EntryForm({ title, onSubmit, children }) {
  return (
    <section className="entry-form" aria-label={title}>
      <div className="entry-form__container">
        <h3 className="entry-form__title">{title}</h3>
        <form className="entry-form__inner" name="form" onSubmit={onSubmit}>
          <fieldset className="entry-form__box">{children}</fieldset>
        </form>
      </div>
    </section>
  );
}

EntryForm.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.element.isRequired,
};

EntryForm.defaultProps = {
  title: "Вход",
  onSubmit: () => {},
};

export default EntryForm;
