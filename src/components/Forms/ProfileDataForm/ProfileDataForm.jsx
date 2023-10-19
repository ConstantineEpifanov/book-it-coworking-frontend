import React from "react";
import PropTypes from "prop-types";

import "./ProfileDataForm.scss";

function ProfileDataForm({ title, formClass, onSubmit, children }) {
  return (
    <form
      className={`profdata-form${formClass ? ` ${formClass}` : ""}`}
      name="form"
      onSubmit={onSubmit}
      autoComplete="off"
      aria-label={title}
    >
      <fieldset className="profdata-form__fieldset">{children}</fieldset>
    </form>
  );
}

ProfileDataForm.propTypes = {
  title: PropTypes.string,
  formClass: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
};

ProfileDataForm.defaultProps = {
  title: "",
  formClass: "",
  onSubmit: () => {},
};

export default ProfileDataForm;
