import React, { useEffect } from "react";
import { getRules, getQuestions } from "../../utils/Api";
import { Rules } from "../Rules/Rules";

import { Questions } from "../Questions/Questions";

import "./RulesQuestions.scss";

export const RulesQuestions = () => {
  useEffect(() => {
    getQuestions();
    getRules();
  }, []);

  return (
    <main
      className="rules-questions"
      aria-label="страница с правилами и вопросами"
    >
      <Rules />
      <Questions />
    </main>
  );
};
