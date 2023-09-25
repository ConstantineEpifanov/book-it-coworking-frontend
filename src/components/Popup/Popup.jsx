// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";
import "./Popup.scss";

function Popup({ isOpen, children, onClickClose }) {
  return (
    isOpen && (
      <section className="popup" aria-label="всплывающая форма">
        <div className="popup__container">
          {children}
          <Button btnClass="button_type_close" onClick={onClickClose} />
        </div>
      </section>
    )
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  onClickClose: PropTypes.func,
};
Popup.defaultProps = {
  isOpen: true,
  onClickClose: () => {},
};
export default Popup;
