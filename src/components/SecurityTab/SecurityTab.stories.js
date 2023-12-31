import { SecurityTab } from "./SecurityTab";

export default {
  title: "Pages/Profile/Tabs/SecurityTab",
  component: SecurityTab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const SecurityTabDemo = () => <SecurityTab />;
