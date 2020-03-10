import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, NavItem, Navbar } from 'reactstrap';
import './NavBar.css'

function NavBar() {
  const count = useSelector(st => st.count);
  const totalCost = useSelector(st => st.totalCost);
  return (
    <div className="Nav">
      <Navbar className="Navbar" expand="md">
        <NavLink to="/" className="navbar-brand">
          Shoply
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav justify-content-end" to="/cart">
              Cart: {count} {'  '}
              Total: {totalCost.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar;