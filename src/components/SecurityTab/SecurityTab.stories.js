import { SecurityTab } from "./SecurityTab";

export default {
  title: "Profile/SecurityTab",
  component: SecurityTab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const SecurityTabDemo = {
  args: {
    user: {
      password: "qwerty12345",
      sessions: [],
    },
  },
};
