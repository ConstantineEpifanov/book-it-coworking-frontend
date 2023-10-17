import React from "react";
import PropTypes from "prop-types";
import "./PromoItem.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";

export const PromoItem = ({ title, subtitle }) => (
  <div className="promo-item">
    <SectionTitle titleText={title} />
    <SectionSubtitle titleClass="section-subtitle_promo" titleText={subtitle} />
  </div>
);
PromoItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

PromoItem.defaultProps = {
  title: undefined,
  subtitle: undefined,
};
