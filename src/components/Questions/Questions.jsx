import React from "react";
import "./Questions.scss";
import PropTypes from "prop-types";

import { SectionTitle } from "../SectionTitle/SectionTitle";
import { QuestionItem } from "../QuestionItem/QuestionItem";

export function Questions({ questions }) {
  return (
    <section className="questions">
      <SectionTitle titleText="Часто задаваемые вопросы" />
      <ul className="questions__list">
        {questions.map((item) => (
          <li key={item.id}>
            <QuestionItem question={item.question} answer={item.answer} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Questions.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      question: PropTypes.string,
      answer: PropTypes.string,
    }),
  ),
};
Questions.defaultProps = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: undefined,
      question: undefined,
      answer: undefined,
    }),
  ),
};
