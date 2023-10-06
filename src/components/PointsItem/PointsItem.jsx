import React, { useState } from "react";
import PropTypes from "prop-types";

import "./PointsItem.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import Button from "../UI-kit/Button/Button";
import { PointRating } from "../UI-kit/PointRating/PointRating";
import { LikeButton } from "./icons/LikeButton";
import { Address } from "./icons/Address";
import { Metro } from "./icons/Metro";
import { GeneralRoom } from "./icons/GeneralRoom";
import { Time } from "./icons/Time";
import { MeetingRoom } from "./icons/MeetingRoom";
import { Share } from "./icons/Share";

SwiperCore.use([Pagination]);

export const PointsItem = ({
  isCompact,
  isListed,
  rating,
  title,
  subtitle,
  openTime,
  closeTime,
  lowPrice,
  generalQuantity,
  meetingQuantity,
  about,
  mainPhoto,
  extraPhoto,
  address,
  metro,
}) => {
  const [isLiked, setLiked] = useState(false);
  const photos = [{ url: mainPhoto }, ...extraPhoto];
  const time = `с ${openTime} до ${closeTime}`;

  const handleLike = () => {
    setLiked(!isLiked);
  };

  const handleShare = () => {};

  return isCompact ? (
    // Маленькая карточка для главной страницы

    <div className="point">
      <div className="point__image-container">
        <img src={mainPhoto} alt={title} className="point__image" />
        <p className="point__cost">От {lowPrice}&#8381;/час</p>
        <PointRating rating={rating} optionalClass="point-rating_on-image" />
      </div>
      <div className="point__info-container">
        <div className="point__title-container">
          <h3 className="point__title">{title}</h3>
          <button
            type="button"
            className="point__action-button"
            onClick={handleLike}
            aria-labelledby="Добавить в избранное"
          >
            <LikeButton isLiked={isLiked} />
          </button>
        </div>
        <ul className="point__info">
          <li className="point__list-item">
            <Address />
            <p className="point__info-text">{address}</p>
          </li>
          <li className="point__list-item">
            <Metro />
            <p className="point__info-text">{metro}</p>
          </li>
        </ul>

        <Button
          btnClass="button_type_transparent button_size_postmiddle"
          btnText="Подробнее"
        />
      </div>
    </div>
  ) : (
    // Большая карточка для страницы коворкингов и переменной isListed когда карточка в списка, а не на странице отдельной

    <div className={`point point_large ${!isListed && "point_own-page"}`}>
      <div
        className={`point__image-container point__image-container_large ${
          !isListed && "point__image-container_own-page"
        }`}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            el: ".swiper-pagination-points",
            type: "bullets",
            dynamicBullets: true,
            dynamicMainBullets: 2,
            clickable: true,
          }}
          observeParents
        >
          {photos.map((item) => (
            <SwiperSlide>
              <img
                src={item.url}
                alt={title}
                className={`point__image point__image_large ${
                  !isListed && "point__image_own-page"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <p
          className={`point__cost z-index-2 ${
            !isListed && "point__cost_own-page"
          }`}
        >
          От {lowPrice}&#8381;/час
        </p>

        <PointRating
          rating={rating}
          optionalClass={`point-rating_on-image ${
            !isListed && "point__rating-container_own-page"
          }`}
        />

        {/* блок кнопок для страницы коворкинга */}
        {!isListed && (
          <div className="point__info-buttons z-index-2">
            <button
              type="button"
              className="point__action-button"
              onClick={handleLike}
              aria-labelledby="Добавить в избранное"
            >
              <LikeButton isLiked={isLiked} />
            </button>
            <button
              type="button"
              className="point__action-button"
              onClick={handleShare}
              aria-labelledby="Поделиться"
            >
              <Share />
            </button>
          </div>
        )}

        <div className="swiper-pagination-points" />
      </div>

      <div className="point__info-container">
        {isListed && (
          <div>
            <div className="point__title-container">
              <h3 className="point__title">{title}</h3>
              <button
                type="button"
                className="point__action-button"
                onClick={handleLike}
                aria-labelledby="Добавить в избранное"
              >
                <LikeButton isLiked={isLiked} />
              </button>
            </div>
            <div className="point__subtitle-container">
              <h4 className="point__subtitle">{subtitle}</h4>
              <button
                type="button"
                className="point__action-button"
                onClick={handleShare}
                aria-labelledby="Поделиться"
              >
                <Share />
              </button>
            </div>
            <p className="point__about">{about}</p>
          </div>
        )}
        <ul className="point__info point__info_large">
          <li className="point__list-item">
            <Address />
            <p className="point__info-text">{address}</p>
          </li>
          <li className="point__list-item">
            <Metro />
            <p className="point__info-text">{metro}</p>
          </li>
          <li className="point__list-item">
            <Time />
            <p className="point__info-text">{time}</p>
          </li>
          <li className="point__list-item">
            <GeneralRoom />
            <p className="point__info-text">
              Мест в общей зоне:
              <span className="point__span"> {generalQuantity}</span>
            </p>
          </li>
          <li className="point__list-item">
            <MeetingRoom />
            <p className="point__info-text">
              Переговорных:
              <span className="point__span"> {meetingQuantity}</span>
            </p>
          </li>
        </ul>
        <div className="point__buttons">
          <Button
            btnClass="button_type_form button_size_middle"
            btnText="Забронировать место"
          />
          {isListed && (
            <Button
              btnClass="button_type_transparent button_size_middle"
              btnText="Подробнее"
            />
          )}
        </div>
      </div>
    </div>
  );
};

PointsItem.propTypes = {
  isCompact: PropTypes.bool,
  isListed: PropTypes.bool,
  rating: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  about: PropTypes.string,
  openTime: PropTypes.number,
  closeTime: PropTypes.number,
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
  generalQuantity: PropTypes.number,
  meetingQuantity: PropTypes.number,
};

PointsItem.defaultProps = {
  rating: undefined,
  title: undefined,
  subtitle: undefined,
  about: undefined,
  mainPhoto: undefined,
  extraPhoto: [{ id: undefined, url: undefined }],
  address: undefined,
  metro: undefined,
  openTime: undefined,
  closeTime: undefined,
  lowPrice: undefined,
  generalQuantity: undefined,
  meetingQuantity: undefined,
  isCompact: false,
  isListed: false,
};
