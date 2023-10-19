import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../UI-kit/Button/Button";
import Popup from "../Popup/Popup";
import StarRating from "../UI-kit/StarRating/StarRating";

import ClockIcon from "../../images/profile-icons/time.svg";
import CardIcon from "../../images/profile-icons/card.svg";

import "./BookingsCard.scss";

const statusLabels = {
  Confirmed: (
    <span className="bookings-card__status bookings-card__status_confirmed">
      Подтверждено
    </span>
  ),
  "Ожидается оплата": (
    <span className="bookings-card__status bookings-card__status_processing">
      В обработке
    </span>
  ),
};

export const BookingsCard = ({ item }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCancellationConfirmed, setIsCancellationConfirmed] = useState(false);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const maxCharacters = 300;
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setIsCancellationConfirmed(false);
    setIsReviewFormOpen(false);
  };

  const handleConfirmCancellation = () => {
    setIsCancellationConfirmed(true);
  };

  const handleOpenReviewForm = () => {
    setIsReviewFormOpen(true);
    setIsPopupOpen(true);
  };

  const handleReviewTextChange = (e) => {
    const newText = e.target.value;
    setReviewText(newText);
  };

  const handleRatingChange = (rating) => {
    setReviewRating(rating);
  };

  // для демонстрационных целей

  const handleReviewSubmit = () =>
    `Рейтинг: ${reviewRating} Текст: ${reviewText}`;

  const getPopupText = (booking) => {
    if (booking.status === "Confirmed") {
      return `Бронирование уже подтверждено.`;
    }
    if (booking.status === "Ожидается оплата") {
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
            onClick={handleClosePopup}
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
      <div className="bookings-card__popup-content">
        <p className="bookings-card__popup-text bookings-card__popup-text_type_review">
          Поставьте оценку и оставьте отзыв
        </p>
        <StarRating rating={reviewRating} onRatingChange={handleRatingChange} />
        <textarea
          id="review"
          name="review"
          className="bookings-card__review-text"
          maxLength={maxCharacters}
          placeholder="Текст"
          value={reviewText}
          onChange={handleReviewTextChange}
        />
        <p className="bookings-card__character-count">
          {reviewText.length}/{maxCharacters}
        </p>
        <Button
          btnText="Отправить"
          btnClass="button__profile-review"
          onClick={handleReviewSubmit}
        />
      </div>
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
            onClick={handleClosePopup}
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
          {!item.isFinished && (
            <div className="bookings-card__status">
              {statusLabels[item.status]}
            </div>
          )}

          <div
            className={`bookings-card__date-row ${
              item.isFinished ? "bookings-card__date-row_isfinished" : ""
            }`}
          >
            <img src={ClockIcon} alt="Иконка часов" />
            <div className="bookings-card__date-container">
              <p className="bookings-card__date">{item.date}</p>
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
              btnText="Оставить отзыв"
              btnClass="button__profile-bookings"
              onClick={handleOpenReviewForm}
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
        isOpen={isPopupOpen}
        popupClass="bookings-card__popup"
        onClickClose={handleClosePopup}
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
    date: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    bill: PropTypes.string,
    isFinished: PropTypes.bool,
    status: PropTypes.oneOf(["Confirmed", "Ожидается оплата"]),
  }),
};

BookingsCard.defaultProps = {
  item: PropTypes.shape({}),
};
