import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./ButtonsList.scss";
import Button from "../UI-kit/Button/Button";

export const ButtonsList = ({
  listType = "time-ranges",
  itemsList = [],
  isEnabled = true,
  isMultiselect = false,
  allowedRanges = [],
  ariaLabel = "Список кнопок",
  listClassName = "",
  itemsClassName = "",
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsStatesList, setItemsStatesList] = useState([]);

  const followAllowedRules = (id, currentSelected) => {
    const sharedRanges = allowedRanges.filter((range) => range.includes(id));

    setItemsStatesList(
      itemsList.map((item) => {
        let isEnabledStatus = item.isEnabled;

        if (currentSelected.length > 0) {
          isEnabledStatus =
            currentSelected.includes(item.id) ||
            currentSelected.every((selectedItem) =>
              sharedRanges.some(
                (range) =>
                  range.includes(item.id) && range.includes(selectedItem),
              ),
            );
        }
        return {
          ...item,
          isEnabled: isEnabledStatus,
        };
      }),
    );
  };

  const getClassName = (id) => {
    let resultClass = `buttons-list__button button_type_buttons-list button_type_transparent${
      itemsClassName ? ` ${itemsClassName}` : ""
    }`;

    if (selectedItems.includes(id)) {
      resultClass += " button_type_buttons-list-selected";
    }

    return resultClass;
  };

  const handleClick = (id, onClick) => {
    let resultSelected = [];
    if (selectedItems.includes(id)) {
      resultSelected = selectedItems.filter((itemId) => itemId !== id);
    } else {
      resultSelected = [...selectedItems, id];
    }
    setSelectedItems(resultSelected);

    if (allowedRanges.length > 0 || !isMultiselect) {
      followAllowedRules(id, resultSelected);
    }
    onClick(resultSelected);
  };

  useEffect(() => {
    if (isEnabled) {
      setItemsStatesList([...itemsList]);
      return;
    }

    setItemsStatesList(
      itemsList.map((item) => ({ ...item, isEnabled: false })),
    );
    setSelectedItems([]);
  }, [itemsList, isEnabled]);

  return (
    <section className="buttons-list" aria-label={ariaLabel}>
      <ul
        className={`buttons-list__container buttons-list__container_type_${listType}${
          listClassName ? ` ${listClassName}` : ""
        }`}
      >
        {itemsStatesList.map(
          ({ id, name, onClick, isEnabled: isButtonEnabled }) => (
            <li key={`${name}-item-${id}`} className="buttons-list__item">
              <Button
                key={`${name}-button-${id}`}
                btnClass={getClassName(id)}
                btnType="button"
                btnText={name}
                onClick={() => handleClick(id, onClick)}
                isValidBtn={isButtonEnabled}
              />
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

ButtonsList.propTypes = {
  listType: PropTypes.oneOf(["time-ranges", "spots", "meeting-rooms"]),
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      onClick: PropTypes.func,
      isEnabled: PropTypes.bool,
    }),
  ),
  isEnabled: PropTypes.bool,
  isMultiselect: PropTypes.bool,
  allowedRanges: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  ariaLabel: PropTypes.string,
  listClassName: PropTypes.string,
  itemsClassName: PropTypes.string,
};

ButtonsList.defaultProps = {
  listType: "time-ranges",
  itemsList: [],
  isEnabled: true,
  isMultiselect: false,
  allowedRanges: [],
  ariaLabel: "Список кнопок",
  listClassName: "",
  itemsClassName: "",
};
