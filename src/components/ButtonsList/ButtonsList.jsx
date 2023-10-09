import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./ButtonsList.scss";
import Button from "../UI-kit/Button/Button";

export const ButtonsList = ({
  listType = "time-ranges",
  itemsList = [],
  isEnabled = true,
  disabledItemsList = [],
  ariaLabel = "Список кнопок",
  listClassName = "",
  itemsClassName = "",
}) => {
  const [itemsStatesList, setItemsStatesList] = useState([]);

  useEffect(() => {
    if (isEnabled) {
      setItemsStatesList([...itemsList]);
      return;
    }

    setItemsStatesList(
      itemsList.map((item) => ({ ...item, isEnabled: false })),
    );
  }, [itemsList, isEnabled]);

  useEffect(() => {
    if (disabledItemsList.length > 0) {
      setItemsStatesList(
        itemsStatesList.map(
          (item) =>
            !disabledItemsList.some(
              (disabledItem) => item.id === disabledItem.id,
            ),
        ),
      );
    }
  }, [disabledItemsList, itemsStatesList]);

  return (
    <section className="buttons-list" aria-label={ariaLabel}>
      <ul
        className={`buttons-list__container buttons-list__container_type_${listType}${
          listClassName ? ` ${listClassName}` : ""
        }`}
      >
        {itemsStatesList.map(
          ({ id, name, onClick, isEnabled: isButtonEnabled }) => (
            <li key={`item${id}`} className="buttons-list__item">
              <Button
                key={`button${id}`}
                btnClass={`buttons-list__button button_type_buttons-list button_type_transparent${
                  itemsClassName ? ` ${itemsClassName}` : ""
                }`}
                btnType="button"
                btnText={name}
                onClick={() => onClick(id)}
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
  disabledItemsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
  ariaLabel: PropTypes.string,
  listClassName: PropTypes.string,
  itemsClassName: PropTypes.string,
};

ButtonsList.defaultProps = {
  listType: "time-ranges",
  itemsList: [],
  isEnabled: true,
  disabledItemsList: [],
  ariaLabel: "Список кнопок",
  listClassName: "",
  itemsClassName: "",
};
