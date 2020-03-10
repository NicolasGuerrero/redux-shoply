import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';

import './Item.css'
import { add, remove } from './actions';

function Item({ id, item, qty }) {
  const dispatch = useDispatch();

  const addItem = () => dispatch(add(id));
  const removeItem = () => dispatch(remove(id));

  return (
    <Card className="Item">
      <CardBody className="Item-Card">
        <Link className="Item-Link" to={`/products/${id}`}>
          <img className="ItemImage" src={item.image_url} alt={item.name} />

          <CardTitle className="Item-Name">{item.name}</CardTitle>
        </Link>
        <CardText className="Item-Name">
          {item.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </CardText>
        {qty ? <CardText>Number in cart: {qty}</CardText> : ""}
        <Button color="info" size="sm" onClick={addItem}>Add</Button>{' '}
        <Button color="info" size="sm" onClick={removeItem}>Remove</Button>
      </CardBody>
    </Card>
  )
}

export default Item;