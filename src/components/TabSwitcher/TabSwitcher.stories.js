import { TabSwitcher } from "./TabSwitcher";

export default {
  title: "Components/TabSwitcher",
  component: TabSwitcher,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    firstCaption: {
      description: "Первый элемент",
      control: {
        type: "text",
      },
    },
    secondCaption: {
      description: "Второй элемент",
      control: {
        type: "text",
      },
    },
    onClick: {
      description: "Колбэк клика",
    },
    containerClassName: {
      description: "Дополнительный класс для контейнера",
      control: {
        type: "text",
      },
    },
    itemClassName: {
      description: "Дополнительный класс для элемента",
      control: {
        type: "text",
      },
    },
  },
};

export const Example = {
  args: {
    firstCaption: "Рабочее место",
    secondCaption: "Переговорная",
  },
};
