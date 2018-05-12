import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => (
  <div>
    <header>
      <h1>Expensify</h1>
    </header>
    <NavLink
      className="header__link"
      activeClassName="header__link--active"
      exact={true}
      to="/"
    >
      dashboard
    </NavLink>
    <NavLink
      className="header__link"
      activeClassName="header__link--active"
      to="/create"
    >
      create
    </NavLink>
    <NavLink
      className="header__link"
      activeClassName="header__link--active"
      to="/help"
    >
      help
    </NavLink>
  </div>
);

export default Header;
