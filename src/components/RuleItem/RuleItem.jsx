import React from "react";
import PropTypes from "prop-types";
import "./RuleItem.scss";

export const RuleItem = ({ titleText, articleText, imgSrc, imgAlt }) => (
  <article className="rule">
    <img src={imgSrc} alt={imgAlt} className="rule__img" />
    <h3 className="rule__title">{titleText}</h3>
    <div className="rule__scroll-content">
      <p className="rule__text">{articleText}</p>
    </div>
  </article>
);
RuleItem.propTypes = {
  titleText: PropTypes.string,
  articleText: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

RuleItem.defaultProps = {
  titleText: undefined,
  articleText: undefined,
  imgSrc: undefined,
  imgAlt: undefined,
};
