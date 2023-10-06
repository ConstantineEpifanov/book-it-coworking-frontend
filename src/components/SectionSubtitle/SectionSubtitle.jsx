import React from "react";
import PropTypes from "prop-types";
import "./SectionSubtitle.scss";

export const SectionSubtitle = ({ titleText, titleClass }) => (
  <p className={`section-subtitle ${titleClass}`}>{titleText}</p>
);
SectionSubtitle.propTypes = {
  titleText: PropTypes.string,
  titleClass: PropTypes.string,
};

SectionSubtitle.defaultProps = {
  titleText: undefined,
  titleClass: undefined,
};
