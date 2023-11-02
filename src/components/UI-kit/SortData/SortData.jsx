import PropTypes from "prop-types";
import React from "react";

import "./SortData.scss";

const SortData = ({
  extraClass,
  titleSort,
  array,
  size,
  handleSelectChange,
  selectName,
}) => {
  const sortRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [sort, setSort] = React.useState("");

  const onClickListItem = (obj) => {
    const newSort = obj.text === sort ? "" : obj.text;
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

  return (
    <section
      ref={sortRef}
      className={`sort  sort_size-${size} ${extraClass}`}
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
                  className={`sort__popup_list-active ${
                    data.text === sort ? "sort__popup_list-selected" : ""
                  }`}
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
  extraClass: PropTypes.string,
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
};

SortData.defaultProps = {
  extraClass: "",
  size: "",
  array: [{ icon: {} }],
};

export default SortData;
