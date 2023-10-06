import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CoworkingList.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
import { MainMap } from "../Map/Map";
import SearchForm from "../Forms/SearchForm/SearchForm";
import Button from "../UI-kit/Button/Button";

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
      <MainMap isActive={isMap} />
      <PointsList isListed isCompact={false} data={data} />
    </main>
  );
};

CoworkingList.propTypes = {
  data: PropTypes.arrayOf,
};

CoworkingList.defaultProps = {
  data: undefined,
};
