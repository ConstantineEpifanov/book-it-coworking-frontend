import React from "react";
import PropTypes from "prop-types";
import "./Rules.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { RuleItem } from "../RuleItem/RuleItem";

export const Rules = ({ rules }) => (
  <section className="rules">
    <SectionTitle titleText="Правила аренды" />
    <SectionSubtitle titleText="Пожалуйста, ознакомьтесь с&#160;правилами перед бронированием" />
    <ul className="rules__list">
      {rules.map((item) => (
        <li key={item.id}>
          <RuleItem title={item.title} text={item.text} icon={item.icon} />
        </li>
      ))}
    </ul>
  </section>
);

Rules.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.string,
    }),
  ),
};
Rules.defaultProps = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      id: undefined,
      text: undefined,
      title: undefined,
      img: undefined,
    }),
  ),
};
