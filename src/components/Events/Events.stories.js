import { Events } from "./Events";
import EventsOne from "../../images/dummy-data/event1.png";
import EventsTwo from "../../images/dummy-data/event2.png";
import EventsThree from "../../images/dummy-data/event3.png";

export default {
  title: "Components/Events",
  component: Events,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const EventsDemo = {
  args: {
    eventsArray: [
      {
        id: 1,
        name: "класс по сторителлингу и еще немного текста",
        image: EventsOne,
        address: "г. Санкт-Петербург, Набережная реки Карповки, 5АК",
        meetingQuantity: 30,
        url: "https://ya.ru",
        date: "30/09/23",
      },
      {
        id: 2,
        name: "как получить грант?",
        image: EventsTwo,
        address: "г. Санкт-Петербург, Кантемировская улица, 22",
        meetingQuantity: 20,
        url: "https://ya.ru",
        date: "01/10/23",
      },
      {
        id: 3,
        name: "поговорим о брендинге",
        image: EventsThree,
        address: "г. Санкт-Петербург, Набережная реки Карповки, 5АК",
        meetingQuantity: 25,
        url: "https://ya.ru",
        date: "02/10/23",
      },
      {
        id: 4,
        name: "класс по сторителлингу и еще немного текста",
        image: EventsOne,
        address: "г. Санкт-Петербург, Набережная реки Карповки, 5АК",
        meetingQuantity: 30,
        url: "https://ya.ru",
        date: "30/09/23",
      },
      {
        id: 5,
        name: "как получить грант?",
        image: EventsTwo,
        address: "г. Санкт-Петербург, Кантемировская улица, 22",
        meetingQuantity: 20,
        url: "https://ya.ru",
        date: "01/10/23",
      },
      {
        id: 6,
        name: "поговорим о брендинге",
        image: EventsThree,
        address: "г. Санкт-Петербург, Набережная реки Карповки, 5АК",
        meetingQuantity: 25,
        url: "https://ya.ru",
        date: "02/10/23",
      },
    ],
  },
};
