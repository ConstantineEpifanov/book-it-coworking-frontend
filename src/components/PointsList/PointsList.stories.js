import { PointsList } from "./PointsList";

export default {
  title: "Components/PointsList",
  component: PointsList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Example = {
  args: {
    pointsRender: [
      {
        id: 3,
        name: "Линии",
        get_full_address_str:
          "г. Санкт-Петербург, ул. 8-я линия Васильевского острова, 25",
        metro: "Василеостровская",
        open_time: "07:00",
        close_time: "22:00",
        rating: null,
        low_price: null,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/guide_76_118da141db66068583073d8dfded7bc3.jpg",
        extra_photo: [
          {
            id: 3,
            image:
              "http://185.41.160.27/media/images/thumb_WhatsApp_Image_2018-06-07_at_21.00.54.jpeg",
          },
        ],
        short_annotation: "Есть спешелти кофейня на первом этаже",
        description:
          "Просторный коворкинг с авторским дизайном внутри большого бизнес. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 0,
        count_meeting_room: 0,
        coordinates: [59.93, 30.28],
        days_open: "пн-вс",
      },
      {
        id: 7,
        name: "На карповке",
        get_full_address_str:
          "г. Санкт-Петербург, ул. Набережная реки Карповки, 5АК",
        metro: "Петроградская",
        open_time: "07:00",
        close_time: "20:00",
        rating: null,
        low_price: null,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/istockphoto-1317893331-612x612.jpg",
        extra_photo: [
          {
            id: 7,
            image:
              "http://185.41.160.27/media/images/istockphoto-1149706618-612x612.jpg",
          },
        ],
        short_annotation: "Рядом находится прекрасная набережная для прогулок",
        description:
          "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 0,
        count_meeting_room: 0,
        coordinates: [59.96, 30.31],
        days_open: "пн-пт",
      },
      {
        id: 9,
        name: "Парк",
        get_full_address_str:
          "г. Санкт-Петербург, ул. Коломяжский проспект, 17/1",
        metro: "Пионерская",
        open_time: "11:00",
        close_time: "19:40",
        rating: null,
        low_price: null,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/istockphoto-1412875217-612x612.jpg",
        extra_photo: [
          {
            id: 9,
            image:
              "http://185.41.160.27/media/images/istockphoto-1253082915-612x612.jpg",
          },
        ],
        short_annotation: "С видом на Удельный парк",
        description:
          "Просторный коворкинг с авторским дизайном. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 0,
        count_meeting_room: 0,
        coordinates: [60.005437, 30.299043],
        days_open: "пн-вс",
      },
      {
        id: 1,
        name: "Первая локация",
        get_full_address_str: "г. Москва, ул. Московская, 1",
        metro: "Москвоская",
        open_time: "00:00",
        close_time: "23:45",
        rating: 5,
        low_price: 100,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/istockphoto-958518456-612x612.jpg",
        extra_photo: [
          {
            id: 1,
            image:
              "http://185.41.160.27/media/images/istockphoto-1464415303-612x612.jpg",
          },
        ],
        short_annotation: "",
        description: "",
        is_favorited: false,
        count_workspace: 1,
        count_meeting_room: 1,
        coordinates: [1, 1],
        days_open: "пн-вс",
      },
      {
        id: 10,
        name: "Сенная",
        get_full_address_str: "г. Санкт-Петербург, ул. ул. Ефимова, 3С",
        metro: "Сенная",
        open_time: "09:00",
        close_time: "23:00",
        rating: null,
        low_price: null,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/istockphoto-1135599101-612x612.jpg",
        extra_photo: [
          {
            id: 10,
            image:
              "http://185.41.160.27/media/images/istockphoto-896403186-612x612.jpg",
          },
          {
            id: 11,
            image:
              "http://185.41.160.27/media/images/istockphoto-1341392178-612x612.jpg",
          },
        ],
        short_annotation: "Коворкинг находится в самом центре Санкт-Петербурга",
        description:
          "Просторный коворкинг с авторским дизайном. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 0,
        count_meeting_room: 0,
        coordinates: [59.925155, 30.32018],
        days_open: "пн-вс",
      },
      {
        id: 2,
        name: "лес",
        get_full_address_str:
          "г. Санкт-Петербург, ул. Кантемировская улица, 22",
        metro: "Лесная",
        open_time: "07:00",
        close_time: "22:00",
        rating: null,
        low_price: 100,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/a-obraznyi-dom-v-minesote-pufikhomes-1a.jpg",
        extra_photo: [
          {
            id: 2,
            image: "http://185.41.160.27/media/images/62063c78b0e63.jpg",
          },
        ],
        short_annotation:
          "Уютный коворкинг рядом с Парком Лесотехнической академии",
        description:
          "Просторный коворкинг с авторским дизайном. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 2,
        count_meeting_room: 0,
        coordinates: [59.98, 30.34],
        days_open: "пн-вс",
      },
      {
        id: 4,
        name: "литейный",
        get_full_address_str: "г. Санкт-Петербург, ул. Литейный проспект, 57",
        metro: "Чернышевская",
        open_time: "07:00",
        close_time: "22:00",
        rating: null,
        low_price: null,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/3265-kovorking-centr-teplica-d8e1d1af8874.jpg",
        extra_photo: [
          {
            id: 4,
            image:
              "http://185.41.160.27/media/images/guide_76_118da141db66068583073d8dfded7bc3.jpg",
          },
        ],
        short_annotation: "Рядом находится магазин «Подписные издания»",
        description:
          "Просторный коворкинг с авторским дизайном. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 0,
        count_meeting_room: 0,
        coordinates: [59.93, 30.34],
        days_open: "пн-пт",
      },
      {
        id: 6,
        name: "московский",
        get_full_address_str:
          "г. Санкт-Петербург, ул. Московский проспект, 212",
        metro: "Московская",
        open_time: "09:30",
        close_time: "22:00",
        rating: null,
        low_price: null,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/istockphoto-1323020583-612x612.jpg",
        extra_photo: [
          {
            id: 6,
            image:
              "http://185.41.160.27/media/images/istockphoto-1329940971-612x612.jpg",
          },
        ],
        short_annotation:
          "Есть выход в зелёный сквер для обедов на свежем воздухе",
        description:
          "Просторный коворкинг с авторским дизайном. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 0,
        count_meeting_room: 0,
        coordinates: [59.85, 30.32],
        days_open: "пн-сб",
      },
      {
        id: 8,
        name: "особняк",
        get_full_address_str:
          "г. Санкт-Петербург, ул. улица Льва Толстого, 1-3",
        metro: "Петроградская",
        open_time: "10:00",
        close_time: "17:00",
        rating: null,
        low_price: null,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/istockphoto-1321363500-612x612.jpg",
        extra_photo: [
          {
            id: 8,
            image:
              "http://185.41.160.27/media/images/istockphoto-1201021076-612x612.jpg",
          },
        ],
        short_annotation:
          "Большой технологичный коворкинг с видом на площадь Льва Толстого",
        description:
          "Просторный коворкинг с авторским дизайном и видом на площадь Льва Толстого. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 0,
        count_meeting_room: 0,
        coordinates: [59.965282, 30.312814],
        days_open: "пн-вс",
      },
      {
        id: 5,
        name: "у моря",
        get_full_address_str: "г. Санкт-Петербург, ул. Кожевенная линия, 40Б",
        metro: "Василеостровская",
        open_time: "07:00",
        close_time: "20:00",
        rating: null,
        low_price: null,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/istockphoto-1124783373-612x612.jpg",
        extra_photo: [
          {
            id: 5,
            image:
              "http://185.41.160.27/media/images/istockphoto-1124783373-612x612.jpg",
          },
        ],
        short_annotation: "На самом берегу с видом на Финский залив",
        description:
          "Просторный коворкинг с авторским дизайном на берегу Финского залива. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 0,
        count_meeting_room: 0,
        coordinates: [59.92, 30.24],
        days_open: "пн-вс",
      },
      {
        id: 11,
        name: "центральный",
        get_full_address_str:
          "г. Санкт-Петербург, ул. Невский проспект, 114-116",
        metro: "Невский проспект",
        open_time: "07:00",
        close_time: "23:00",
        rating: null,
        low_price: null,
        main_photo:
          "http://185.41.160.27/media/images/main_photo/istockphoto-1412875095-612x612.jpg",
        extra_photo: [
          {
            id: 12,
            image:
              "http://185.41.160.27/media/images/istockphoto-1425103374-612x612.jpg",
          },
          {
            id: 13,
            image:
              "http://185.41.160.27/media/images/istockphoto-1425175269-612x612.jpg",
          },
        ],
        short_annotation:
          "Коворкинг находится буквально в самом центре Санкт-Петербурга",
        description:
          "Просторный коворкинг с авторским дизайном прямо на Невском проспекте. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
        is_favorited: false,
        count_workspace: 0,
        count_meeting_room: 0,
        coordinates: [59.931941, 30.359149],
        days_open: "пн-сб",
      },
    ],
  },
};
