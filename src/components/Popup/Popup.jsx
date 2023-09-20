import Button from "../Button/Button";
import "./Popup.css";

function Popup({ title, isOpen, children }) {
  return (
    isOpen && (
      <section className="popup popup_opened" aria-label={title}>
        <div className="popup__container">
          {children}
          <Button btnClass="button_type_close" />
        </div>
      </section>
    )
  );
}

export default Popup;
