import React from "react";
import PropTypes from "prop-types";
import "./PromoItem.scss";

export const PromoItem = ({ title, subtitle }) => (
  <div className="promo-item">
    <h2 className="promo-item__title">{title}</h2>
    <h3 className="promo-item__subtitle">{subtitle}</h3>
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
