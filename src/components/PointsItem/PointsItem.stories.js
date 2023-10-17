import { PointsItem } from "./PointsItem";

export default {
  title: "Components/PointsItem",
  component: PointsItem,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isCompact: {
      options: [true, false],
    },
    isListed: {
      options: [true, false],
    },
  },
};

export const Example = {
  args: {
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
      "https://spotit.acceleratorpracticum.ru/media/images/main_photo/guide_76_118da141db66068583073d8dfded7bc3.jpg",
    extra_photo: [
      {
        id: 3,
        image:
          "https://spotit.acceleratorpracticum.ru/media/images/thumb_WhatsApp_Image_2018-06-07_at_21.00.54.jpeg",
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
};
