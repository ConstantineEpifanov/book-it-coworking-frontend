/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import "./CoworkingList.scss";
import { Loader } from "../Loader/Loader";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
import { MainMap } from "../Map/Map";
import SearchForm from "../Forms/SearchForm/SearchForm";

import { defaultState } from "../../config/mapOptions";
import usePagination from "../../hooks/usePagination";

import { searchLocations, getMapLocations } from "../../utils/Api";

import {
  NOT_FOUND_ERROR_TITLE,
  NOT_FOUND_ERROR_SUBTITLE,
} from "../../utils/constants";

import { NotFoundError } from "../NotFoundError/NotFoundError";

export const CoworkingList = () => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [isNotFoundError, setIsNotFoundError] = useState(false);
  const [mapPoints, setMapPoints] = useState([]);
  const { isLoading, setIsLoading } = useContext(CurrentUserContext);
  const { initialLimit, limit, offset, nextPage } = usePagination();

  const location = useLocation();

  const coworkingsFromPromo = location.state
    ? location.state.coworkingsFromPromo
    : undefined;

  const getLocations = (offsetParameter, limitParameter, nameParameter) => {
    searchLocations({
      name: nameParameter,
      offset: offsetParameter,
      limit: limitParameter,
    })
      .then((res) => {
        setCoworkingsArray((prevCoworkings) => [
          ...prevCoworkings,
          ...res.results,
        ]);
        setNextPageURL(res.next);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchData = () => {
    setIsLoading(true);
    const mapLocationsPromise = getMapLocations()
      .then((res) => {
        setMapPoints(res);
      })
      .catch(() => {});

    Promise.all([getLocations(offset, initialLimit), mapLocationsPromise])
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleUpdateCoworkings = (data) => {
    setCoworkingsArray(data.results);
    setNextPageURL(data.next);
  };

  useEffect(() => {
    const lastSearchRequest = localStorage.getItem("lastSearchRequest") || "";
    if (lastSearchRequest) getLocations(offset, limit, lastSearchRequest);
    else if (
      coworkingsFromPromo &&
      Array.isArray(coworkingsFromPromo.results) &&
      coworkingsFromPromo.results.length > 0
    ) {
      setCoworkingsArray(coworkingsFromPromo.results);
      setNextPageURL(coworkingsFromPromo.next);
    } else fetchData();
  }, []);

  useEffect(() => {
    if (initialLimit !== limit) getLocations(offset, limit);
  }, [limit, offset, initialLimit]);

  useEffect(() => {
    setIsNotFoundError(coworkingsArray.length === 0);
  }, [coworkingsArray]);

  return (
    <main className="coworking-list">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SectionTitle
            titleText="Поиск по коворкингам сети SPOT IT"
            titleClass="section-title_search"
          />
          <SectionSubtitle
            titleText="Вы можете снять рабочее место в одном из коворкингов, представленных в нашем каталоге"
            titleClass="section-subtitle_search"
          />

          <SearchForm
            handleUpdateCoworkings={handleUpdateCoworkings}
            limit={limit}
            offset={offset}
          />

          {isNotFoundError ? (
            <NotFoundError
              titleText={NOT_FOUND_ERROR_TITLE}
              subtitleText={NOT_FOUND_ERROR_SUBTITLE}
            />
          ) : (
            <>
              <MainMap points={mapPoints} defaultState={defaultState} />
              <PointsList
                isListed
                coworkingsArray={coworkingsArray}
                handleMoreClick={nextPage}
                isMoreButtonVisible={!!nextPageURL}
              />
            </>
          )}
        </>
      )}
    </main>
  );
};
