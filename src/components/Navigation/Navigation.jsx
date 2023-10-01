/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

function Navigation() {
  const activeLinkClass = "navigation__link navigation__link_active";
  const inativeLinkClass = "navigation__link";

  return (
    <nav className="navigation">
      <div className="navigation__item">
        <NavLink
          to="/t"
          className={({ isActive }) =>
            isActive ? activeLinkClass : inativeLinkClass
          }
        >
          Коворкинги
        </NavLink>
        <NavLink
          to="/tr"
          className={({ isActive }) =>
            isActive ? activeLinkClass : inativeLinkClass
          }
        >
          Правила и вопросы
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? activeLinkClass : inativeLinkClass
          }
        >
          Контакты
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
