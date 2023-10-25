import React from 'react';

import './NavBar.css';
import Navigation from '../Navigation/Navigation';

function NavBar() {
  const [isToggle, setIsToggle] = React.useState(false);

  return (
    <nav className={`navbar ${isToggle ? '' : 'navbar_no-active'}`}>
      <div className={`navbar__menu ${isToggle ? 'navbar__menu_opened' : ''}`}>
        <input
          type="checkbox"
          className="navbar__checkbox"
          onClick={() => setIsToggle(!isToggle)}
        />
        <span className="navbar__toogle" />
        <span className="navbar__toogle" />
        <span className="navbar__toogle" />
        <ul className="navbar__list">
            <Navigation />
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;