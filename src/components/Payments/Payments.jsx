import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./Payments.scss";
import PaymentsForm from "../Forms/PaymentsForm/PaymentsForm";
import Popup from "../Popup/Popup";
import { postOrder } from "../../utils/Api";
import Button from "../UI-kit/Button/Button";

const Payments = () => {
  const { state: place } = useLocation();
  const [isPopupOpened, setPopupOpened] = useState(false);
  const [isResponseOK, setResponseOK] = useState(false);

  const getPrettifiedDate = (date) => {
    const monthName = date.toLocaleString("ru-ru", { month: "long" });

    return `${date.getDate()} ${monthName} ${date.getFullYear()}`;
  };

  const handleSubmit = async () => {
    try {
      await postOrder(place.id, place.spotId);
      setResponseOK(true);
    } catch {
      setResponseOK(false);
    }
    setPopupOpened(true);
  };

  const handlePopupClose = () => {
    setPopupOpened(false);
  };

  return (
    <section className="payments" aria-label="страница с формой оплаты">
      {isResponseOK ? (
        <Popup isOpen={isPopupOpened} onClickClose={handlePopupClose}>
          <p className="popup__title">Оплата прошла успешно</p>
          <p className="popup__text">
            Письмо с подтверждением и деталями бронирования отправлено вам на
            указанный номер телефона и электронную почту
          </p>
        </Popup>
      ) : (
        <Popup isOpen={isPopupOpened} onClickClose={handlePopupClose}>
          <p className="popup__title">Оплата не прошла</p>
          <p className="popup__text">
            Проверьте, пожалуйста, корректность введенных платежных данных и
            повторите попытку
          </p>
          <Button btnText="Попробовать еще раз" />
        </Popup>
      )}

      <PaymentsForm onSubmit={handleSubmit} />
      <article className="payments-place">
        <h3 className="payments-place__info">коворкинг</h3>
        <h3 className="payments-place__header">{place.name}</h3>
        <ul className="payments-place__list">
          <li className="payments-place__list-item">
            <span>Адрес: </span>
            <span>{place.location}</span>
          </li>
          <li className="payments-place__list-item">
            <span>{place.category}:</span>
            <span>{place.equipment}</span>
          </li>
          <li className="payments-place__list-item">
            <span>Начало:</span>
            <span>
              {getPrettifiedDate(place.date)} {place.startTime}
            </span>
          </li>
          <li className="payments-place__list-item">
            <span>Окончание:</span>
            <span>
              {getPrettifiedDate(place.date)} {place.endTime}
            </span>
          </li>
        </ul>
        <div className="payments-place__bill">
          <span>К оплате:</span>
          <span>{place.bill}</span>
        </div>
      </article>
    </section>
  );
};

Payments.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    bill: PropTypes.string.isRequired,
  }).isRequired,
};

export default Payments;
