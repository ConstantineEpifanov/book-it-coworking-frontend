import PropTypes from "prop-types";
import React, { useEffect } from "react";

import "./SortData.scss";
import clsx from "clsx";

const SortData = ({
  titleSort,
  array,
  size,
  handleSelectChange,
  selectName,
  className,
  shouldDropSelected = false,
}) => {
  const sortRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [sort, setSort] = React.useState("");

  const onClickListItem = (obj) => {
    const newSort = obj.text === "--" ? "" : obj.text;
    setSort(newSort);
    handleSelectChange({ [selectName]: newSort });
    setOpen(false);
  };

  // закрытие по оверлею
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  // Сброс выбора
  useEffect(() => {
    if (shouldDropSelected) {
      setSort("");
    }
  }, [shouldDropSelected]);

  return (
    <section
      ref={sortRef}
      className={clsx({
        sort: true,
        [`sort_size-${size}`]: size,
        [className]: className,
      })}
      aria-label={`фильтр коворкингов ${titleSort} `}
    >
      <div
        className={`sort__items sort__items_size-${size} ${
          open && "sort__items_active"
        } `}
      >
        <div className="sort__label">
          <p className="sort__label_text">{!sort ? titleSort : sort}</p>
          <button
            type="button"
            className={`sort__label_button   ${
              open && "sort__label_button-active"
            } `}
            onClick={() => setOpen(!open)}
            tabIndex={0}
            aria-label="кнопка открытия выпадающего меню"
          />
        </div>
        {open && (
          <div className="sort__popup">
            <ul className="sort__popup_list">
              {array.map((data) => (
                <button
                  key={data.id}
                  onClick={() => onClickListItem(data)}
                  className="sort__popup_list-active"
                >
                  {data.icon}
                  {data.text}
                </button>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

SortData.propTypes = {
  titleSort: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.shape({}),
    }),
  ),
  size: PropTypes.string,
  handleSelectChange: PropTypes.func.isRequired,
  selectName: PropTypes.string.isRequired,
  className: PropTypes.string,
  shouldDropSelected: PropTypes.bool,
};

SortData.defaultProps = {
  size: "",
  array: [{ icon: {} }],
  className: "",
  shouldDropSelected: false,
};

export default SortData;
