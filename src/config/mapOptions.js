import spotImage from "../images/dummy-spot.jpg";

const points = [
  {
    coordinates: [59.89, 30.29],
    id: 1,
    rating: "4",
    name: "Московский",
    link: "/",
    image: spotImage,
    address: "г. Санкт-Петербург, Кантемировская улица, 22",
  },
  {
    coordinates: [59.91, 30.31],
    id: 2,
    rating: "4",
    name: "Питерский",
    link: "/",
    image: spotImage,
    address: "г. Санкт-Петербург, Невская 1",
  },
];

const defaultState = {
  center: [59.9, 30.3],
  zoom: 11,
  controls: ["zoomControl", "fullscreenControl"],
};

export { points, defaultState };
