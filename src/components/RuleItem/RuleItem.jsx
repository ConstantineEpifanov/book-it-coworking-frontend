import React from "react";
import PropTypes from "prop-types";
import "./RuleItem.scss";

export const RuleItem = ({ titleText, articleText, path }) => (
  <article className="rule">
    <svg
      className="rule__img"
      xmlns="http://www.w3.org/2000/svg"
      width="170"
      height="170"
      viewBox="0 0 170 170"
      fill="none"
    >
      {path}
    </svg>
    <h3 className="rule__title">{titleText}</h3>
    <div className="rule__scroll-content">
      <p className="rule__text">{articleText}</p>
    </div>
  </article>
);
RuleItem.propTypes = {
  titleText: PropTypes.string,
  articleText: PropTypes.string,
  path: PropTypes.node,
};

RuleItem.defaultProps = {
  titleText: undefined,
  articleText: undefined,
  path: undefined,
};
