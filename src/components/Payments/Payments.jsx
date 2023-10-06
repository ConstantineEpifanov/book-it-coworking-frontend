import React from "react";
import PropTypes from "prop-types";
import "./Payments.scss";
import PaymentsForm from "../Forms/PaymentsForm/PaymentsForm";

const Payments = ({ place }) => (
  <section className="payments" aria-label="страница с формой оплаты">
    <PaymentsForm />
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
            {place.date} {place.start_time}
          </span>
        </li>
        <li className="payments-place__list-item">
          <span>Окончание:</span>
          <span>
            {place.date} {place.end_time}
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
