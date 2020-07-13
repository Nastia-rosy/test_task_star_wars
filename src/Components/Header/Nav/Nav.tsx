import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav:React.FC = () => {
  return (
    <nav className="header__nav nav">
    <ul className="nav__list">
      <li className="nav__item">
        <NavLink
          to="/"
          exact
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          to="/films"
          exact
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Films
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Nav;