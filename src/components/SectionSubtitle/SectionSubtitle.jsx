import React from "react";
import PropTypes from "prop-types";
import "./SectionSubtitle.scss";

export const SectionSubtitle = ({ titleText, titleClass }) => (
  <h3 className={`section-subtitle ${titleClass}`}>{titleText}</h3>
);
SectionSubtitle.propTypes = {
  titleText: PropTypes.string,
  titleClass: PropTypes.string,
};

SectionSubtitle.defaultProps = {
  titleText: undefined,
  titleClass: undefined,
};
