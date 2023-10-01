import { EventsItem } from "./EventsItem";
import EventsOne from "../../images/dummy-data/event1.png";

export default {
  title: "Components/EventsItem",
  component: EventsItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const EventsItemDemo = {
  args: {
    event: {
      id: 1,
      name: "класс по сторителлингу и еще немного текста",
      image: EventsOne,
      address: "г. Санкт-Петербург, Набережная реки Карповки, 5АК",
      meetingQuantity: 30,
      url: "https://ya.ru",
      date: "30/09/23",
    },
  },
};
