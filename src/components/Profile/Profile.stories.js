import { Profile } from "./Profile";

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
  },
};
