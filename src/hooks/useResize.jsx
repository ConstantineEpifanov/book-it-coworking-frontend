import { useState, useEffect } from "react";
import { SCREEN_SMALL, SCREEN_MEDIUM } from "../utils/constants";

export const useResize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    setTimeout(() => {
      window.addEventListener("resize", handleResize);
    }, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSmall: width < SCREEN_SMALL,
    isScreenMedium: width < SCREEN_MEDIUM,
    isScreenLarge: width > SCREEN_MEDIUM,
  };
};

export default useResize;
