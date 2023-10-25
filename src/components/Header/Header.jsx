import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { useResize } from "../../hooks/useResize";
import { Logo } from "../UI-kit/Logo/Logo";
import NavBar from "../Navbar/NavBar";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const { isScreenMediumTablet } = useResize();

  return (
    <header className="header">
      <Link to="/">
        <Logo width="102px" height="20px" className="logo_type_header" />
      </Link>
      {isScreenMediumTablet ? <NavBar /> : <Navigation />}
    </header>
  );
};

export default Header;
