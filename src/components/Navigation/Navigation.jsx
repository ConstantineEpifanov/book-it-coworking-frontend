import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";
import { activeLinkClass } from "../../utils/constants";
import { HeaderNav } from "../Header/HeaderNav";

function Navigation({ isToggle, setIsToggle }) {
  const handleClickCloseNav = () => (isToggle ? setIsToggle(false) : "");

  return (
    <>
      <nav className="navigation">
        <div className="navigation__item">
          <NavLink
            to="/points"
            onClick={() => {
              handleClickCloseNav();
            }}
            className={({ isActive }) =>
              isActive ? activeLinkClass : "navigation__link"
            }
          >
            Коворкинги
          </NavLink>
          <NavLink
            to="/faq"
            onClick={() => {
              handleClickCloseNav();
            }}
            className={({ isActive }) =>
              isActive ? activeLinkClass : "navigation__link"
            }
          >
            Правила и вопросы
          </NavLink>
          <NavLink
            to="/contacts"
            onClick={() => {
              handleClickCloseNav();
            }}
            className={({ isActive }) =>
              isActive ? activeLinkClass : "navigation__link"
            }
          >
            Контакты
          </NavLink>
        </div>
      </nav>
      <HeaderNav handleClickCloseNav={handleClickCloseNav} />
    </>
  );
}

Navigation.propTypes = {
  isToggle: PropTypes.bool,
  setIsToggle: PropTypes.func,
};

Navigation.defaultProps = {
  isToggle: false,
  setIsToggle: () => {},
};
export default Navigation;
