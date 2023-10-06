import React from "react";
import PropTypes from "prop-types";
import "./Main.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
// import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
import { Promo } from "../Promo/Promo";
import { Discounts } from "../Discounts/Discounts";
import { Events } from "../Events/Events";
// import SearchForm from "../Forms/SearchForm/SearchForm";
// import Button from "../UI-kit/Button/Button";

export const Main = ({ coworkingsArray, eventsArray }) => (
  <main className="main">
    <Promo />
    <section className="main__coworkings">
      <SectionTitle
        titleClass="section-title_margin-to-block"
        titleText="Наши коворкинги"
      />
      <PointsList isCompact data={coworkingsArray} />
    </section>
    <Discounts />
    <Events eventsArray={eventsArray} />
  </main>
);

Main.propTypes = {
  coworkingsArray: PropTypes.arrayOf,
  eventsArray: PropTypes.arrayOf,
};

Main.defaultProps = {
  coworkingsArray: undefined,
  eventsArray: undefined,
};
