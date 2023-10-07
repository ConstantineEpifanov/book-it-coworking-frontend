import React from "react";
import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";

import "./PaymentTab.scss";

import MasterCardIcon from "../../images/profile-icons/mastercard.svg";

export const PaymentTab = ({ user }) => {
  if (!user) {
    return null; // Если user не передан, не рендерим компонент
  }

  function getCardImage(cardType) {
    switch (cardType) {
      case "mastercard":
        return (
          <img
            src={MasterCardIcon}
            alt="Mastercard"
            className="payment__card-image"
          />
        );
      default:
        return <p>N/A</p>;
    }
  }

  function maskCardNumber(cardNumber) {
    return cardNumber ? `••••${cardNumber.slice(12)}` : "";
  }
  return (
    <section className="payment">
      <h2 className="payment__title">Платежные данные</h2>
      <ul className="payment__board">
        <li className="payment__board-row">
          <span className="payment__feature-name">Новая карта</span>
          <Button btnText="Сбросить" btnClass="button__profile-edit" />
        </li>
        <li className="payment__board-row">
          <div className="payment__card-container">
            <span className="payment__feature-name">Платежные карты</span>
            <span>{getCardImage(user && user.card.type)}</span>
            <span className="payment__card-data">
              {user && maskCardNumber(user.card && user.card.number)}
            </span>
            <span className="payment__card-data">
              {user && user.card.valid}
            </span>
          </div>
          <Button btnText="Изменить" btnClass="button__profile-edit" />
        </li>
      </ul>
    </section>
  );
};

PaymentTab.propTypes = {
  user: PropTypes.shape({
    card: PropTypes.shape({
      number: PropTypes.string,
      valid: PropTypes.string,
      type: PropTypes.string,
    }),
  }),
};

PaymentTab.defaultProps = {
  user: {
    card: { number: "", valid: "", type: "" },
  },
};
