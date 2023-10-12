import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
// import PropTypes from "prop-types";
import "./CoworkingList.scss";
import { Loader } from "../Loader/Loader";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../SectionSubtitle/SectionSubtitle";
import { PointsList } from "../PointsList/PointsList";
// import { MainMap } from "../Map/Map";
import SearchForm from "../Forms/SearchForm/SearchForm";

// import { defaultState } from "../../config/mapOptions";
import { getLocations } from "../../utils/Api";

export const CoworkingList = () => {
  const [coworkingsArray, setCoworkingsArray] = useState([]);
  const { isLoading, setIsLoading } = useContext(CurrentUserContext);

  useEffect(() => {
    setIsLoading(true);
    getLocations()
      .then((res) => {
        setCoworkingsArray(res);
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMoreClick = () => {};

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
          <SearchForm />{" "}
          {/* <MainMap points={coworkingsArray} defaultState={defaultState} /> */}
          <PointsList
            isListed
            coworkingsArray={coworkingsArray}
            handleMoreClick={handleMoreClick}
          />
        </>
      )}
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
