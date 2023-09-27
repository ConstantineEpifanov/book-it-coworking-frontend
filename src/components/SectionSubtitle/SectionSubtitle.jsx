import React from "react";
import PropTypes from "prop-types";
import "./SectionSubtitle.scss";

export const SectionSubtitle = ({ titleText }) => (
  <h3 className="section-subtitle">{titleText}</h3>
);
SectionSubtitle.propTypes = {
  titleText: PropTypes.string,
};

SectionSubtitle.defaultProps = {
  titleText: undefined,
};
