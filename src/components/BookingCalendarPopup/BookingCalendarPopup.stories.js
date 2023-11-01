import BookingCalendarPopup from "./BookingCalendarPopup";
import { timesButtonsList } from "../../config/exampleBookingData";

export default {
  title: "Components/BookingCalendarPopup",
  component: BookingCalendarPopup,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isOpen: {
      description: "Состояние открытия",
      control: {
        type: "boolean",
      },
    },
    timeListProps: {
      description: "Объект свойств для списка промежутков времени",
      control: {
        type: "object",
      },
    },
    popupClass: {
      description: "Класс для контейнера попапа",
      control: {
        type: "text",
      },
    },
    onDateSelect: {
      description: "Функция колбэк для выбора даты",
    },
    onClickClose: {
      description: "Функция колбэк для закрытия попапа",
    },
    onSaveClick: {
      description: "Функция колбэк для обработки сохранения выбранных данных",
    },
  },
};

export const Example = () => (
  <BookingCalendarPopup
    onDateSelect={() => {}}
    isOpen
    timeListProps={{
      isEnabled: true,
      itemsList: timesButtonsList,
      allowedRanges: null,
      isMultiselect: false,
      listClassName:
        "booking__buttons-list booking__buttons-list_type_time-ranges",
    }}
  />
);
