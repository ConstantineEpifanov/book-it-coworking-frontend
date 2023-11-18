import React, { useState } from "react";
import PropTypes from "prop-types";
import "./RuleItem.scss";

export const RuleItem = ({ title, text, icon }) => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <article className="rule" onClick={handleToggle} role="presentation">
      <img className="rule__img" alt={title} src={icon} />
      <div className="rule__container">
        <h3 className="rule__title">{title}</h3>
        <button
          type="button"
          className={
            isActive ? "rule__button rule__button_active" : "rule__button"
          }
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icons">
              <path
                id="Vector"
                d="M11 16.5L22 27.5L33 16.5"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
      {isActive && (
        <p className="rule__text" dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </article>
  );
};

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
