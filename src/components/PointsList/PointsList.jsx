import React from "react";
import PropTypes from "prop-types";

import { PointsItem } from "../PointsItem/PointsItem";
import Button from "../UI-kit/Button/Button";
import "./PointsList.scss";

export const PointsList = ({ isCompact, isListed, data }) => (
  <div className="points-list-container">
    <ul className={`points-list ${isCompact && "points-list_compact"}`}>
      {data?.map((item) => (
        <li key={item.id}>
          <PointsItem isListed={isListed} isCompact={isCompact} {...item} />
        </li>
      ))}
    </ul>
    {data && (
      <Button
        btnClass="button_more button_type_transparent button_size_large"
        btnText="Больше локаций"
      />
    )}
  </div>
);

PointsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      about: PropTypes.string,
      rating: PropTypes.string,
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
      openTime: PropTypes.number,
      closeTime: PropTypes.number,
      generalQuantity: PropTypes.number,
      meetingQuantity: PropTypes.number,
    }),
  ),
  isCompact: PropTypes.bool,
  isListed: PropTypes.bool,
};

PointsList.defaultProps = {
  data: undefined,
  isCompact: false,
  isListed: false,
};
