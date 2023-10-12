/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { getRules, getQuestions } from "../../utils/Api";
import { Rules } from "../Rules/Rules";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { Questions } from "../Questions/Questions";
import { Loader } from "../Loader/Loader";

import "./RulesQuestions.scss";

export const RulesQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [rules, setRules] = useState([]);
  const { isLoading, setIsLoading } = useContext(CurrentUserContext);

  useEffect(() => {
    setIsLoading(true);
    getQuestions()
      .then((res) => {
        setQuestions(res);
      })
      .catch(() => {});

    getRules()
      .then((res) => {
        setRules(res);
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main
      className="rules-questions"
      aria-label="страница с правилами и вопросами"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Rules rules={rules} />
          <Questions questions={questions} />
        </>
      )}
    </main>
  );
};
