import { Main } from "./Main";
import EventsOne from "../../images/dummy-data/event1.png";
import EventsTwo from "../../images/dummy-data/event2.png";
import EventsThree from "../../images/dummy-data/event3.png";

export default {
  title: "Pages/Main",
  component: Main,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Example = {
  args: {
    coworkingsArray: [
      {
        title: "Коворкинг",
        subtitle: "Рядом находится прекрасная набережная для прогулок",
        about:
          "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        rating: "5.0",
        lowPrice: 400,
        mainPhoto:
          "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",
        extraPhoto: [
          {
            id: 2,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg",
          },
          {
            id: 3,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG",
          },
          {
            id: 4,
            url: "https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg",
          },
        ],
        address: "г. Санкт-Петербург, Кантемировская улица, 22",
        metro: "м. Лесная 200м",
        openTime: 7,
        closeTime: 20,
        generalQuantity: 2,
        meetingQuantity: 30,
      },
      {
        title: "Коворкинг",
        subtitle: "Рядом находится прекрасная набережная для прогулок",
        about:
          "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        rating: "5.0",
        lowPrice: 400,
        mainPhoto:
          "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",
        extraPhoto: [
          {
            id: 2,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg",
          },
          {
            id: 3,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG",
          },
          {
            id: 4,
            url: "https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg",
          },
        ],
        address: "г. Санкт-Петербург, Кантемировская улица, 22",
        metro: "м. Лесная 200м",
        openTime: 7,
        closeTime: 20,
        generalQuantity: 2,
        meetingQuantity: 30,
      },
      {
        title: "Коворкинг",
        subtitle: "Рядом находится прекрасная набережная для прогулок",
        about:
          "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        rating: "5.0",
        lowPrice: 400,
        mainPhoto:
          "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",
        extraPhoto: [
          {
            id: 2,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg",
          },
          {
            id: 3,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG",
          },
          {
            id: 4,
            url: "https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg",
          },
        ],
        address: "г. Санкт-Петербург, Кантемировская улица, 22",
        metro: "м. Лесная 200м",
        openTime: 7,
        closeTime: 20,
        generalQuantity: 2,
        meetingQuantity: 30,
      },
      {
        title: "Коворкинг",
        subtitle: "Рядом находится прекрасная набережная для прогулок",
        about:
          "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        rating: "5.0",
        lowPrice: 400,
        mainPhoto:
          "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",
        extraPhoto: [
          {
            id: 2,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Inside_Kenworth_conventional.jpg/1024px-Inside_Kenworth_conventional.jpg",
          },
          {
            id: 3,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Sewing_machines.JPG/1024px-Sewing_machines.JPG",
          },
          {
            id: 4,
            url: "https://i.pinimg.com/1200x/6b/05/91/6b0591eaf61d1962182e85737e97001d.jpg",
          },
        ],
        address: "г. Санкт-Петербург, Кантемировская улица, 22",
        metro: "м. Лесная 200м",
        openTime: 7,
        closeTime: 20,
        generalQuantity: 2,
        meetingQuantity: 30,
      },
    ],
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
