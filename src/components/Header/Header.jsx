import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation, NavLink } from "react-router-dom";

import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import { Logo } from "../UI-kit/Logo/Logo";
import imgProfile from "../../images/profile-icons/profile-icon-header.svg";
import Button from "../UI-kit/Button/Button";
import { headerActiveLinkClass } from "../../utils/constants";

const Header = ({ isLoggedIn, onOpenPopup, profileInfo }) => {
  const location = useLocation();
  return (
    <header className="header">
      <Link to="/">
        <Logo width="102px" height="20px" />
      </Link>

      <Navigation />
      {isLoggedIn ? (
        <div className="header__profile">
          <img
            className="header__profile_img"
            src={imgProfile}
            alt="иконка пользователя"
          />
          <NavLink
            className={({ isActive }) =>
              isActive ? headerActiveLinkClass : "header__profile_nav"
            }
            to="/profile"
          >
            {profileInfo && profileInfo.last_name && (
              <p className="header__profile_nav-info">{`${
                profileInfo.first_name
              } ${profileInfo.last_name.substring(0, 1)}.`}</p>
            )}
          </NavLink>
          {/* TODO удалить после реализации  */}
          {/* <Button
            btnClass="button_size_small-s button_type_transparent"
            btnText="Выйти"
            onClick={onLogout}
          /> */}
        </div>
      ) : (
        <Link to="/popup/login" state={{ previousLocation: location }}>
          <Button
            btnClass="button_size_small-s button_type_transparent"
            btnText="Войти"
            onClick={onOpenPopup}
          />
        </Link>
      )}
    </header>
  );
};

Header.propTypes = {
  profileInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }),
  isLoggedIn: PropTypes.bool,
  onOpenPopup: PropTypes.func,
  // onLogout: PropTypes.func,
};
Header.defaultProps = {
  profileInfo: {
    id: null,
    email: "",
    first_name: "Spot",
    last_name: "Spot",
  },
  isLoggedIn: false,
  onOpenPopup: () => {},
  // onLogout: () => {},
};
export default Header;
