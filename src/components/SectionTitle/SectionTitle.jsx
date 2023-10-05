import React from "react";
import PropTypes from "prop-types";
import "./SectionTitle.scss";

export const SectionTitle = ({ titleText, titleClass }) => (
  <h2 className={`section-title${titleClass ? ` ${titleClass}` : ""}`}>
    {titleText}
  </h2>
);
SectionTitle.propTypes = {
  titleText: PropTypes.string,
  titleClass: PropTypes.string,
};

SectionTitle.defaultProps = {
  titleText: "",
  titleClass: "",
};
