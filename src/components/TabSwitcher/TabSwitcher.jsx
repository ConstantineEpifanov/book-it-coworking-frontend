import React, { useState } from "react";
import PropTypes from "prop-types";

import "./TabSwitcher.scss";

export const TabSwitcher = ({
  firstCaption = "",
  secondCaption = "",
  onClick = null,
  containerClassName = "",
  itemClassName = "",
}) => {
  const [selectedItem, setSelectedItem] = useState(firstCaption);

  const handleClick = (item) => {
    setSelectedItem(item);

    if (onClick) {
      onClick(item);
    }
  };

  const getContainerClassName = () => {
    let resultClassName = `tab-switcher${
      containerClassName ? ` ${containerClassName}` : ""
    }`;

    if (selectedItem === secondCaption) {
      resultClassName += " tab-switcher_second-selected";
    }

    return resultClassName;
  };

  const getItemClassName = (item) => {
    let resultClassName = "tab-switcher__item";

    if (item === selectedItem) {
      resultClassName += ` ${resultClassName}_active`;
    }

    if (itemClassName) {
      resultClassName += ` ${itemClassName}`;
    }

    return resultClassName;
  };

  return (
    <ul className={getContainerClassName()}>
      <li>
        <button
          type="button"
          className={getItemClassName(firstCaption)}
          onClick={() => handleClick(firstCaption)}
        >
          {firstCaption}
        </button>
      </li>
      <li>
        <button
          type="button"
          className={getItemClassName(secondCaption)}
          onClick={() => handleClick(secondCaption)}
        >
          {secondCaption}
        </button>
      </li>
    </ul>
  );
};

TabSwitcher.propTypes = {
  firstCaption: PropTypes.string,
  secondCaption: PropTypes.string,
  onClick: PropTypes.func,
  containerClassName: PropTypes.string,
  itemClassName: PropTypes.string,
};

TabSwitcher.defaultProps = {
  firstCaption: "",
  secondCaption: "",
  onClick: null,
  containerClassName: "",
  itemClassName: "",
};
