/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import "./Main.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
// import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
import { Promo } from "../Promo/Promo";
import { Discounts } from "../Discounts/Discounts";
import { Events } from "../Events/Events";
import { getLocations } from "../../utils/Api";
import { useResize } from "../../hooks/useResize";
// import SearchForm from "../Forms/SearchForm/SearchForm";
// import Button from "../UI-kit/Button/Button";
import {
  LAPTOP_POINTS_QUANTITY,
  LAPTOP_MORE_POINTS_QUANTITY,
  MOBILE_POINTS_QUANTITY,
  TABLET_POINTS_QUANTITY,
  TABLET_MORE_POINTS_QUANTITY,
} from "../../utils/constants";

export const Main = ({ eventsArray }) => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);
  const [pointsAddCount, setPointsAddCount] = useState(0);

  useEffect(() => {
    getLocations()
      .then((res) => {
        setCoworkingsArray(res);
      })
      .catch(() => {});
  }, []);

  const size = useResize();

  // Кнопка еще
  const handleMoreClick = () => {
    setPointsAddCount(
      (prev) =>
        prev +
        (size.isScreenLarge
          ? LAPTOP_MORE_POINTS_QUANTITY
          : TABLET_MORE_POINTS_QUANTITY),
    );
  };

  const pointsRender = useMemo(() => {
    // Стартовое кол-во карточек для отображения на разных разрешениях
    const pointsStartQuantity = () =>
      size.isScreenLarge
        ? LAPTOP_POINTS_QUANTITY
        : size.isScreenMedium
        ? TABLET_POINTS_QUANTITY
        : MOBILE_POINTS_QUANTITY;

    return coworkingsArray.slice(0, pointsStartQuantity() + pointsAddCount);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coworkingsArray, pointsAddCount]);

  return (
    <main className="main">
      <Promo />
      <section className="main__coworkings">
        <SectionTitle
          titleClass="section-title_margin-to-block"
          titleText="Наши коворкинги"
        />
        <PointsList
          isCompact
          coworkingsArray={coworkingsArray}
          handleMoreClick={handleMoreClick}
          pointsRender={pointsRender}
        />
      </section>
      <Discounts />
      <Events eventsArray={eventsArray} />
    </main>
  );
};

Main.propTypes = {
  eventsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      address: PropTypes.string,
      meetingQuantity: PropTypes.number,
      url: PropTypes.string,
      date: PropTypes.string.isRequired,
    }),
  ),
};

Main.defaultProps = {
  eventsArray: undefined,
};

// coworkingsArray: PropTypes.arrayOf(
//   PropTypes.shape({
//     isCompact: PropTypes.bool,
//     isListed: PropTypes.bool,
//     rating: PropTypes.string,
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     about: PropTypes.string,
//     openTime: PropTypes.number,
//     closeTime: PropTypes.number,
//     lowPrice: PropTypes.number,
//     mainPhoto: PropTypes.string,
//     extraPhoto: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         url: PropTypes.string,
//       }),
//     ),
//     address: PropTypes.string,
//     metro: PropTypes.string,
//     generalQuantity: PropTypes.number,
//     meetingQuantity: PropTypes.number,
//   }),
// )
