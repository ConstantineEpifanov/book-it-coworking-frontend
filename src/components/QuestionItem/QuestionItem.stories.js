import { QuestionItem } from "./QuestionItem";

export default {
  title: "Components/QuestionItem",
  component: QuestionItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Example = {
  args: {
    question: "Что такое коворкинг и как он работает?",
    answer:
      "Коворкинг — это общее рабочее пространство, где люди разных компаний и профессий могут арендовать рабочие места. В коворкинге обычно есть общие зоны, конференц-залы и инфраструктура, такие как принтеры и интернет. Пользователи арендуют место на определённое время и платят за это.",
  },
};
