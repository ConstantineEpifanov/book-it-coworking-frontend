import PropTypes from "prop-types";
import React from "react";

import Popup from "../../Popup/Popup";
import Button from "../../UI-kit/Button/Button";
import StarRating from "../../UI-kit/StarRating/StarRating";

const ReviewsForm = ({ isOpenPopup, handleClosePopup }) => {
  const [rating, setRating] = React.useState(0);
  const [reviewText, setReviewText] = React.useState("");
  const [inputError, setInputError] = React.useState("");

  return (
    <Popup
      isOpen={isOpenPopup}
      onClickClose={handleClosePopup}
      popupClass="popup__container_reviews-form"
    >
      <p className="popup__subtitle">Поставьте оценку и оставьте отзыв</p>
      <section className="entry-form" aria-label="форма отзывов">
        <div className="entry-form__container ">
          <form
            className="entry-form__inner entry-form__inner_reviews"
            name="form"
            autoComplete="off"
          >
            <fieldset className="entry-form__box entry-form__box_reviews">
              <StarRating rating={rating} onRatingChange={setRating} />
              <textarea
                className="entry-form__reviews"
                rows="10"
                cols="45"
                name="reviews"
                autoComplete="off"
                placeholder="Ваш текст..."
                value={reviewText}
                minLength="10"
                maxLength="300"
                onChange={(evt) => {
                  const text = evt.target.value;
                  setInputError(evt.target.validationMessage);
                  setReviewText(text);
                }}
                required
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

              <Button
                btnClass="button_type_form"
                btnType="button"
                btnText="Отправить"
                onClick={() => {}}
              />
            </fieldset>
          </form>
        </div>
      </section>
    </Popup>
  );
};

ReviewsForm.propTypes = {
  isOpenPopup: PropTypes.bool,
  handleClosePopup: PropTypes.func,
};
ReviewsForm.defaultProps = {
  isOpenPopup: true,
  handleClosePopup: () => {},
};
export default ReviewsForm;
