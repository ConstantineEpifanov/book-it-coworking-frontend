import { NotFoundError } from "./NotFoundError";

export default {
  title: "Components/NotFoundError",
  component: NotFoundError,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const NotFoundErrorDemo = {
  args: {
    titleText: "Этого мы не нашли",
    subtitleText: "Попробуйте изменить параметры поиска и повторите попытку",
    directionRow: false,
  },
};
