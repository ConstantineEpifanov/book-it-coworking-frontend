import { BookingsCard } from "./BookingsCard";
import SpotPhoto from "../../images/dummy-spot2.jpg";

export default {
  title: "Pages/Profile/Tabs/BookingsTab/BookingsCard",
  component: BookingsCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const BookingsCardDemo = {
  args: {
    item: {
      id: "1",
      spot: {
        name: "Парк",
        image: SpotPhoto,
      },
      date: "6 сентября 2023",
      start_time: "12:00",
      end_time: "13:00",
      bill: 200,
      isFinished: false,
      status: "Processing",
    },
  },
};
