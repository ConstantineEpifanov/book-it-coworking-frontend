import { examplePlaceData } from "../../config/examplePlaceData";
import Payments from "./Payments";

export default {
  title: "Pages/Payments",
  component: Payments,
  // tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const PaymentsDemo = () => <Payments place={examplePlaceData} />;
