import { MainMap } from "./Map";

export default {
  title: "Components/Map",
  component: MainMap,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const MapDemo = () => <MainMap isActive />;
