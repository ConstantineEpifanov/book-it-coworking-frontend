import { ButtonsList } from "./ButtonsList";
import {
  timesButtonsList,
  spotsButtonsList,
  meetingRoomsButtonsList,
} from "../../config/exampleBookingData";

export default {
  title: "Components/ButtonsList",
  component: ButtonsList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    listType: {
      description: "Вариант отображения списка",
    },
    itemsList: {
      description: "Массив обектов с параметрами для кнопок",
      control: {
        type: "object",
      },
    },
    isEnabled: {
      description: "Состояние доступности списка",
      control: {
        type: "boolean",
      },
    },
    isMultiselect: {
      description: "Возможность множественного выбора",
      control: {
        type: "boolean",
      },
    },
    isSelectByRanges: {
      description:
        "Автоматический выбор всех промежуточных значений между двумя отмеченными",
      control: {
        type: "boolean",
      },
    },
    allowedRanges: {
      description: "Допустимые диапазоны элементов для множественного выбора",
      control: {
        type: "object",
      },
    },
    ariaLabel: {
      description: "Текстовое описание секции",
      control: {
        type: "string",
      },
    },
    listClassName: {
      description: "Дополнительный класс для списка",
      control: {
        type: "string",
      },
    },
    itemsClassName: {
      description: "Дополнительный класс для кнопок",
      control: {
        type: "string",
      },
    },
    extraRules: {
      description: "Массив доволнительных функций проверки",
    },
    sortFunc: {
      description: "Функция сортироваки элементов списка",
    },
  },
};

export const Times = {
  args: {
    allowedRanges: [[2, 3, 4]],
    listType: "time-ranges",
    itemsList: timesButtonsList,
  },
};

export const Spots = {
  args: {
    listType: "spots",
    itemsList: spotsButtonsList,
  },
};

export const MeetingRooms = {
  args: {
    listType: "meeting-rooms",
    itemsList: meetingRoomsButtonsList,
  },
};
