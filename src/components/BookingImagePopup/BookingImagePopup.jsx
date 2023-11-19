import { PropTypes } from "prop-types";

import "./BookingImagePopup.scss";

import Button from "../UI-kit/Button/Button";

function BookingImagePopup({ planPhoto, onClickClose, isOpen }) {
  return (
    isOpen && (
      <section className="bookingImg" aria-label="Расширенная схема коворкинга">
        <figure className="bookingImg__figure">
          <img
            className="bookingImg__image"
            src={planPhoto}
            alt="Схема коворкинга"
          />
          <Button
            btnType="button"
            btnClass="button button_type_close button_type_close_img"
            onClick={onClickClose}
          />
        </figure>
      </section>
    )
  );
}

BookingImagePopup.propTypes = {
  isOpen: PropTypes.bool,
  planPhoto: PropTypes.string,
  onClickClose: PropTypes.func,
};
BookingImagePopup.defaultProps = {
  isOpen: false,
  planPhoto: "",
  onClickClose: () => {},
};

export default BookingImagePopup;
