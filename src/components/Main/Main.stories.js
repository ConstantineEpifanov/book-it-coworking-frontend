import { Main } from "./Main";

export default {
  title: "Pages/Main",
  component: Main,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const MainDemo = () => <Main />;
