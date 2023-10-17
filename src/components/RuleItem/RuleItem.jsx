/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";
import "./RuleItem.scss";

export const RuleItem = ({ title, text, icon }) => (
  <article className="rule">
    <img className="rule__img" alt={title} src={icon} />
    <h3 className="rule__title">{title}</h3>
    <div className="rule__scroll-content">
      <p className="rule__text" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </article>
);
RuleItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
};

RuleItem.defaultProps = {
  title: undefined,
  text: undefined,
  icon: undefined,
};
