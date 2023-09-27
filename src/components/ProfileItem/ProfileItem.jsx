import React from "react";
import PropTypes from "prop-types";
import "./ProfileItem.scss";

export const ProfileItem = ({ svgElement, title }) => (
  <div className="profile-item">
    <div className="profile-item__row">
      {svgElement}
      <h2 className="profile-item__title">{title}</h2>
    </div>
    <p className="profile-item__link">Настроить</p>
  </div>
);
ProfileItem.propTypes = {
  svgElement: PropTypes.element,
  title: PropTypes.string,
};

ProfileItem.defaultProps = {
  svgElement: undefined,
  title: undefined,
};
