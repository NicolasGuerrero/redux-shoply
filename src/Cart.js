import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Card, CardBody, CardText } from 'reactstrap';
import Item from './Item';

function Cart() {
  const { inventory, cart, totalCost } = useSelector(st => ({
    inventory: st.inventory,
    cart: st.cart,
    totalCost: st.totalCost
  }), shallowEqual);

  return (
    <div className="ItemList">
      <h2>Your Shopping Cart</h2>
      {cart.map(entry => {
        let item = inventory[entry.id];
        return <Item key={entry.id} id={entry.id} item={item} qty={entry.qty} />
      })}
      <div>
        <Card className="Item">
          <CardBody>
            <CardText>
              Total: {totalCost.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  )

}

export default Cart;