import { Profile } from "./Profile";
import SpotPhoto from "../../images/dummy-spot2.jpg";

export default {
  title: "Pages/Profile",
  component: Profile,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    user: {
      control: {
        type: "object",
      },
    },
  },
};

export const ProfileDemo = {
  args: {
    user: {
      first_name: "Иван",
      last_name: "Иванов",
      birth_date: "08.09.1992",
      phone: "+79111002030",
      email: "pochta@mail.ru",
      occupation: "дизайнер",
      password: "qwerty12345",
      card: {
        number: "1100230040001212",
        valid: "11/29",
        type: "mastercard",
      },
    },
    favorites: [
      {
        id: "1",
        street: "г. Санкт-Петербург, ул. Льва Толстого, 1-3",
        name: "Особняк",
        rating: 4.8,
        image: SpotPhoto,
      },
      {
        id: "2",
        street: "г. Санкт-Петербург, ул. Льва Толстого, 1-3",
        name: "У моря",
        rating: 4.9,
        image: SpotPhoto,
      },
    ],
    bookings: [
      {
        id: "1",
        spot: {
          name: "Парк",
          image: SpotPhoto,
        },
        date: "6 сентября 2023",
        start_time: "12:00",
        end_time: "13:00",
        bill: 200,
        isFinished: true,
      },
      {
        id: "1",
        spot: {
          name: "Особняк",
          image: SpotPhoto,
        },
        date: "8 сентября 2023",
        start_time: "08:00",
        end_time: "10:00",
        bill: 200,
        isFinished: false,
        status: "Processing",
      },
    ],
  },
};
