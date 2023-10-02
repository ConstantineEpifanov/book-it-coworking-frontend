import { PointRating } from "./PointRating";

export default {
  title: "Ui-kit/PointRating",
  component: PointRating,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    optionalClass: {
      description: "Дополнительные классы стилей",
      control: { type: "select" },
      options: ["point-rating_on-image", "point-rating_own-page"],
    },
  },
};

export const Example = {
  args: {
    rating: 5,
  },
};
