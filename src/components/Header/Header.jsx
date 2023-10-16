import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import { Logo } from "../UI-kit/Logo/Logo";
import Button from "../UI-kit/Button/Button";

const Header = ({ isLoggedIn, onOpenPopup, onLogout, profileInfo }) => {
  const location = useLocation();
  return (
    <header className="header">
      <Link to="/">
        <Logo width="90px" height="62px" />
      </Link>

      <Navigation />
      {isLoggedIn ? (
        <>
          {" "}
          <Link className="header__profile" to="/profile">
            {profileInfo && profileInfo.last_name && (
              <p className="header__profile-info">{`${
                profileInfo.first_name
              } ${profileInfo.last_name.substring(0, 1)}.`}</p>
            )}
          </Link>
          {/* TODO удалить после реализации  */}
          <Button
            btnClass="button_size_small-s button_type_transparent"
            btnText="Выйти"
            onClick={onLogout}
          />
        </>
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
  onLogout: PropTypes.func,
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
  onLogout: () => {},
};
export default Header;
