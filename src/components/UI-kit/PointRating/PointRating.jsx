import React from "react";
import PropTypes from "prop-types";
import "./PointRating.scss";

export const PointRating = ({ rating, optionalClass }) => (
  <div className={`point-rating ${optionalClass}`}>
    <p className="point-rating__number">{rating}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#b0ff1a"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="#b0ff1a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

PointRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  optionalClass: PropTypes.string,
};

PointRating.defaultProps = {
  rating: undefined,
  optionalClass: undefined,
};
