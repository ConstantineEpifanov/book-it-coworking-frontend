import { PointsItem } from "./PointsItem";

export default {
  title: "Components/PointsItem",
  component: PointsItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isCompact: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

export const Example = {
  args: {
    title: "Коворкинг",
    rating: "5.0",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",
    address: "г. Санкт-Петербург, Кантемировская улица, 22",
    metro: "м. Лесная 200м",
  },
};
