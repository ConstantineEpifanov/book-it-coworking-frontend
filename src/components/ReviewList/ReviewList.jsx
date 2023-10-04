import React from "react";
import PropTypes from "prop-types";
import "./ReviewList.scss";
import { PointRating } from "../UI-kit/PointRating/PointRating";
import { ReviewItem } from "../ReviewItem/ReviewItem";
import Button from "../UI-kit/Button/Button";

export const ReviewList = ({ reviews, pointRating }) => (
  <div className="review-list">
    <div className="review-list__container">
      <PointRating rating={pointRating} />
      <div className="review-list__length-container">
        <p className="review-list__text">Отзывов:&nbsp;</p>
        <p className="review-list__length">{reviews?.length}</p>
      </div>
    </div>
    <ul className="review-list__items">
      {reviews?.map((item) => (
        <li>
          <ReviewItem
            author={item.author}
            date={item.date}
            text={item.text}
            rating={item.rating}
          />
        </li>
      ))}
    </ul>
    <Button
      btnClass="button_type_transparent button_size_medium"
      btnText="Ещё"
    />
  </div>
);

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf,
  pointRating: PropTypes.number,
};

ReviewList.defaultProps = {
  reviews: undefined,
  pointRating: undefined,
};
