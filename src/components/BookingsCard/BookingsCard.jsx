/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  ORDER_STATUSES,
  MAX_REVIEW_CHARACTERS_NUMBER,
} from "../../utils/constants";
import { publishReview, cancelOrder } from "../../utils/Api";
import { formatDate } from "../../utils/utils";

import usePopupOpen from "../../hooks/usePopupOpen";

import ReviewsForm from "../Forms/ReviewsForm/ReviewsForm";

import Button from "../UI-kit/Button/Button";
import Popup from "../Popup/Popup";
import StarRating from "../UI-kit/StarRating/StarRating";

import ClockIcon from "../../images/profile-icons/time.svg";
import CardIcon from "../../images/profile-icons/card.svg";

import "./BookingsCard.scss";

const getStatusLabel = (status, className) => (
  <span className={`bookings-card__status bookings-card__status_${className}`}>
    {status}
  </span>
);

const statusLabels = {
  [ORDER_STATUSES.WAIT_PAY]: getStatusLabel(ORDER_STATUSES.WAIT_PAY, "warn"),
  [ORDER_STATUSES.PAID]: getStatusLabel(ORDER_STATUSES.PAID, "success"),
  [ORDER_STATUSES.FINISH]: getStatusLabel(ORDER_STATUSES.FINISH, "main"),
  [ORDER_STATUSES.CANCEL]: getStatusLabel(ORDER_STATUSES.CANCEL, "alert"),
  [ORDER_STATUSES.NOT_PAID]: getStatusLabel(ORDER_STATUSES.NOT_PAID, "warn"),
};

export const BookingsCard = ({ item }) => {
  const { isOpenPopup, handleOpenPopup, handleClosePopup } = usePopupOpen();
  const [isCancellationConfirmed, setIsCancellationConfirmed] = useState(false);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [serverError, setServerError] = useState(null);
  // const [reviewText, setReviewText] = useState("");
  // const [reviewRating, setReviewRating] = useState(0);

  console.log(item.reviews);

  const handleCloseBookingPopup = () => {
    handleClosePopup();
    setIsCancellationConfirmed(false);
    setIsReviewFormOpen(false);
    setServerError(null);
  };

  const handleConfirmCancellation = () => {
    cancelOrder(item.location_id, item.spot, item.id).finally(() => {
      setIsCancellationConfirmed(true);
    });
  };

  const handleOpenReviewForm = () => {
    setIsReviewFormOpen(true);
    handleOpenPopup();
  };

  // const handleReviewTextChange = (e) => {
  //   const newText = e.target.value;
  //   setReviewText(newText);
  // };

  // const handleRatingChange = (rating) => {
  //   setReviewRating(rating);
  // };

  const handleReviewSubmit = (data) => {
    setServerError(null);
    publishReview(item.location_id, item.spot, item.id, data)
      .then(() => handleClosePopup())
      .catch((e) => {
        // eslint-disable-next-line no-underscore-dangle
        console.log(e.booked_spot[0]);
        setServerError(e.booked_spot[0]);
      })
      .finally(() => {});
  };

  const getPopupText = (booking) => {
    if (booking.status === ORDER_STATUSES.PAID) {
      return `Бронирование уже оплачено.`;
    }
    if (booking.status === ORDER_STATUSES.WAIT_PAY || ORDER_STATUSES.NOT_PAID) {
      return `Бронирование еще находится в обработке.`;
    }
    return "Отменить бронирование";
  };

  let content;
  if (isCancellationConfirmed) {
    content = (
      <>
        <p className="bookings-card__popup-text bookings-card__popup-text_type_long">
          Бронирование «{item.location_name.toUpperCase()} с {item.start_time}{" "}
          до {item.end_time}» отменено.
          <br /> Мы отправим вам подтверждение на почту и вернем предоплату.
        </p>
        <p className="bookings-card__popup-text">
          Хотите создать бронирование на другую дату?
        </p>
        <div className="bookings-card__button-container">
          <Button
            btnText="Назад"
            btnClass="button__profile-transparent"
            onClick={handleCloseBookingPopup}
          />
          <Button
            btnText="Создать"
            btnClass="button__profile-edit"
            onClick={handleOpenReviewForm}
          />
        </div>
      </>
    );
  } else if (isReviewFormOpen) {
    content = (
      <ReviewsForm onSubmit={handleReviewSubmit} serverError={serverError} />
    );
  } else {
    content = (
      <>
        <p className="bookings-card__popup-text">
          {getPopupText(item)}
          <br />
          Вы уверены, что хотите отменить его?
        </p>
        <div className="bookings-card__button-container">
          <Button
            btnText="Назад"
            btnClass="button__profile-transparent"
            onClick={handleCloseBookingPopup}
          />
          <Button
            btnText="Отменить"
            btnClass="button__profile-edit"
            onClick={handleConfirmCancellation}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <li className="bookings-card" key={item.id}>
        <img
          className="bookings-card__image"
          src={item?.location_photo}
          alt={item.location_name}
        />
        <div className="bookings-card__text-container">
          <h3 className="bookings-card__name">{item.location_name}</h3>
          <div className="bookings-card__status">
            {statusLabels[item.status]}
          </div>

          <div className="bookings-card__date-row">
            <img src={ClockIcon} alt="Иконка часов" />
            <div className="bookings-card__date-container">
              <p className="bookings-card__date">{formatDate(item.date)}</p>
              <p className="bookings-card__date">
                {item.start_time}-{item.end_time}
              </p>
            </div>
            <div className="bookings-card__price-container">
              <img src={CardIcon} alt="Иконка платежной карты" />
              <span className="bookings-card__price">{item.bill} ₽</span>
            </div>
          </div>
          {item.isFinished ? (
            <Button
              btnText={
                item.reviews === null ? "Оставить отзыв" : "Отзыв оставлен"
              }
              btnClass="button__profile-bookings"
              onClick={handleOpenReviewForm}
              isValidBtn={item.reviews === null}
            />
          ) : (
            <Button
              btnText="Отменить"
              btnClass="button__profile-bookings"
              onClick={handleOpenPopup}
            />
          )}
        </div>
      </li>
      <Popup
        isOpen={isOpenPopup}
        popupClass="bookings-card__popup"
        onClickClose={handleCloseBookingPopup}
      >
        {content}
      </Popup>
    </>
  );
};

BookingsCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    location_photo: PropTypes.string,
    location_name: PropTypes.string,
    location_id: PropTypes.number,
    spot: PropTypes.number,
    date: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    bill: PropTypes.string,
    isFinished: PropTypes.bool,
    reviews: PropTypes.number,
    status: PropTypes.oneOf([
      ORDER_STATUSES.WAIT_PAY,
      ORDER_STATUSES.PAID,
      ORDER_STATUSES.FINISH,
      ORDER_STATUSES.CANCEL,
      ORDER_STATUSES.NOT_PAID,
    ]),
  }),
};

BookingsCard.defaultProps = {
  item: PropTypes.shape({}),
};
