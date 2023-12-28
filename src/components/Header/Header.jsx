import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav className="naw">
          <NavLink className="header_link" to="/">
            Home
          </NavLink>
          <NavLink className="header_link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;
