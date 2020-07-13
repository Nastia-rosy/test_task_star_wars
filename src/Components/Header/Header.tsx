import React from 'react';
import './Header.scss';
import Nav from './Nav/Nav';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
        alt="Star Wars Logo"
        className="header__logo"
      />
      <Nav />
    </header>
  );
}

export default Header;