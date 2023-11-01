import { Coworking } from "./Coworking";

export default {
  title: "Pages/Coworking",
  component: Coworking,
  parameters: {
    layout: "fullscreen",
  },
};

export const Example = {
  args: {
    coworking: {
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
    equipment: [
      {
        title: "Рабочее место",
        data: [
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
        ],
      },
      {
        title: "В переговорной №1",
        data: [
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
          {
            text: "Монитор",
            img: "https://cdn-icons-png.flaticon.com/512/72/72234.png",
          },
        ],
      },
    ],

    reviews: [
      {
        author: "Грета Гарбо",
        date: "01.12.1989",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        rating: 5,
      },
      {
        author: "Грета Гарбо",
        date: "01.12.1989",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        rating: 5,
      },
      {
        author: "Грета Гарбо",
        date: "01.12.1989",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        rating: 2,
      },
      {
        author: "Грета Гарбо",
        date: "01.12.1989",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        rating: 5,
      },
      {
        author: "Грета Гарбо",
        date: "01.12.1989",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        rating: 1,
      },
      {
        author: "Грета Гарбо",
        date: "01.12.1989",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        rating: 5,
      },
    ],
  },
};
