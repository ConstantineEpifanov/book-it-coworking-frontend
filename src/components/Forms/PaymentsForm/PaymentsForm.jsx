import React from "react";
import PropTypes from "prop-types";
import { SectionTitle } from "../../SectionTitle/SectionTitle";
import Button from "../../UI-kit/Button/Button";
import EntryForm from "../EntryForm/EntryForm";
import Input from "../../UI-kit/Input/Input";
import "./PaymentsForm.scss";

const PaymentsForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = React.useState("");
  const [inputError, setInputError] = React.useState("");

  return (
    <EntryForm formClass="entry-form__inner_payments-form" onSubmit={onSubmit}>
      <div className="payments-form">
        <SectionTitle titleText="Оплата" />
        <h3 className="payments-form__subtitle">
          Не забудьте паспорт или водительские права!
        </h3>
        <p className="payments-form__text_info">
          Данные карты мы будем использовать только для оплаты бронирования
          абонемента, помещений коворгинга и оплаты дополнительных услуг.
          Списание будут происходить только после вашего подтверждения
        </p>
        <Input
          inputClass=""
          inputPlaceholder="Имя владельца"
          inputType="text"
          inputRequired={false}
        />
        <Input
          inputClass=""
          inputPlaceholder="Номер карты"
          inputType="text"
          inputRequired={false}
        />
        <div className="payments-form__box">
          <Input
            inputClass="input_type_card"
            inputPlaceholder="Срок действия"
            inputType="text"
            inputRequired={false}
          />
          <Input
            inputClass="input_type_card"
            inputPlaceholder="CVV/CVC"
            inputType="text"
            inputRequired={false}
          />
        </div>
        <Input
          inputClass="input_size-middle"
          inputPlaceholder="Email"
          inputType="email"
          inputRequired={false}
        />
        <Input
          inputClass="input_size-middle"
          inputPlaceholder="Телефон"
          inputType="tel"
          inputRequired={false}
        />
        <textarea
          className={`entry-form__reviews ${
            inputError ? "entry-form__reviews-error" : ""
          }`}
          rows="4"
          cols="62"
          name="payments-form"
          autoComplete="off"
          placeholder="Комментарий"
          value={reviewText}
          minLength="10"
          maxLength="300"
          onChange={(evt) => {
            const text = evt.target.value;
            setInputError(evt.target.validationMessage);
            setReviewText(text);
          }}
        />
        {/* если нет ошибки ввода, то покажи информацию */}
        {inputError ? (
          <span className="entry-form__box_text entry-form__box_error">
            {inputError}
          </span>
        ) : (
          <span className="entry-form__box_text">
            {`${reviewText.length}/300`}
          </span>
        )}
        <p className="payments-form__text_info payments-form__text_info-btn">
          Отправляя форму, вы принимаете условия договора оферты для физических
          лиц, и даете согласие на обработку персональных данных
        </p>
        <div className="payments-form__box">
          <Button
            btnClass="button_type_transparent button_size_middle"
            btnText="Назад"
          />
          <Button
            btnClass="button_type_form button_size_middle"
            btnText="Оплатить"
            btnType="submit"
          />
        </div>
      </div>
    </EntryForm>
  );
};

PaymentsForm.propTypes = {
  onSubmit: PropTypes.func,
};

PaymentsForm.defaultProps = {
  onSubmit: null,
};

export default PaymentsForm;
