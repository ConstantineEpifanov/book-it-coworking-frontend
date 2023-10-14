import React from "react";
import PropTypes from "prop-types";
import "./EquipmentList.scss";
import { EquipmentItem } from "../EquipmentItem/EquipmentItem";
import {
  EQUIPMENT_GENERAL_CATEGORY,
  EQUIPMENT_MEETING_CATEGORY,
} from "../../utils/constants";

export const EquipmentList = ({ equipmentMeeting, equipmentGeneral }) => (
  <ul className="equipment-list">
    <li>
      <EquipmentItem
        data={equipmentGeneral}
        title={EQUIPMENT_GENERAL_CATEGORY}
      />
    </li>
    <li>
      <EquipmentItem
        data={equipmentMeeting}
        title={EQUIPMENT_MEETING_CATEGORY}
      />
    </li>
  </ul>
);

EquipmentList.propTypes = {
  equipmentMeeting: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  equipmentGeneral: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

EquipmentList.defaultProps = {
  equipmentMeeting: undefined,
  equipmentGeneral: undefined,
};
