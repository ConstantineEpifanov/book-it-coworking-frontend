import { Loader } from "./Loader";

export default {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    animationDelay: {
      description: "Время задержки",
    },
    itemColor: {
      description: "Цвет заливки",
      control: {
        type: "color",
      },
    },
  },
};

export const Example = {
  args: {
    animationDelay: 1,
    itemColor: "#b0ff1a",
  },
};
