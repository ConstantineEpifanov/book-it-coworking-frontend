import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import "./CoworkingList.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
import { MainMap } from "../Map/Map";
import SearchForm from "../Forms/SearchForm/SearchForm";

import { points, defaultState } from "../../config/mapOptions";
import { getLocations } from "../../utils/Api";

export const CoworkingList = () => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);

  useEffect(() => {
    getLocations()
      .then((res) => {
        setCoworkingsArray(res);
      })
      .catch(() => {});
  }, []);

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
      <MainMap points={points} defaultState={defaultState} />
      <PointsList isListed isCompact={false} pointsRender={coworkingsArray} />
    </main>
  );
};

// CoworkingList.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       subtitle: PropTypes.string,
//       about: PropTypes.string,
//       rating: PropTypes.string,
//       lowPrice: PropTypes.number,
//       mainPhoto: PropTypes.string,
//       extraPhoto: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.number.isRequired,
//           url: PropTypes.string,
//         }),
//       ),
//       address: PropTypes.string,
//       metro: PropTypes.string,
//       openTime: PropTypes.number,
//       closeTime: PropTypes.number,
//       generalQuantity: PropTypes.number,
//       meetingQuantity: PropTypes.number,
//     }),
//   ),
// };

// CoworkingList.defaultProps = {
//   data: [],
// };
