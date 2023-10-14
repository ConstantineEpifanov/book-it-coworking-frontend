import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FavoritesTab } from "./FavoritesTab";

export default {
  title: "Pages/Profile/Tabs/FavoritesTab",
  component: FavoritesTab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [(Story) => <Router>{Story()}</Router>],
};

export const FavoritesTabDemo = () => <FavoritesTab />;
