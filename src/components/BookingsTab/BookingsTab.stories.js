import { BookingsTab } from "./BookingsTab";
import SpotPhoto from "../../images/dummy-spot2.jpg";

export default {
  title: "Pages/Profile/Tabs/BookingsTab",
  component: BookingsTab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const BookingsTabDemo = {
  args: {
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
        isFinished: false,
        status: "Confirmed",
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
        isFinished: true,
      },
    ],
  },
};
