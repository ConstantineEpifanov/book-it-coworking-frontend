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

export const CoworkingList = () => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);
  const [nextPageURL, setNextPageURL] = useState(null);
  const [mapPoints, setMapPoints] = useState([]);
  const { isLoading, setIsLoading } = useContext(CurrentUserContext);
  const location = useLocation();

  const coworkingsFromPromo = location.state
    ? location.state.coworkingsFromPromo
    : undefined;

  const { initialLimit, limit, offset, nextPage } = usePagination();

  const getLocations = (offsetParameter, limitParameter, nameParamerer) => {
    searchLocations({
      name: nameParamerer,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (initialLimit !== limit) getLocations(offset, limit);
  }, [limit, offset, initialLimit]);

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
            titleText="Вы можете снять рабочее место в одном из коворкингов, представленных в нашем каталоге"
            titleClass="section-subtitle_search"
          />
          <SearchForm
            handleUpdateCoworkings={handleUpdateCoworkings}
            limit={limit}
            offset={offset}
          />
          <MainMap points={mapPoints} defaultState={defaultState} />
          <PointsList
            isListed
            coworkingsArray={coworkingsArray}
            handleMoreClick={nextPage}
            isMoreButtonVisible={!!nextPageURL}
          />
        </>
      )}
    </main>
  );
};
