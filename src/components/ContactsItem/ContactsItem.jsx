import React from "react";
import PropTypes from "prop-types";
import "./ContactsItem.scss";

export const ContactsItem = ({ info, header }) => (
  <li className="contacts-item">
    <p className="contacts-item__info">{info}</p>
    <h3 className="contacts-item__header">{header}</h3>
  </li>
);

ContactsItem.propTypes = {
  info: PropTypes.string,
  header: PropTypes.string,
};

ContactsItem.defaultProps = {
  info: undefined,
  header: undefined,
};
