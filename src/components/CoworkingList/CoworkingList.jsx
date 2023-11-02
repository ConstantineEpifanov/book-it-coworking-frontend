/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState, useRef } from "react";
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

import { useResize } from "../../hooks/useResize";
import Button from "../UI-kit/Button/Button";

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

  const { isScreenSmall, isScreenMedium } = useResize();
  const isMobile = isScreenSmall || isScreenMedium;

  const [isMap, setMap] = useState(false);
  const [isFiltersShown, setFiltersShown] = useState(false);
  const mapRef = useRef(null);

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

  const handleShowFiltersClick = () => {
    setFiltersShown(!isFiltersShown);
  };

  const handleMapButtonClick = () => {
    setMap(!isMap);
    if (!isMap) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="coworking-list">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SectionTitle
            titleText="Поиск по&#160;коворкингам сети SPOT&#160;IT"
            titleClass="section-title_location_coworking-list-search"
          />
          <SectionSubtitle
            titleText="Вы&#160;можете снять рабочее место в&#160;одном из&#160;наших коворкингов, представленных в&#160;каталоге"
            titleClass="section-subtitle_search section-subtitle_location_coworking-list-search"
          />

          <SearchForm
            metroArray={[...new Set(mapPoints.map((item) => item.metro))] || []}
            handleUpdateCoworkings={handleUpdateCoworkings}
            limit={limit}
            offset={offset}
            resetPagination={resetPagination}
            isFiltersShown={isFiltersShown}
          />
          <div className="entry-form__buttons-container">
            {" "}
            {isMobile && (
              <Button
                onClick={handleShowFiltersClick}
                btnClass="button_type_show-filters"
                btnText={
                  !isFiltersShown ? "Показать фильтры" : "Скрыть фильтры"
                }
              />
            )}
            <Button
              onClick={handleMapButtonClick}
              btnClass={`button_type_tertiary-map${
                isMap ? " button_type_tertiary-map-shown" : ""
              }`}
              btnText={isMap ? "Скрыть карту" : "Показать карту"}
            />
          </div>
          {isNotFoundError ? (
            <NotFoundError
              titleText={NOT_FOUND_ERROR_TITLE}
              subtitleText={NOT_FOUND_ERROR_SUBTITLE}
            />
          ) : (
            <>
              <MainMap
                points={mapPoints}
                defaultState={defaultState}
                isMap={isMap}
                mapRef={mapRef}
              />
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
