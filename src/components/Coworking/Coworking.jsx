import React from "react";
import PropTypes from "prop-types";

import { PointsItem } from "../PointsItem/PointsItem";
import { EquipmentList } from "../EquipmentList/EquipmentList";
import { ReviewList } from "../ReviewList/ReviewList";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import "./Coworking.scss";

export const Coworking = ({ coworking, equipment, reviews }) => (
  <main className="coworking" aria-label="страница коворкинга">
    <SectionTitle titleText={coworking.title} />
    <h2 className="coworking__subtitle">{coworking.subtitle} </h2>
    <PointsItem
      rating={coworking.rating}
      time={coworking.time}
      generalQuantity={coworking.generalQuantity}
      meetingQuantity={coworking.meetingQuantity}
      photoArray={coworking.photoArray}
      address={coworking.address}
      metro={coworking.metro}
      cost={coworking.cost}
    />
    <section className="coworking__section">
      <h3 className="coworking__section-title">Описание</h3>
      <p className="coworking__section-text">{coworking.about}</p>
    </section>
    <section className="coworking__section">
      <h3 className="coworking__section-title">Удобства в этом коворкинге</h3>
      <EquipmentList equipment={equipment} />
    </section>
    <section className="coworking__section">
      <h3 className="coworking__section-title">Отзывы</h3>
      <ReviewList reviews={reviews} pointRating={coworking.rating} />
    </section>
  </main>
);

Coworking.propTypes = {
  coworking: PropTypes.arrayOf,
  equipment: PropTypes.arrayOf,
  reviews: PropTypes.arrayOf,
};

Coworking.defaultProps = {
  coworking: undefined,
  equipment: undefined,
  reviews: undefined,
};
