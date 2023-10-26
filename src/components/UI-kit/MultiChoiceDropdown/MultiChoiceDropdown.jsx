import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./MultiChoiceDropdown.scss";

const MultiChoiceDropdown = ({
  dropdownName,
  dropdownTitle,
  array,
  size,
  handleSelectChange,
}) => {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleItem = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((i) => i !== item)
        : [...prevSelected, item],
    );
  };

  useEffect(() => {
    handleSelectChange({ [dropdownName]: selectedItems });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      const charCode = str.charCodeAt(i);
      hash = 2 ** 5 - hash + charCode;
      hash = Number(hash);
    }
    return hash;
  }

  return (
    <section
      ref={dropdownRef}
      className={`dropdown dropdown_size_${size}`}
      aria-label={`Filter by ${dropdownTitle}`}
    >
      <div
        className={`dropdown__items dropdown__items_size_${size} ${
          open && "dropdown__items_active"
        }`}
      >
        <div className="dropdown__label">
          <p className="dropdown__label-text">
            {!selectedItems || !selectedItems.length
              ? dropdownTitle
              : selectedItems.join(", ")}
          </p>
          <button
            type="button"
            className={`dropdown__label-button ${
              open && "dropdown__label-button_active"
            }`}
            onClick={() => setOpen(!open)}
            tabIndex={0}
            aria-label="Toggle dropdown menu"
          />
        </div>
        {open && (
          <div className="dropdown__popup">
            <ul className="dropdown__popup-list">
              {array.map((item) => (
                <button
                  key={simpleHash(item)}
                  onClick={() => toggleItem(item)}
                  type="button"
                  className={`dropdown__item ${
                    selectedItems.includes(item)
                      ? "dropdown__item_selected"
                      : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

MultiChoiceDropdown.propTypes = {
  dropdownTitle: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.string,
  handleSelectChange: PropTypes.func.isRequired,
  dropdownName: PropTypes.string.isRequired,
};

MultiChoiceDropdown.defaultProps = {
  size: "",
};

export default MultiChoiceDropdown;
