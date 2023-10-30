/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext, useState } from "react";
// import PropTypes from "prop-types";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import "./Main.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
// import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
// import { PointsList } from "../PointsList/PointsList";

import { CoworkingSwiper } from "../CoworkingSwiper/CoworkingSwiper";

import { Promo } from "../Promo/Promo";
import { Discounts } from "../Discounts/Discounts";
import { Events } from "../Events/Events";
import { Loader } from "../Loader/Loader";
import { NotFoundError } from "../NotFoundError/NotFoundError";

import { getEvents, getShortLocations } from "../../utils/Api";
// import { useResize } from "../../hooks/useResize";
// import SearchForm from "../Forms/SearchForm/SearchForm";
// import Button from "../UI-kit/Button/Button";
import {
  LAPTOP_SHORT_POINTS_QUANTITY,
  // MOBILE_POINTS_QUANTITY,
  // TABLET_POINTS_QUANTITY,
  // TABLET_MORE_POINTS_QUANTITY,
} from "../../utils/constants";

export const Main = () => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);
  const [eventsArray, setEventsArray] = useState([]);
  const { isLoading, setIsLoading, showMessage } =
    useContext(CurrentUserContext);
  //  const size = useResize();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = () => {
      const shortLocationsPromise = getShortLocations(
        LAPTOP_SHORT_POINTS_QUANTITY,
        0,
      )
        .then((res) => {
          setCoworkingsArray(res.results);
        })
        .catch((err) => {
          showMessage(err.detail);
        });

      const eventsPromise = getEvents()
        .then((res) => {
          setEventsArray(res);
        })
        .catch((err) => {
          showMessage(err.detail);
        });

      Promise.all([shortLocationsPromise, eventsPromise])
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Кнопка еще для десктопа
  // const handleMoreClick = () => {
  //   setPointsAddCount((prev) => prev + LAPTOP_MORE_SHORT_POINTS_QUANTITY);
  //   getShortLocations(LAPTOP_MORE_SHORT_POINTS_QUANTITY, pointsAddCount)
  //     .then((res) => {
  //       setCoworkingsArray(coworkingsArray.concat(res.results));
  //       if (res.results.length < LAPTOP_MORE_SHORT_POINTS_QUANTITY)
  //         setMoreButtonVisible(false);
  //     })
  //     .catch(() => {});
  // };

  // const pointsRender = useMemo(() => {
  //   // Стартовое кол-во карточек для отображения на разных разрешениях
  //   const pointsStartQuantity = () =>
  //     size.isScreenLarge
  //       ? LAPTOP_SHORT_POINTS_QUANTITY
  //       : size.isScreenMedium
  //       ? TABLET_POINTS_QUANTITY
  //       : MOBILE_POINTS_QUANTITY;

  //   return coworkingsArray.slice(0, pointsStartQuantity() + pointsAddCount);

  //
  // }, []);

  return (
    <main className="main">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Promo />
          <section className="main__coworkings">
            <SectionTitle
              titleClass="section-title_margin-to-block"
              titleText="Наши коворкинги"
            />
            {!coworkingsArray ? (
              <NotFoundError
                titleText="Данные с сервера не получены"
                subtitleText="Попробуйте чуть позже"
                directionRow
              />
            ) : (
              <CoworkingSwiper isCompact coworkingsArray={coworkingsArray} />
            )}
          </section>
          <Discounts />
          <Events eventsArray={eventsArray} />
        </>
      )}
    </main>
  );
};
