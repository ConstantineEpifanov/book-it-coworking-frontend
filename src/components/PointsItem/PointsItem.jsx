/* eslint-disable camelcase */
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
import { addFavorite, deleteFavorite } from "../../utils/Api";

export const PointsItem = ({
  id,
  isCompact,
  isListed,
  rating,
  name,
  short_annotation,
  open_time,
  close_time,
  low_price,
  count_workspace,
  count_meeting_room,
  description,
  main_photo,
  extra_photo,
  get_full_address_str,
  metro,
  days_open,
  is_favorited,
}) => {
  const [isLiked, setLiked] = useState(is_favorited);
  const photos = [{ image: main_photo, id: 0 }, ...extra_photo];
  const time = `${days_open} с ${open_time} до ${close_time}`;

  function handleAddFavorite() {
    addFavorite(id)
      .then(() => {
        setLiked(!isLiked);
      })
      .catch((err) => new Error(err));
  }

  function handleDeleteFavorite() {
    deleteFavorite(id)
      .then(() => {
        setLiked(!isLiked);
      })
      .catch((err) => new Error(err));
  }

  function onLikeClick() {
    if (isLiked) {
      handleDeleteFavorite();
    } else {
      handleAddFavorite();
    }
  }

  SwiperCore.use([Pagination]);

  // const handleLike = () => {
  //   setLiked(!isLiked);
  // };

  const handleShare = () => {};

  return isCompact ? (
    // Маленькая карточка для главной страницы

    <div className="point">
      <div className="point__image-container">
        <img src={main_photo} alt={name} className="point__image" />
        <p className="point__cost">От {low_price}&#8381;/час</p>
        <PointRating rating={rating} optionalClass="point-rating_on-image" />
      </div>
      <div className="point__info-container">
        <div className="point__title-container">
          <h3 className="point__title">{name}</h3>
          <button
            type="button"
            className="point__action-button"
            onClick={onLikeClick}
            aria-labelledby="Добавить в избранное"
          >
            <LikeButton isLiked={isLiked} />
          </button>
        </div>
        <ul className="point__info">
          <li className="point__list-item">
            <Address />
            <p className="point__info-text">{get_full_address_str}</p>
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
          loop
          pagination={{
            el: ".swiper-pagination-points",
            type: "bullets",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
        >
          {photos.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt={name}
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
          От {low_price}&#8381;/час
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
              onClick={onLikeClick}
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
              <h3 className="point__title">{name}</h3>
              <button
                type="button"
                className="point__action-button"
                onClick={onLikeClick}
                aria-labelledby="Добавить в избранное"
              >
                <LikeButton isLiked={isLiked} />
              </button>
            </div>
            <div className="point__subtitle-container">
              <h4 className="point__subtitle">{short_annotation}</h4>
              <button
                type="button"
                className="point__action-button"
                onClick={handleShare}
                aria-labelledby="Поделиться"
              >
                <Share />
              </button>
            </div>
            <p className="point__about">{description}</p>
          </div>
        )}
        <ul className="point__info point__info_large">
          <li className="point__list-item">
            <Address />
            <p className="point__info-text">{get_full_address_str}</p>
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
              <span className="point__span"> {count_workspace}</span>
            </p>
          </li>
          <li className="point__list-item">
            <MeetingRoom />
            <p className="point__info-text">
              Переговорных:
              <span className="point__span"> {count_meeting_room}</span>
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
  id: PropTypes.number,
  isCompact: PropTypes.bool,
  isListed: PropTypes.bool,
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
  is_favorited: PropTypes.bool,
};

PointsItem.defaultProps = {
  id: undefined,
  rating: undefined,
  name: undefined,
  short_annotation: undefined,
  description: undefined,
  main_photo: undefined,
  extra_photo: [{ id: undefined, image: undefined }],
  get_full_address_str: undefined,
  metro: undefined,
  days_open: undefined,
  open_time: undefined,
  close_time: undefined,
  low_price: undefined,
  count_workspace: undefined,
  count_meeting_room: undefined,
  isCompact: false,
  isListed: false,
  is_favorited: false,
};
