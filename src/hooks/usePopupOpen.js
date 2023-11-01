import React from "react";

import { useLocation } from "react-router-dom";
import { checkPath } from "../utils/utils";
import { routesPopup } from "../utils/constants";
import { useApiError } from "./useApiError";

export default function usePopupOpen() {
  const location = useLocation();
  const { clearApiError } = useApiError();
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [previousLocation, setPreviousLocation] = React.useState(
    location?.state?.previousLocation,
  );

  const showPopup = checkPath(routesPopup, location);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
    setPreviousLocation(location);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = React.useCallback(() => {
    setIsOpenPopup(false);
    document.body.style.overflow = "auto";
    if (showPopup) {
      clearApiError();
      setPreviousLocation(null); // обнуляем стейт предыдущей локации
      // window.history.replaceState(null, null, "/"); // обнуляем url
    }
  }, [clearApiError, showPopup]);

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

    if (isOpenPopup) {
      document.addEventListener("keydown", closeByEscape);
      document.addEventListener("click", closeByOverlayClick);
    }

    return () => {
      document.removeEventListener("keydown", closeByEscape);
      document.removeEventListener("click", closeByOverlayClick);
    };
  }, [isOpenPopup, handleClosePopup]);

  return {
    isOpenPopup,
    handleOpenPopup,
    handleClosePopup,
    previousLocation,
  };
}
