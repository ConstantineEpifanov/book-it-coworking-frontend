import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../utils/utils";
import "./ReviewItem.scss";
import { PointRating } from "../UI-kit/PointRating/PointRating";
import imgProfile from "../../images/profile-icons/profile-icon-header.svg";

export const ReviewItem = ({ author, date, text, rating, image }) => (
  <>
    <div className="review-item__container">
      <div className="review-item__author-container">
        <img
          src={image ?? imgProfile}
          className="review-item__image"
          alt="Изображение профиля"
        />
        <h4 className="review-item__author">{author}</h4>
      </div>
      <p className="review-item__date">{formatDate(date)}</p>
      <p className="review-item__text">{text}</p>
    </div>
    <div className="review-item__rating-container">
      <PointRating rating={rating} />
    </div>
  </>
);
ReviewItem.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
};

ReviewItem.defaultProps = {
  author: undefined,
  date: undefined,
  text: undefined,
  rating: undefined,
  image: undefined,
};
