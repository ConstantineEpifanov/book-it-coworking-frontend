import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import "./Payments.scss";
import PaymentsForm from "../Forms/PaymentsForm/PaymentsForm";
import Popup from "../Popup/Popup";
import { pay } from "../../utils/Api";
import Button from "../UI-kit/Button/Button";

const Payments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const place = useRef(location.state);
  const [placeState, setPlaceState] = useState(
    place.current || JSON.parse(sessionStorage.getItem("paymentState")),
  );
  const [isPopupOpened, setPopupOpened] = useState(false);
  const [isResponseOK, setResponseOK] = useState(false);

  const getPrettifiedDate = (date) => {
    const resultDate = new Date(date);
    const monthName = resultDate.toLocaleString("ru-ru", { month: "long" });

    return `${resultDate.getDate()} ${monthName} ${resultDate.getFullYear()}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await pay(placeState.id, placeState.spotId, placeState.orderId);
      setResponseOK(true);
      setTimeout(() => {
        navigate("/points", { replace: true });
      }, 1000);
    } catch {
      setResponseOK(false);
    }
    setPopupOpened(true);
  };

  const handlePopupClose = () => {
    setPopupOpened(false);
  };

  const handleBack = () => {
    navigate("/booking");
  };

  useEffect(() => {
    const paymentState = JSON.parse(sessionStorage.getItem("paymentState"));

    if (!place.current && !paymentState) {
      navigate("/", { replace: true });
      return;
    }

    if (!place.current) {
      place.current = paymentState;
      setPlaceState(paymentState);
    }

    sessionStorage.setItem("paymentState", JSON.stringify(place.current));
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <section className="payments" aria-label="страница с формой оплаты">
      {createPortal(
        isResponseOK ? (
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
        ),
        document.body,
      )}

      <PaymentsForm onSubmit={handleSubmit} onBack={handleBack} />
      <article className="payments-place">
        <h3 className="payments-place__info">коворкинг</h3>
        <h3 className="payments-place__header">{placeState?.name}</h3>
        <ul className="payments-place__list">
          <li className="payments-place__list-item">
            <span>Адрес: </span>
            <span>{placeState?.location}</span>
          </li>
          <li className="payments-place__list-item">
            <span>{placeState?.category}:</span>
            <span>{placeState?.equipment}</span>
          </li>
          <li className="payments-place__list-item">
            <span>Начало:</span>
            <span>
              {placeState?.date && getPrettifiedDate(placeState?.date)}{" "}
              {placeState?.startTime}
            </span>
          </li>
          <li className="payments-place__list-item">
            <span>Окончание:</span>
            <span>
              {placeState?.date && getPrettifiedDate(placeState?.date)}{" "}
              {placeState?.endTime}
            </span>
          </li>
        </ul>
        <div className="payments-place__bill">
          <span>К оплате:</span>
          <span>{placeState?.bill}</span>
        </div>
      </article>
    </section>
  );
};

export default Payments;
