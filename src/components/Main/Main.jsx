/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import "./Main.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { PointsList } from "../PointsList/PointsList";
import { CoworkingSwiper } from "../CoworkingSwiper/CoworkingSwiper";
import { Promo } from "../Promo/Promo";
import { Discounts } from "../Discounts/Discounts";
import { Events } from "../Events/Events";
import { NotFoundError } from "../NotFoundError/NotFoundError";
import { getEvents, getShortLocations } from "../../utils/Api";
import { useResize } from "../../hooks/useResize";
import usePagination from "../../hooks/usePagination";

export const Main = () => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);
  const [eventsArray, setEventsArray] = useState([]);
  const { showMessage } = useContext(CurrentUserContext);
  const { isScreenSmall } = useResize();

  const { initialLimit, offset } = usePagination();

  useEffect(() => {
    const fetchData = () => {
      const shortLocationsPromise = getShortLocations(initialLimit, offset)
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
        .then(() => {})
        .catch(() => {});
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getShortLocations(limit, offset)
  //     .then((res) => {
  //       setCoworkingsArray(res.results);
  //     })
  //     .catch((err) => {
  //       showMessage(err.detail);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [limit]);

  return (
    <main className="main">
      <Promo />
      <section className="main__coworkings">
        <SectionTitle
          titleClass="section-title_margin-to-block"
          titleText="Наши коворкинги"
        />
        {coworkingsArray.length === 0 ? (
          <NotFoundError
            titleText="Данные с сервера не получены"
            subtitleText="Попробуйте чуть позже"
            directionRow
          />
        ) : isScreenSmall ? (
          <CoworkingSwiper isCompact coworkingsArray={coworkingsArray} />
        ) : (
          <PointsList
            isCompact
            coworkingsArray={coworkingsArray}
            isMoreButtonVisible={false}
          />
        )}
      </section>
      <Discounts />

      <Events eventsArray={eventsArray} />
    </main>
  );
};
