import Contacts from "./Contacts";

export default {
  title: "Pages/Contacts",
  component: Contacts,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const ContactsDemo = () => <Contacts />;
