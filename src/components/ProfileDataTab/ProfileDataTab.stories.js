import { ProfileDataTab } from "./ProfileDataTab";

export default {
  title: "Pages/Profile/Tabs/ProfileDataTab",
  component: ProfileDataTab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const ProfileDataTabDemo = {
  args: {
    user: {
      first_name: "Иван",
      last_name: "Иванов",
      birth_date: "08.09.1992",
      phone: "+79111002030",
      email: "pochta@mail.ru",
      occupation: "дизайнер",
    },
  },
};
