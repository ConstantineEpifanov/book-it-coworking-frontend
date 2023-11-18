import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    profileInfo: {
      description: "Информация о авторизованном пользователе",
    },
    isLoggedIn: {
      description: "авторизация пользователя",
    },
  },
  // данная настройка необходима для корректной работы роутеров в сторибук
  decorators: [(Story) => <Router>{Story()}</Router>],
};

export const LoggedIn = {
  args: {
    isLoggedIn: true,
  },
};
