import React, { useEffect, useState } from "react";
import { getRules, getQuestions } from "../../utils/Api";
import { Rules } from "../Rules/Rules";

import { Questions } from "../Questions/Questions";

import "./RulesQuestions.scss";

export const RulesQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [rules, setRules] = useState([]);

  useEffect(() => {
    getQuestions()
      .then((res) => {
        setQuestions(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getRules()
      .then((res) => {
        setRules(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main
      className="rules-questions"
      aria-label="страница с правилами и вопросами"
    >
      <Rules rules={rules} />
      <Questions questions={questions} />
    </main>
  );
};
