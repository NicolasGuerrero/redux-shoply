import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, NavItem } from 'reactstrap';

function NavBar() {
  const cart = useSelector(st => st.cart);
  let [count, setCount] = useState(0);

  useEffect(() => {
    let newCount = 0;
    cart.forEach(item => newCount += item.qty)
    setCount(newCount);
  }, [cart]);

  return (
    <div className="Nav">
      <Nav>
        <NavItem>Cart: {count}</NavItem>
      </Nav>
    </div>
  )
}

export default NavBar;