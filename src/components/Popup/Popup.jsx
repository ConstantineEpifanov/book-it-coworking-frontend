import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";
import "./Popup.scss";

function Popup({ isOpen, children, onClickClose, popupClass }) {
  return (
    isOpen && (
      <section className="popup" aria-label="всплывающая форма">
        <div className={`popup__container ${popupClass}`}>
          {children}
          <Button btnClass="button_type_close" onClick={onClickClose} />
        </div>
      </section>
    )
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool,
  popupClass: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  onClickClose: PropTypes.func,
};
Popup.defaultProps = {
  isOpen: true,
  popupClass: "",
  onClickClose: () => {},
};
export default Popup;
