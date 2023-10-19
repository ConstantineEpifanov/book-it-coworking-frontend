import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./ButtonsList.scss";
import Button from "../UI-kit/Button/Button";

const defaultSort = (a, b) => a.name.localeCompare(b.name);

export const ButtonsList = ({
  listType = "time-ranges",
  itemsList = [],
  isEnabled = true,
  isMultiselect = false,
  isSelectByRanges = true,
  allowedRanges = [],
  ariaLabel = "Список кнопок",
  listClassName = "",
  itemsClassName = "",
  extraRules = null,
  sortFunc = defaultSort,
}) => {
  const [baseItemsList, setBaseItemsList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsStatesList, setItemsStatesList] = useState([]);

  const followAllowedRules = (item, currentSelected) => {
    const sharedRanges = allowedRanges.filter((range) =>
      currentSelected.every((selectedItem) => range.includes(selectedItem.id)),
    );

    const resultStatesList = baseItemsList.map((baseItem) => {
      let isEnabledStatus = baseItem.isEnabled;

      if (currentSelected.length > 0) {
        isEnabledStatus =
          !!currentSelected.find(
            (selectedItem) => selectedItem.id === baseItem.id,
          ) ||
          currentSelected.every((selectedItem) =>
            sharedRanges.some(
              (range) =>
                range.includes(baseItem.id) && range.includes(selectedItem.id),
            ),
          );
      }
      return {
        ...baseItem,
        isEnabled: isEnabledStatus,
      };
    });

    setItemsStatesList(resultStatesList);
    return resultStatesList;
  };

  const getClassName = (id) => {
    let resultClass = `buttons-list__button button_type_buttons-list button_type_transparent${
      itemsClassName ? ` ${itemsClassName}` : ""
    }`;

    if (selectedItems.find((item) => item.id === id)) {
      resultClass += " button_type_buttons-list-selected";
    }

    return resultClass;
  };

  const getAutoSelectedItems = (
    currentSelectedItems,
    currentItemsStatusList,
  ) => {
    let currentSelected = [...currentSelectedItems].sort(sortFunc);
    const firstSelectedElementIndex = currentItemsStatusList.findIndex(
      (item) => item.id === currentSelected[0].id,
    );

    return currentItemsStatusList
      .slice(firstSelectedElementIndex)
      .reduce((result, item) => {
        if (currentSelected.find((currentItem) => currentItem.id === item.id)) {
          result.push(item);
          currentSelected = currentSelected.filter(
            (selectedItem) => selectedItem.id !== item.id,
          );

          return result;
        }
        if (item.isEnabled && currentSelected.length > 0) {
          result.push(item);
        }
        return result;
      }, []);
  };

  const handleClick = (item, onClick) => {
    let resultSelected = [];
    let currentItemsStatusList = itemsStatesList;
    const isAlreadySelected = !!selectedItems.find(
      (selectedItem) => item.id === selectedItem.id,
    );

    if (isAlreadySelected && isSelectByRanges) {
      resultSelected = [];
    } else if (isAlreadySelected) {
      resultSelected = selectedItems.filter(
        (selectedItem) => selectedItem.id !== item.id,
      );
    } else {
      resultSelected = [...selectedItems, item];
    }

    if (allowedRanges.length > 0 || !isMultiselect) {
      currentItemsStatusList = followAllowedRules(item, resultSelected);
    }

    if (isSelectByRanges && resultSelected.length > 1) {
      resultSelected = getAutoSelectedItems(
        resultSelected,
        currentItemsStatusList,
      );
    }
    setSelectedItems(resultSelected);

    onClick(resultSelected);
  };

  useEffect(() => {
    if (extraRules && selectedItems.length > 0) {
      const resultItemsStates = itemsStatesList.map((item) => ({
        ...item,
        isEnabled: !extraRules.some((checkRule) =>
          checkRule(item, selectedItems),
        ),
      }));
      setItemsStatesList(resultItemsStates);
    }
  }, [selectedItems, extraRules, itemsStatesList]);

  useEffect(() => {
    const resultItemsList = [...itemsList].sort(sortFunc);
    setBaseItemsList(resultItemsList);
    if (isEnabled) {
      setItemsStatesList([...resultItemsList]);
      return;
    }

    setItemsStatesList(
      resultItemsList.map((item) => ({ ...item, isEnabled: false })),
    );
    setSelectedItems([]);
  }, [itemsList, isEnabled, sortFunc]);

  return (
    <section className="buttons-list" aria-label={ariaLabel}>
      <ul
        className={`buttons-list__container buttons-list__container_type_${listType}${
          listClassName ? ` ${listClassName}` : ""
        }`}
      >
        {itemsStatesList.map((item) => {
          const { id, name, onClick, isEnabled: isButtonEnabled } = item;
          return (
            <li key={`${name}-item-${id}`} className="buttons-list__item">
              <Button
                key={`${name}-button-${id}`}
                btnClass={getClassName(id)}
                btnType="button"
                btnText={name}
                onClick={() => handleClick(item, onClick)}
                isValidBtn={isButtonEnabled}
              />
            </li>
          );
        })}
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
  isSelectByRanges: PropTypes.bool,
  allowedRanges: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  ariaLabel: PropTypes.string,
  listClassName: PropTypes.string,
  itemsClassName: PropTypes.string,
  extraRules: PropTypes.arrayOf(PropTypes.func),
  sortFunc: PropTypes.func,
};

ButtonsList.defaultProps = {
  listType: "time-ranges",
  itemsList: [],
  isEnabled: true,
  isMultiselect: false,
  isSelectByRanges: true,
  allowedRanges: [],
  ariaLabel: "Список кнопок",
  listClassName: "",
  itemsClassName: "",
  extraRules: null,
  sortFunc: defaultSort,
};
