import { FavoritesTab } from "./FavoritesTab";
import SpotPhoto from "../../images/dummy-spot2.jpg";

export default {
  title: "Pages/Profile/Tabs/FavoritesTab",
  component: FavoritesTab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const FavoritesTabDemo = {
  args: {
    favorites: [
      {
        id: "1",
        street: "г. Санкт-Петербург, ул. Льва Толстого, 1-3",
        name: "Особняк",
        rating: 4.8,
        image: SpotPhoto,
      },
      {
        id: "2",
        street: "г. Санкт-Петербург, ул. Льва Толстого, 1-3",
        name: "У моря",
        rating: 4.9,
        image: SpotPhoto,
      },
    ],
  },
};
