import PropTypes from "prop-types";
import clsx from "clsx";
import { Calendar } from "../Calendar/Calendar";
import { ButtonsList } from "../ButtonsList/ButtonsList";
import Button from "../UI-kit/Button/Button";
import Popup from "../Popup/Popup";

import "./BookingCalendarPopup.scss";

const BookingCalendarPopup = ({
  isOpen,
  timeListProps,
  onDateSelect,
  onClickClose,
  onSaveClick,
  popupClass,
}) => (
  <Popup
    isOpen={isOpen}
    onClickClose={onClickClose}
    popupSectionClass="booking-calendar-popup"
    popupClass={clsx({
      "booking-calendar-popup__container": true,
      [popupClass]: popupClass,
    })}
    popupCloseButtonClass="booking-calendar-popup__close-button"
  >
    <Calendar selectCallback={onDateSelect} />
    <div className="booking-calendar-popup__controls-wrapper">
      <ButtonsList {...timeListProps} />
      <Button
        onClick={onSaveClick}
        btnClass="booking-calendar-popup__save-button button_type_form"
        btnText="Сохранить"
      />
    </div>
  </Popup>
);

BookingCalendarPopup.propTypes = {
  isOpen: PropTypes.bool,
  timeListProps: PropTypes.shape({
    itemsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        onClick: PropTypes.func,
        isEnabled: PropTypes.bool,
      }),
    ).isRequired,
    allowedRanges: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    sortFunc: PropTypes.func,
    isMultiselect: PropTypes.bool,
    listClassName: PropTypes.string,
  }).isRequired,
  popupClass: PropTypes.string,
  onDateSelect: PropTypes.func.isRequired,
  onClickClose: PropTypes.func,
  onSaveClick: PropTypes.func,
};
BookingCalendarPopup.defaultProps = {
  isOpen: true,
  popupClass: "",
  onClickClose: () => {},
  onSaveClick: () => {},
};

export default BookingCalendarPopup;
