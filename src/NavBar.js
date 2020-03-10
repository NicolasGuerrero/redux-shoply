import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, NavItem } from 'reactstrap';
import './NavBar.css'

function NavBar() {
  const count = useSelector(st => st.count);

  return (
    <div className="Nav">
      <Nav className="Navbar">
        <NavLink to="/" className="Logo">
          <NavItem>
            Shoply
          </NavItem>
        </NavLink>
        <div className="navigation">
          <NavLink to="/">
          <NavItem>Cart: {count}</NavItem>
        </NavLink>
        </div>
      </Nav>
    </div>
  )
}

export default NavBar;