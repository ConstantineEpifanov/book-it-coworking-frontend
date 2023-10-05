import React from "react";
import PropTypes from "prop-types";
import "./CoworkingList.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
// import { MainMap } from "../Map/Map";
import SearchForm from "../Forms/SearchForm/SearchForm";

export const CoworkingList = ({ data }) => (
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
    <PointsList isListed isCompact={false} data={data} />
  </main>
);

CoworkingList.propTypes = {
  data: PropTypes.arrayOf,
};

CoworkingList.defaultProps = {
  data: undefined,
};
