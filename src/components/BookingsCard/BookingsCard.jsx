import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/currentUserContext";

import {
  ORDER_STATUSES,
  REVIEW_SUCCESS,
  BASIC_ERROR,
} from "../../utils/constants";
import { publishReview, cancelOrder } from "../../utils/Api";
import { formatDate, getPopupText } from "../../utils/utils";

import usePopupOpen from "../../hooks/usePopupOpen";
import ReviewsForm from "../Forms/ReviewsForm/ReviewsForm";

import Button from "../UI-kit/Button/Button";
import Popup from "../Popup/Popup";

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

export const BookingsCard = ({ item, onUpdateStatus, onReviewSubmit }) => {
  const { isOpenPopup, handleOpenPopup, handleClosePopup } = usePopupOpen();
  const [isCancellationConfirmed, setIsCancellationConfirmed] = useState(false);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [serverError, setServerError] = useState(null);
  const { showMessage } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleCloseBookingPopup = () => {
    handleClosePopup();
    setIsCancellationConfirmed(false);
    setIsReviewFormOpen(false);
    setServerError(null);
  };

  const handleConfirmCancellation = () => {
    cancelOrder(item.location_id, item.spot, item.id)
      .then(() => {
        setIsCancellationConfirmed(true);
      })
      .catch(() => showMessage(BASIC_ERROR))
      .finally(() => {});
  };

  const handleOpenReviewForm = () => {
    setIsReviewFormOpen(true);
    handleOpenPopup();
  };

  const handleReviewSubmit = (data) => {
    setServerError(null);
    publishReview(item.location_id, item.spot, item.id, data)
      .then(() => {
        handleClosePopup();
        onReviewSubmit(item.id);
        showMessage(REVIEW_SUCCESS, "info");
      })
      .catch((e) => {
        // eslint-disable-next-line no-underscore-dangle
        setServerError(e.booked_spot[0]);
      })
      .finally(() => {});
  };

  const shouldButtonBeDisabled = () => item.status !== ORDER_STATUSES.CANCEL;

  function handleCardAction(status) {
    if (status === ORDER_STATUSES.WAIT_PAY) {
      navigate("/payments", {
        state: {
          id: item.location_id,
          spotId: item.spot,
          name: item.location_name,
          location_name: item.location_name,
          date: item.date,
          startTime: item.start_time,
          endTime: item.end_time,
          bill: item.bill,
          orderId: item.id,
        },
      });
    } else {
      handleOpenPopup();
    }
  }

  let content;
  if (isCancellationConfirmed) {
    content = (
      <>
        <p className="bookings-card__popup-text">
          Бронирование «{item.location_name.toUpperCase()} с {item.start_time}{" "}
          до {item.end_time}» отменено. Мы отправим вам подтверждение на почту и
          вернем предоплату.
        </p>
        <p className="bookings-card__popup-text">
          Хотите создать бронирование на другую дату?
        </p>
        <div className="bookings-card__button-container">
          <Button
            btnText="Нет"
            btnType="button"
            btnClass="button__profile-transparent button_type_cancel"
            onClick={() => {
              handleCloseBookingPopup();
              onUpdateStatus(item.id);
            }}
          />
          <Link to={`/points/${item.location_id}`}>
            <Button
              btnText="Создать"
              btnType="button"
              btnClass="button__profile-edit button_type_createorder"
              onClick={handleOpenReviewForm}
            />
          </Link>
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
            btnClass="button__profile-transparent button_type_cancel"
            onClick={handleCloseBookingPopup}
          />
          <Button
            btnText="Да, Отменить"
            btnClass="button__profile-edit button_type_order"
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
              btnClass="button_width-bookings button_type_sendreview"
              onClick={handleOpenReviewForm}
              isValidBtn={item.reviews === null && shouldButtonBeDisabled()}
            />
          ) : (
            <Button
              btnText={
                item.status !== ORDER_STATUSES.WAIT_PAY
                  ? "Отменить"
                  : "Оплатить"
              }
              btnClass={
                item.status !== ORDER_STATUSES.WAIT_PAY
                  ? "button__profile-small button_type_transparent button_width-bookings"
                  : "button__profile-small button_type_order button_width-bookings"
              }
              onClick={() => handleCardAction(item.status)}
            />
          )}
        </div>
      </li>
      <Popup
        isOpen={isOpenPopup}
        popupClass="bookings-card__popup popup_type_whitemobile"
        onClickClose={() => {
          handleCloseBookingPopup();
          if (isCancellationConfirmed) {
            onUpdateStatus(item.id);
          }
        }}
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
    bill: PropTypes.number,
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
  onUpdateStatus: PropTypes.func,
  onReviewSubmit: PropTypes.func,
};

BookingsCard.defaultProps = {
  item: PropTypes.shape({}),
  onUpdateStatus: undefined,
  onReviewSubmit: undefined,
};
