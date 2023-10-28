import PropTypes from "prop-types";
import React from "react";

import Button from "../../UI-kit/Button/Button";
import StarRating from "../../UI-kit/StarRating/StarRating";

import { MAX_REVIEW_CHARACTERS_NUMBER } from "../../../utils/constants";

import "./ReviewsForm.scss";

const ReviewsForm = ({ onSubmit, serverError }) => {
  const [rating, setRating] = React.useState(0);
  const [reviewText, setReviewText] = React.useState("");
  const [inputError, setInputError] = React.useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      description: reviewText,
      rating,
    });
    setReviewText("");
    setRating(0);
  };

  return (
    <div className="reviews-form__popup-content">
      <p className="reviews-form__popup-text reviews-form__popup-text_type_review">
        Поставьте оценку и&nbsp;оставьте отзыв
      </p>
      <section className="reviews-form__container" aria-label="форма отзывов">
        <div className=" ">
          <StarRating rating={rating} onRatingChange={setRating} />
          <form className="" name="form" autoComplete="off" noValidate>
            <fieldset className="reviews-form__fieldset">
              <textarea
                className={`reviews-form__reviews ${
                  inputError ? "reviews-form__reviews-error" : ""
                }`}
                rows="10"
                cols="45"
                name="reviews"
                autoComplete="off"
                placeholder="Ваш текст..."
                value={reviewText}
                minLength="10"
                maxLength={MAX_REVIEW_CHARACTERS_NUMBER}
                onChange={(evt) => {
                  const text = evt.target.value;
                  setInputError(evt.target.validationMessage);
                  setReviewText(text);
                }}
                required
              />
              {/* если нет ошибки ввода, то покажи информацию */}
              {inputError ? (
                <span className="reviews-form__box_text reviews-form__box_error">
                  {inputError}
                </span>
              ) : (
                <span className="reviews-form__box_text">
                  {`${reviewText.length}/${MAX_REVIEW_CHARACTERS_NUMBER}`}
                </span>
              )}{" "}
              {serverError && (
                <span className="reviews-form__server-error">
                  {serverError}
                </span>
              )}
              <Button
                btnClass="button__profile-review"
                btnType="button"
                btnText="Отправить"
                onClick={handleReviewSubmit}
                isValidBtn={
                  inputError === "" && rating !== 0 && reviewText.length >= 10
                }
              />
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
};

ReviewsForm.propTypes = {
  onSubmit: PropTypes.func,
  serverError: PropTypes.string,
};
ReviewsForm.defaultProps = {
  onSubmit: () => {},
  serverError: undefined,
};
export default ReviewsForm;
