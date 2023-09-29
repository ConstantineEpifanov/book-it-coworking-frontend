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
  },
};

export const Example = {
  args: {
    title: "Коворкинг",
    subtitle: "Рядом находится прекрасная набережная для прогулок",
    info: "Просторный коворкинг с авторским дизайном на берегу реки Карповки. Это место для работы компаний, креативных команд, стартапов, предпринимателей и удалённых сотрудников. Мы продумали все до мелочей, чтобы вам ни пришлось думать ни о чем кроме ваших задач.",
    rating: "5.0",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/Polarography_workplace.jpg",
    address: "г. Санкт-Петербург, Кантемировская улица, 22",
    metro: "м. Лесная 200м",
    time: "Пн-Вс с 7:00 – 22:00",
    generalQuantity: 2,
    meetingQuantity: 30,
  },
};
