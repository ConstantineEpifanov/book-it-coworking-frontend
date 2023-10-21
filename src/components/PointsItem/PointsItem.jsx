/* eslint-disable camelcase */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

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
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { SUCCESSFUL_DISLIKE, SUCCESSFUL_LIKE } from "../../utils/constants";

SwiperCore.use([Pagination]);

export const PointsItem = ({ isCompact, isListed, data }) => {
  const [isLiked, setLiked] = useState(data.is_favorited);
  const { showMessage } = useContext(CurrentUserContext);

  const navigate = useNavigate();
  const time = `${data.days_open} ${data.open_time}–${data.close_time}`;

  // Добавить в избранное
  function handleAddFavorite() {
    addFavorite(data.id)
      .then(() => {
        setLiked(!isLiked);
        showMessage(SUCCESSFUL_LIKE);
      })
      .catch((err) => showMessage(err.detail));
  }

  // Удалить из избранного
  function handleDeleteFavorite() {
    deleteFavorite(data.id)
      .then(() => {
        setLiked(!isLiked);
        showMessage(SUCCESSFUL_DISLIKE);
      })
      .catch((err) => showMessage(err.detail));
  }

  function onLikeClick() {
    if (isLiked) {
      handleDeleteFavorite();
    } else {
      handleAddFavorite();
    }
  }

  // Поделиться страницей коворкинга
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Коворкинг ${data.name}`,
          text: "Забронируйте место в лучшем коворкинге для IT-специалистов",
          url: isListed ? window.location.href + data.id : window.location.href,
        })
        .then(() => showMessage("Получилось поделиться", "info"))
        .catch((error) => showMessage(error, "error"));
    } else {
      navigator.clipboard
        .writeText(
          isListed ? window.location.href + data.id : window.location.href,
        )
        .then(() => showMessage("Ссылка скопирована в буфер обмена", "info"));
    }
  };

  // Переход на страницу коворкинга
  const handleDetailsButton = () => {
    navigate(`/points/${data.id}`, { replace: false });
  };

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        id: data.id,
        openTime: data.open_time,
        closeTime: data.close_time,
        daysOpen: data.days_open,
      },
      replace: false,
    });
  };

  // Компактная карточка для главной страницы
  const compactCard = () => (
    <div className="point">
      <div className="point__image-container">
        <img
          loading="lazy"
          src={data.main_photo}
          alt={data.name}
          className="point__image"
        />
        <p className="point__cost">От {data.low_price}&#8381;/час</p>
        <PointRating
          rating={data.rating?.toFixed(1)}
          optionalClass="point-rating_on-image"
        />
      </div>
      <div className="point__info-container">
        <div className="point__title-container">
          <h3 className="point__title">{data.name}</h3>
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
            <p className="point__info-text">{data.get_full_address_str}</p>
          </li>
          <li className="point__list-item">
            <Metro />
            <p className="point__info-text">{data.metro}</p>
          </li>
        </ul>

        <Button
          btnClass="button_type_form button_size_postmiddle"
          btnText="Подробнее"
          onClick={handleDetailsButton}
        />
      </div>
    </div>
  );

  // Большая карточка для страницы коворкингов и страницы с подробностями
  const largeCard = () => {
    const photos = [{ image: data.main_photo, id: 0 }, ...data.extra_photo];

    return (
      <div className={`point point_large ${!isListed && "point_own-page"}`}>
        <div
          className={`point__image-container point__image-container_large ${
            !isListed && "point__image-container_own-page"
          } `}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
                  loading="lazy"
                  src={item.image}
                  alt={data.name}
                  className={`point__image point__image_large ${
                    !isListed && "point__image_own-page"
                  } `}
                />
              </SwiperSlide>
            ))}
            <div
              className="swiper-pagination-points"
              style={{
                bottom: "35px",
                left: "60%",
              }}
            />
          </Swiper>
          <p
            className={`point__cost z-index-2 ${
              !isListed && "point__cost_own-page"
            } `}
          >
            От {data.low_price}&#8381;/час
          </p>
          <PointRating
            rating={data.rating?.toFixed(1)}
            optionalClass={`point-rating_on-image ${
              !isListed && "point__rating-container_own-page"
            } `}
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
        </div>
        {/* конец блока */}

        <div className="point__info-container">
          {isListed && (
            <div>
              <div className="point__title-container">
                <h3 className="point__title">{data.name}</h3>
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
                <p className="point__about">{data.description}</p>
                <button
                  type="button"
                  className="point__action-button"
                  onClick={handleShare}
                  aria-labelledby="Поделиться"
                >
                  <Share />
                </button>
              </div>
            </div>
          )}
          <ul className="point__info point__info_large">
            <li className="point__list-item">
              <Address />
              <p className="point__info-text">{data.get_full_address_str}</p>
            </li>
            <li className="point__list-item">
              <Metro />
              <p className="point__info-text">{data.metro}</p>
            </li>
            <li className="point__list-item">
              <Time />
              <p className="point__info-text">{time}</p>
            </li>
            <li className="point__list-item">
              <GeneralRoom />
              <p className="point__info-text">
                Мест в общей зоне:
                <span className="point__span"> {data.count_workspace}</span>
              </p>
            </li>
            <li className="point__list-item">
              <MeetingRoom />
              <p className="point__info-text">
                Переговорных:
                <span className="point__span"> {data.count_meeting_room}</span>
              </p>
            </li>
          </ul>
          <div className="point__buttons">
            <Button
              btnClass="button_type_form button_size_middle"
              btnText="Забронировать место"
              onClick={handleBooking}
            />
            {isListed && (
              <Button
                btnClass="button_type_transparent button_size_middle"
                btnText="Подробнее"
                onClick={handleDetailsButton}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return isCompact ? compactCard() : largeCard();
};

PointsItem.propTypes = {
  isCompact: PropTypes.bool,
  isListed: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.number,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  }),
};

PointsItem.defaultProps = {
  isCompact: false,
  isListed: false,
  data: {
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
    is_favorited: false,
  },
};
