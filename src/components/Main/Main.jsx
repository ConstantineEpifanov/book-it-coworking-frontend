/* eslint-disable no-nested-ternary */
import React, { useEffect, useMemo, useState } from "react";
// import PropTypes from "prop-types";
import "./Main.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
// import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
import { Promo } from "../Promo/Promo";
import { Discounts } from "../Discounts/Discounts";
import { Events } from "../Events/Events";
import { getEvents, getLocations } from "../../utils/Api";
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

export const Main = () => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);
  const [eventsArray, setEventsArray] = useState([]);
  const [pointsAddCount, setPointsAddCount] = useState(0);

  useEffect(() => {
    getLocations()
      .then((res) => {
        setCoworkingsArray(res);
      })
      .catch(() => {});

    getEvents()
      .then((res) => {
        setEventsArray(res.results);
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
