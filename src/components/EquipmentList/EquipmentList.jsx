import React from "react";
import PropTypes from "prop-types";
import "./EquipmentList.scss";
import { EquipmentItem } from "../EquipmentItem/EquipmentItem";

export const EquipmentList = ({ equipment }) => (
  <ul className="equipment-list">
    {equipment?.map((item) => (
      <li>
        <EquipmentItem title={item.title} data={item.data} />
      </li>
    ))}
  </ul>
);
EquipmentList.propTypes = {
  equipment: PropTypes.arrayOf,
};

EquipmentList.defaultProps = {
  equipment: undefined,
};
