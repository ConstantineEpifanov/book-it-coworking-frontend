import { Calendar } from "./Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    selectCallback: {
      description: "Функция колбэка при выборе даты",
    },
    isMultiSelect: {
      description: "Множественный выбор",
      control: {
        type: "boolean",
      },
    },
    initialDate: {
      description: "Начальная дата",
      control: {
        type: "date",
      },
    },
    maxDatesRange: {
      description: "Доступный промежуток дат",
      control: {
        type: "number",
      },
    },
  },
};

export const Example = {
  args: {
    isMultiSelect: false,
  },
};
