import React from "react";
import PropTypes from "prop-types";
import "./EquipmentItem.scss";

export const EquipmentItem = ({ title, data }) =>
  data.length !== 0 && (
    <div className="equipment-item">
      <h4 className="equipment-item__title">{title}</h4>
      <ul className="equipment-item__list">
        {data?.map((item) => (
          <li key={item.id} className="equipment-item__list-item">
            <img
              className="equipment-item__img"
              src={`http://185.41.160.27/media/${item.icon}`}
              alt=""
            />
            <p className="equipment-item__text">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

EquipmentItem.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

EquipmentItem.defaultProps = {
  title: undefined,
  data: undefined,
};
