import React, { useState } from "react";
import PropTypes from "prop-types";

import "./PointsItem.scss";
import Button from "../UI-kit/Button/Button";
import { RatingStar } from "./icons/RatingStar";
import { LikeButton } from "./icons/LikeButton";
import { Address } from "./icons/Address";
import { Metro } from "./icons/Metro";

export const PointsItem = ({
  isCompact,
  rating,
  title,
  photo,
  address,
  metro,
}) => {
  const [isLiked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!isLiked);
  };
  return isCompact ? (
    <div className="point">
      <div className="point__image-container">
        <img src={photo} alt={title} className="point__image" />
        <p className="point__cost">От 200&#8381;/час</p>
        <div className="point__rating-container">
          <p className="point__rating">{rating}</p>
          <RatingStar />
        </div>
      </div>
      <div className="point__info-container">
        <div className="point__title-container">
          <h3 className="point__title">{title}</h3>
          <button
            type="button"
            className="point__like-button"
            onClick={handleLike}
            aria-labelledby="Добавить в избранное"
          >
            <LikeButton isLiked={isLiked} />
          </button>
        </div>
        <div className="point__address">
          <Address />
          <p className="point__address-text">{address}</p>
          <Metro />
          <p className="point__address-text">{metro}</p>
        </div>

        <Button
          btnClass="button_type_transparent button_size_postmiddle"
          btnText="Подробнее"
        />
      </div>
    </div>
  ) : (
    <div className="point" />
  );
};

PointsItem.propTypes = {
  isCompact: PropTypes.bool,
  rating: PropTypes.string,
  title: PropTypes.string,
  photo: PropTypes.string,
  address: PropTypes.string,
  metro: PropTypes.string,
};

PointsItem.defaultProps = {
  rating: undefined,
  title: undefined,
  photo: undefined,
  address: undefined,
  metro: undefined,
  isCompact: true,
};
