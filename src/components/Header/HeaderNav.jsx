import React from "react";
// import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";

import imgProfile from "../../images/profile-icons/profile-icon-header.svg";
import Button from "../UI-kit/Button/Button";
import { headerActiveLinkClass } from "../../utils/constants";
import { CurrentUserContext } from "../../contexts/currentUserContext";

export const HeaderNav = () => {
  const { currentUser, isLoggedIn, handleOpenPopup } =
    React.useContext(CurrentUserContext);
  const location = useLocation();

  return isLoggedIn ? (
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
        {currentUser && currentUser.last_name && (
          <p className="header__profile_nav-info">{`${
            currentUser.first_name
          } ${currentUser.last_name.substring(0, 1)}.`}</p>
        )}
      </NavLink>
    </div>
  ) : (
    <Link to="/popup/login" state={{ previousLocation: location }}>
      <Button
        btnClass="button_size_small-s button_type_transparent"
        btnText="Войти"
        onClick={handleOpenPopup}
      />
    </Link>
  );
};

// HeaderNav.propTypes = {
//   currentUser: PropTypes.shape({
//     id: PropTypes.number,
//     email: PropTypes.string,
//     first_name: PropTypes.string,
//     last_name: PropTypes.string,
//   }),
//   isLoggedIn: PropTypes.bool,
//   // onOpenPopup: PropTypes.func,
//   // onLogout: PropTypes.func,
// };

// HeaderNav.defaultProps = {
//   currentUser: {
//     id: null,
//     email: "",
//     first_name: "Spot",
//     last_name: "Spot",
//   },
//   isLoggedIn: false,
//   // onOpenPopup: () => {},
//   // onLogout: () => {},
// };
export default HeaderNav;
