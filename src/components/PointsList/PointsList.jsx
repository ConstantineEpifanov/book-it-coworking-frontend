import React from "react";
import PropTypes from "prop-types";

import { PointsItem } from "../PointsItem/PointsItem";
import Button from "../UI-kit/Button/Button";
import "./PointsList.scss";

export const PointsList = ({ isCompact, isListed, coworkingsArray }) => (
  <div className="points-list-container">
    <ul className={`points-list ${isCompact && "points-list_compact"}`}>
      {coworkingsArray?.map((item) => (
        <li key={item.id}>
          <PointsItem isListed={isListed} isCompact={isCompact} data={item} />
        </li>
      ))}
    </ul>
    {coworkingsArray && (
      <Button
        btnClass="button_more button_type_transparent button_size_large"
        btnText="Больше локаций"
      />
    )}
  </div>
);

PointsList.propTypes = {
  coworkingsArray: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number,
      name: PropTypes.string,
      short_annotation: PropTypes.string,
      description: PropTypes.string,
      days_open: PropTypes.string,
      open_time: PropTypes.string,
      close_time: PropTypes.string,
      low_price: PropTypes.number,
      main_photo: PropTypes.string,
      extra_photo: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          image: PropTypes.string,
        }),
      ),
      get_full_address_str: PropTypes.string,
      metro: PropTypes.string,
      count_workspace: PropTypes.number,
      count_meeting_room: PropTypes.number,
    }),
  ),
  isCompact: PropTypes.bool,
  isListed: PropTypes.bool,
};

PointsList.defaultProps = {
  coworkingsArray: undefined,
  isCompact: false,
  isListed: false,
};
