/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";
import { activeLinkClass } from "../../utils/constants";
import { HeaderNav } from "../Header/HeaderNav";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__item">
          <NavLink
            to="/points"
            className={({ isActive }) =>
              isActive ? activeLinkClass : "navigation__link"
            }
          >
            Коворкинги
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? activeLinkClass : "navigation__link"
            }
          >
            Правила и вопросы
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? activeLinkClass : "navigation__link"
            }
          >
            Контакты
          </NavLink>
        </div>
      </nav>
      <HeaderNav />
    </>
  );
}

export default Navigation;
