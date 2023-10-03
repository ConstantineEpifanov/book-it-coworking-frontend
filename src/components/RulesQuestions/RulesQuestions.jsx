import { Rules } from "../Rules/Rules";
import { Questions } from "../Questions/Questions";

import "./RulesQuestions.scss";

export const RulesQuestions = () => (
  <main
    className="rules-questions"
    aria-label="страница с правилами и вопросами"
  >
    <Rules />
    <Questions />
  </main>
);
