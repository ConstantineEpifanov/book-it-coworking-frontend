import React from "react";
import PropTypes from "prop-types";
import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({ titleText }) => (
  <h2 className={styles.title}>{titleText}</h2>
);
SectionTitle.propTypes = {
  titleText: PropTypes.string,
};

SectionTitle.defaultProps = {
  titleText: undefined,
};
