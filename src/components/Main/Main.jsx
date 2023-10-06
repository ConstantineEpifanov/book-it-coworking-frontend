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
  coworkingsArray: PropTypes.arrayOf(
    PropTypes.shape({
      isCompact: PropTypes.bool,
      isListed: PropTypes.bool,
      rating: PropTypes.number,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      about: PropTypes.string,
      openTime: PropTypes.number,
      closeTime: PropTypes.number,
      lowPrice: PropTypes.number,
      mainPhoto: PropTypes.string,
      extraPhoto: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          url: PropTypes.string,
        }),
      ),
      address: PropTypes.string,
      metro: PropTypes.string,
      generalQuantity: PropTypes.number,
      meetingQuantity: PropTypes.number,
    }),
  ),
  eventsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      address: PropTypes.string,
      meetingQuantity: PropTypes.number,
      url: PropTypes.string,
      date: PropTypes.string.isRequired,
    }),
  ),
};

Main.defaultProps = {
  coworkingsArray: undefined,
  eventsArray: undefined,
};
