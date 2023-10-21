import { useState } from "react";
import {
  SCREEN_MEDIUM,
  SCREEN_SMALL,
  LAPTOP_SHORT_POINTS_QUANTITY,
  TABLET_SHORT_POINTS_QUANTITY,
  MOBILE_SHORT_POINTS_QUANTITY,
  LAPTOP_MORE_SHORT_POINTS_QUANTITY,
  TABLET_MORE_SHORT_POINTS_QUANTITY,
  MOBILE_MORE_SHORT_POINTS_QUANTITY,
} from "../utils/constants";

const usePagination = () => {
  const determineInitialLimit = () => {
    if (window.innerWidth > SCREEN_MEDIUM) return LAPTOP_SHORT_POINTS_QUANTITY;
    if (window.innerWidth > SCREEN_SMALL) return TABLET_SHORT_POINTS_QUANTITY;
    return MOBILE_SHORT_POINTS_QUANTITY;
  };

  const determineMoreLimit = () => {
    if (window.innerWidth > SCREEN_MEDIUM)
      return LAPTOP_MORE_SHORT_POINTS_QUANTITY;
    if (window.innerWidth > SCREEN_SMALL)
      return TABLET_MORE_SHORT_POINTS_QUANTITY;
    return MOBILE_MORE_SHORT_POINTS_QUANTITY;
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
