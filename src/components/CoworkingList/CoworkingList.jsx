import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUserContext";
// import PropTypes from "prop-types";
import "./CoworkingList.scss";
import { Loader } from "../Loader/Loader";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
import { MainMap } from "../Map/Map";
import SearchForm from "../Forms/SearchForm/SearchForm";

import { defaultState } from "../../config/mapOptions";

import { getLocations, getMapLocations } from "../../utils/Api";
import {
  LAPTOP_POINTS_QUANTITY,
  LAPTOP_MORE_POINTS_QUANTITY,
} from "../../utils/constants";

export const CoworkingList = () => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);
  const [pointsAddCount, setPointsAddCount] = useState(0);
  const [isMoreButtonVisible, setMoreButtonVisible] = useState(true);

  const [mapPoints, setMapPoints] = useState([]);
  const { isLoading, setIsLoading } = useContext(CurrentUserContext);

  const location = useLocation();
  const coworkingsArrayFromPromo = location.state
    ? location.state.coworkingsArrayFromPromo
    : undefined;

  const fetchData = () => {
    const locationsPromise = getLocations(
      LAPTOP_POINTS_QUANTITY,
      pointsAddCount,
    )
      .then((res) => {
        setCoworkingsArray(res.results);
        setPointsAddCount((prev) => prev + LAPTOP_POINTS_QUANTITY);
      })
      .catch(() => {});

    const mapLocationsPromise = getMapLocations()
      .then((res) => {
        setMapPoints(res);
      })
      .catch(() => {});

    Promise.all([locationsPromise, mapLocationsPromise])
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (
      (Array.isArray(coworkingsArrayFromPromo) &&
        coworkingsArrayFromPromo.length === 0) ||
      !coworkingsArrayFromPromo
    ) {
      fetchData();
    } else {
      setCoworkingsArray(coworkingsArrayFromPromo);
      setIsLoading(false);
      setMoreButtonVisible(coworkingsArrayFromPromo > LAPTOP_POINTS_QUANTITY);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoreClick = () => {
    setPointsAddCount((prev) => prev + LAPTOP_MORE_POINTS_QUANTITY);

    getLocations(LAPTOP_MORE_POINTS_QUANTITY, pointsAddCount).then((res) => {
      setCoworkingsArray(coworkingsArray.concat(res.results));
      if (res.results.length < LAPTOP_MORE_POINTS_QUANTITY)
        setMoreButtonVisible(false);
    });
  };

  const handleUpdateCoworkings = (data) => {
    setCoworkingsArray(data);
    setMoreButtonVisible(data.length > LAPTOP_POINTS_QUANTITY);
  };

  // useEffect(() => {
  //   console.log("coworkingsArray", coworkingsArray);
  // }, [coworkingsArray]);

  return (
    <main className="coworking-list">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SectionTitle
            titleText="Поиск по коворкингам Санкт-Петербурга"
            titleClass="section-title_search"
          />
          <SectionSubtitle
            titleText="Вы можете снять рабочее место в одном из коворкингов Санкт-Петербурга, представленных в нашем каталоге"
            titleClass="section-subtitle_search"
          />
          <SearchForm handleUpdateCoworkings={handleUpdateCoworkings} />
          <MainMap points={mapPoints} defaultState={defaultState} />
          <PointsList
            isListed
            coworkingsArray={coworkingsArray}
            handleMoreClick={handleMoreClick}
            isMoreButtonVisible={isMoreButtonVisible}
          />
        </>
      )}
    </main>
  );
};
