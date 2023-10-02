import React from "react";
import PropTypes from "prop-types";
import "./EquipmentList.scss";
import { EquipmentItem } from "../EquipmentItem/EquipmentItem";

export const EquipmentList = ({ array }) => (
  <ul className="equipment-list">
    {array?.map((item) => (
      <li>
        <EquipmentItem title={item.title} data={item.data} />
      </li>
    ))}
  </ul>
);
EquipmentList.propTypes = {
  array: PropTypes.arrayOf,
};

EquipmentList.defaultProps = {
  array: undefined,
};
