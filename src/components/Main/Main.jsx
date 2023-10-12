/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext, useState } from "react";
// import PropTypes from "prop-types";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import "./Main.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
// import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
import { Promo } from "../Promo/Promo";
import { Discounts } from "../Discounts/Discounts";
import { Events } from "../Events/Events";
import { getEvents, getShortLocations } from "../../utils/Api";
// import { useResize } from "../../hooks/useResize";
// import SearchForm from "../Forms/SearchForm/SearchForm";
// import Button from "../UI-kit/Button/Button";
import {
  LAPTOP_POINTS_QUANTITY,
  LAPTOP_MORE_POINTS_QUANTITY,
  // MOBILE_POINTS_QUANTITY,
  // TABLET_POINTS_QUANTITY,
  // TABLET_MORE_POINTS_QUANTITY,
} from "../../utils/constants";

export const Main = () => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);
  const [eventsArray, setEventsArray] = useState([]);
  const [pointsAddCount, setPointsAddCount] = useState(0);
  const [isMoreButtonVisible, setMoreButtonVisible] = useState(true);
  const { setIsLoading } = useContext(CurrentUserContext);
  //  const size = useResize();

  useEffect(() => {
    setIsLoading(true);
    getShortLocations(LAPTOP_POINTS_QUANTITY, pointsAddCount)
      .then((res) => {
        setCoworkingsArray(res.results);
        setPointsAddCount((prev) => prev + LAPTOP_POINTS_QUANTITY);
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));

    getEvents()
      .then((res) => {
        setEventsArray(res);
      })
      .catch(() => {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Кнопка еще, пока только для десктопа
  const handleMoreClick = () => {
    setPointsAddCount((prev) => prev + LAPTOP_MORE_POINTS_QUANTITY);
    getShortLocations(LAPTOP_MORE_POINTS_QUANTITY, pointsAddCount).then(
      (res) => {
        setCoworkingsArray(coworkingsArray.concat(res.results));
        if (res.results.length < LAPTOP_MORE_POINTS_QUANTITY)
          setMoreButtonVisible(false);
      },
    );
  };

  // const pointsRender = useMemo(() => {
  //   // Стартовое кол-во карточек для отображения на разных разрешениях
  //   const pointsStartQuantity = () =>
  //     size.isScreenLarge
  //       ? LAPTOP_POINTS_QUANTITY
  //       : size.isScreenMedium
  //       ? TABLET_POINTS_QUANTITY
  //       : MOBILE_POINTS_QUANTITY;

  //   return coworkingsArray.slice(0, pointsStartQuantity() + pointsAddCount);

  //
  // }, []);

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
          isMoreButtonVisible={isMoreButtonVisible}
        />
      </section>
      <Discounts />
      <Events eventsArray={eventsArray} />
    </main>
  );
};
