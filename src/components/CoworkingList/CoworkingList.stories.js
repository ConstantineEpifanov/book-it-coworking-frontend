import { exampleCoworkingsData } from "../../config/exampleCoworkingsData";
import { CoworkingList } from "./CoworkingList";

export default {
  title: "Pages/CoworkingList",
  component: CoworkingList,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Example = {
  args: {
    data: exampleCoworkingsData,
  },
};
