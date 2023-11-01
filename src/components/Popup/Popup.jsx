import clsx from "clsx";
import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";
import "./Popup.scss";

function Popup({
  isOpen,
  children,
  onClickClose,
  popupClass,
  popupSectionClass,
  popupCloseButtonClass,
}) {
  return (
    isOpen && (
      <section
        className={clsx({
          popup: true,
          [popupSectionClass]: popupSectionClass,
        })}
        aria-label="всплывающая форма"
      >
        <div
          className={clsx({
            popup__container: true,
            [popupClass]: popupClass,
          })}
        >
          {children}
          <Button
            btnClass={clsx({
              button_type_close: true,
              [popupCloseButtonClass]: popupCloseButtonClass,
            })}
            onClick={onClickClose}
          />
        </div>
      </section>
    )
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool,
  popupClass: PropTypes.string,
  popupSectionClass: PropTypes.string,
  popupCloseButtonClass: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  onClickClose: PropTypes.func,
};
Popup.defaultProps = {
  isOpen: true,
  popupClass: "",
  popupSectionClass: "",
  popupCloseButtonClass: "",
  onClickClose: () => {},
};
export default Popup;
