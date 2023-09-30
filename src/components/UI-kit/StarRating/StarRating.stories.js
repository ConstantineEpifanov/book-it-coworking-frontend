import StarRating from "./StarRating";

export default {
  title: "UI-Kit/StarRating",
  component: StarRating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      description: "Рейтинг",
      control: { type: "radio" },
      options: [1, 2, 3, 4, 5],
    },
  },
};

export const StarRatingPromo = (args) => <StarRating {...args} />;
