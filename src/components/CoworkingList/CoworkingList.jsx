import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CoworkingList.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
import { MainMap } from "../Map/Map";
import SearchForm from "../Forms/SearchForm/SearchForm";
import Button from "../UI-kit/Button/Button";

import { points, defaultState } from "../../config/mapOptions";

export const CoworkingList = ({ data }) => {
  const [isMap, setMap] = useState(false);

  const handleMapButtonClick = () => {
    setMap(!isMap);
  };

  return (
    <main className="coworking-list">
      <SectionTitle
        titleText="Поиск по коворкингам Санкт-Петербурга"
        titleClass="section-title_search"
      />
      <SectionSubtitle
        titleText="Вы можете снять рабочее место в одном из коворкингов Санкт-Петербурга, представленых в нашем каталоге"
        titleClass="section-subtitle_search"
      />
      <SearchForm />
      <Button
        onClick={handleMapButtonClick}
        btnClass="button_type_tertiary"
        btnText="Показать на карте"
      />
      <MainMap isActive={isMap} points={points} defaultState={defaultState} />
      <PointsList isListed isCompact={false} data={data} />
    </main>
  );
};

CoworkingList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      about: PropTypes.string,
      rating: PropTypes.string,
      lowPrice: PropTypes.number,
      mainPhoto: PropTypes.string,
      extraPhoto: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          url: PropTypes.string,
        }),
      ),
      address: PropTypes.string,
      metro: PropTypes.string,
      openTime: PropTypes.number,
      closeTime: PropTypes.number,
      generalQuantity: PropTypes.number,
      meetingQuantity: PropTypes.number,
    }),
  ),
};

CoworkingList.defaultProps = {
  data: [],
};
