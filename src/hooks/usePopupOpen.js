import React from "react";

export default function usePopupOpen() {
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        handleClosePopup();
      }
    }

    function closeByOverlayClick(evt) {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("button_type_close")
      ) {
        handleClosePopup();
      }
    }

    // добавление и снятие слушателей
    if (isOpenPopup) {
      document.addEventListener("keydown", closeByEscape);
      document.addEventListener("click", closeByOverlayClick);
    }

    return () => {
      document.removeEventListener("keydown", closeByEscape);
      document.removeEventListener("click", closeByOverlayClick);
    };
  }, [isOpenPopup]);
  return {
    isOpenPopup,
    handleOpenPopup,
    handleClosePopup,
  };
}
