import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  SCREEN_MEDIUM,
  SCREEN_SMALL,
  LAPTOP_SHORT_POINTS_QUANTITY,
  TABLET_SHORT_POINTS_QUANTITY,
  MOBILE_SHORT_POINTS_QUANTITY,
  LAPTOP_MORE_SHORT_POINTS_QUANTITY,
  TABLET_MORE_SHORT_POINTS_QUANTITY,
  MOBILE_MORE_SHORT_POINTS_QUANTITY,
  LAPTOP_POINTS_QUANTITY,
  TABLET_POINTS_QUANTITY,
  MOBILE_POINTS_QUANTITY,
  LAPTOP_MORE_POINTS_QUANTITY,
  TABLET_MORE_POINTS_QUANTITY,
  MOBILE_MORE_POINTS_QUANTITY,
} from "../utils/constants";

const usePagination = () => {
  const location = useLocation();
  const isCoworkingPage = location.pathname.includes("points");

  const determineInitialLimit = () => {
    if (window.innerWidth > SCREEN_MEDIUM)
      return isCoworkingPage
        ? LAPTOP_POINTS_QUANTITY
        : LAPTOP_SHORT_POINTS_QUANTITY;
    if (window.innerWidth > SCREEN_SMALL)
      return isCoworkingPage
        ? TABLET_POINTS_QUANTITY
        : TABLET_SHORT_POINTS_QUANTITY;
    return isCoworkingPage
      ? MOBILE_POINTS_QUANTITY
      : MOBILE_SHORT_POINTS_QUANTITY;
  };

  const determineMoreLimit = () => {
    if (window.innerWidth > SCREEN_MEDIUM)
      return isCoworkingPage
        ? LAPTOP_MORE_POINTS_QUANTITY
        : LAPTOP_MORE_SHORT_POINTS_QUANTITY;
    if (window.innerWidth > SCREEN_SMALL)
      return isCoworkingPage
        ? TABLET_MORE_POINTS_QUANTITY
        : TABLET_MORE_SHORT_POINTS_QUANTITY;
    return isCoworkingPage
      ? MOBILE_MORE_POINTS_QUANTITY
      : MOBILE_MORE_SHORT_POINTS_QUANTITY;
  };

  const initialLimit = determineInitialLimit();
  const [limit, setLimit] = useState(determineInitialLimit());
  const [offset, setOffset] = useState(0);

  const nextPage = () => {
    setLimit(determineMoreLimit());
    setOffset((prevOffset) => prevOffset + limit);
  };

  return {
    initialLimit,
    limit,
    offset,
    nextPage,
  };
};

export default usePagination;
