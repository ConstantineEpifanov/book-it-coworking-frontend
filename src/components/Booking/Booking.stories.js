import { Booking } from "./Booking";
import { locationData } from "../../config/exampleBookingData";

export default {
  title: "Pages/Booking",
  component: Booking,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    location: {
      description: "Данные коворкинга",
    },
  },
};

export const Example = () => <Booking location={locationData} />;
