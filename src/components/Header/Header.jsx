import "./Header.scss";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import { Logo } from "../UI-kit/Logo/Logo";
import Button from "../UI-kit/Button/Button";

const Header = ({ isLoggedIn, profileInfo, onOpenPopup }) => {
  const location = useLocation();
  return (
    <header className="header">
      <Link to="/">
        <Logo width="90px" height="62px" />
      </Link>

      <Navigation />
      {isLoggedIn ? (
        <p className="header__profile-info">{profileInfo}</p>
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
  isLoggedIn: PropTypes.bool,
  profileInfo: PropTypes.string,
  onOpenPopup: PropTypes.func,
};
Header.defaultProps = {
  isLoggedIn: false,
  profileInfo: "Жак-Ив Кусто",
  onOpenPopup: () => {},
};
export default Header;
