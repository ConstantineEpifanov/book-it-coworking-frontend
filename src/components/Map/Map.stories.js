import { MainMap } from "./Map";
import spotImage from "../../images/dummy-spot.jpg";

export default {
  title: "Components/Map",
  component: MainMap,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

const points = [
  {
    coordinates: [59.89, 30.29],
    id: 1,
    rating: 4,
    name: "Московский",
    extra_photo: [{ image: spotImage }],
    get_full_address_str: "г. Санкт-Петербург, Кантемировская улица, 22",
  },
  {
    coordinates: [59.91, 30.31],
    id: 2,
    rating: 5,
    name: "Питерский",
    extra_photo: [{ image: spotImage }],
    get_full_address_str: "г. Санкт-Петербург, Невская 1",
  },
];
const defaultState = {
  center: [59.9, 30.3],
  zoom: 13,
  controls: ["zoomControl", "fullscreenControl"],
};

export const MapDemo = () => (
  <MainMap isActive points={points} defaultState={defaultState} />
);
