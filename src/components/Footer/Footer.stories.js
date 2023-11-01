import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  decorators: [(Story) => <Router>{Story()}</Router>],
};

export const FooterDemo = () => <Footer />;
