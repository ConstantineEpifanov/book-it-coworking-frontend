import React from "react";
import PropTypes from "prop-types";
import "./SectionTitle.scss";

export const SectionTitle = ({ titleText }) => (
  <h2 className="section-title">{titleText}</h2>
);
SectionTitle.propTypes = {
  titleText: PropTypes.string,
};

SectionTitle.defaultProps = {
  titleText: undefined,
};
