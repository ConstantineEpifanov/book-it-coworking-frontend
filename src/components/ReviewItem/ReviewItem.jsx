import React from "react";
import PropTypes from "prop-types";
import "./ReviewItem.scss";
import { PointRating } from "../UI-kit/PointRating/PointRating";

export const ReviewItem = ({ author, date, text, rating }) => (
  <div className="review-item">
    <div className="review-item__container">
      <h3 className="review-item__author">{author}</h3>
      <p className="review-item__date">{date}</p>
      <p className="review-item__text">{text}</p>
    </div>
    <PointRating rating={rating} />
  </div>
);
ReviewItem.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
};

ReviewItem.defaultProps = {
  author: undefined,
  date: undefined,
  text: undefined,
  rating: undefined,
};
