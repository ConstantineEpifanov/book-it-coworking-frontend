import { SectionTitle } from "./SectionTitle";

export default {
  title: "SectionTitle",
  component: SectionTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Example = {
  args: {
    titleText: "Тестовый заголовок",
  },
};
