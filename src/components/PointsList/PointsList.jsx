import React from "react";
import PropTypes from "prop-types";

import { PointsItem } from "../PointsItem/PointsItem";
import Button from "../UI-kit/Button/Button";
import "./PointsList.scss";

export const PointsList = ({ isCompact, isListed, data }) => {
  console.log(data);

  return (
    <>
      <ul className={`points-list ${isCompact && "points-list_compact"}`}>
        {data?.map((item) => (
          <li>
            <PointsItem isListed={isListed} isCompact={isCompact} {...item} />
          </li>
        ))}
      </ul>
      {data && (
        <Button
          btnClass="button_more button_type_transparent button_size_large"
          btnText="Больше локаций"
        />
      )}
    </>
  );
};

PointsList.propTypes = {
  data: PropTypes.arrayOf,
  isCompact: PropTypes.bool,
  isListed: PropTypes.bool,
};

PointsList.defaultProps = {
  data: undefined,
  isCompact: false,
  isListed: false,
};
