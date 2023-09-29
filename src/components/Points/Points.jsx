import React from "react";
import PropTypes from "prop-types";

import { SectionTitle } from "../SectionTitle/SectionTitle";
import { PointsItem } from "../PointsItem/PointsItem";
import Button from "../UI-kit/Button/Button";

export const Points = ({ data }) => (
  <section className="points">
    <SectionTitle titleText="Наши коворкинги" />
    <ul className="points__list">
      {data?.map(() => (
        <li>
          <PointsItem />
        </li>
      ))}
    </ul>
    {data && (
      <Button
        btnClass="button_type_transparent button_size_large"
        btnText="Больше локаций"
      />
    )}
  </section>
);

Points.propTypes = {
  data: PropTypes.node,
};

Points.defaultProps = {
  data: undefined,
};
