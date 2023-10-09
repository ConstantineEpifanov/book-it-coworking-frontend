import React, { useState } from "react";
import PropTypes from "prop-types";
import "./QuestionItem.scss";

export function QuestionItem({ question, answer }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="question" onClick={handleToggle} role="presentation">
      <div className="question__container">
        <h2 className="question__title">{question}</h2>
        <button
          type="button"
          className={
            isActive
              ? "question__button question__button_active"
              : "question__button"
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <p
        className={
          !isActive ? "question__text question__text_active" : "question__text"
        }
      >
        {answer}
      </p>
    </div>
  );
}

QuestionItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

QuestionItem.defaultProps = {
  question: undefined,
  answer: undefined,
};
