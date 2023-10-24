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
  const {
    initialLimit,
    limit,
    offset,
    goToNextPage,
    resetPagination,
    requestApproved,
    setRequestApproved,
  } = usePagination();

  const location = useLocation();

  const coworkingsFromPromo = location.state
    ? location.state.coworkingsFromPromo
    : undefined;

  const getLocations = (offsetParameter, limitParameter, search) => {
    const params = {
      offset: offsetParameter,
      limit: limitParameter,
    };

    if (search) {
      params.search = search;
    }

    searchLocations(params)
      .then((res) => {
        setCoworkingsArray((prevCoworkings) => [
          ...prevCoworkings,
          ...res.results,
        ]);
        setNextPageURL(res.next);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUpdateCoworkings = (data) => {
    setCoworkingsArray(data.results);
    setNextPageURL(data.next);
  };

  useEffect(() => {
    getMapLocations()
      .then((res) => {
        setMapPoints(res);
      })
      .catch((error) => {
        console.error("Error loading map locations:", error);
      });
  }, []);

  useEffect(() => {
    const lastSearchRequest = sessionStorage.getItem("lastSearchRequest") || "";

    if (lastSearchRequest) {
      setIsLoading(true);
      getLocations(offset, limit, lastSearchRequest);
    } else if (
      coworkingsFromPromo &&
      Array.isArray(coworkingsFromPromo.results) &&
      coworkingsFromPromo.results.length > 0
    ) {
      setCoworkingsArray(coworkingsFromPromo.results);
      setNextPageURL(coworkingsFromPromo.next);
    } else {
      setIsLoading(true);
      getLocations(offset, initialLimit);
    }
  }, []);

  useEffect(() => {
    if (requestApproved) {
      getLocations(offset, limit);
      setRequestApproved(false);
    }
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
            metroArray={[...new Set(mapPoints.map((item) => item.metro))] || []}
            handleUpdateCoworkings={handleUpdateCoworkings}
            limit={limit}
            offset={offset}
            resetPagination={resetPagination}
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
                handleMoreClick={goToNextPage}
                isMoreButtonVisible={!!nextPageURL}
              />
            </>
          )}
        </>
      )}
    </main>
  );
};
