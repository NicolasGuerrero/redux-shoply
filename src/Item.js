import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';

import './Item.css'
import { add, remove } from './actions';

function Item({ id, item }) {
  const dispatch = useDispatch();

  const addItem = () => dispatch(add(id));
  const removeItem = () => dispatch(remove(id));

  return (
    <Link className="Item-Link" to={`/products/${id}`}>
      <Card className="Item">
        <CardBody className="Item-Card">
          <img className="ItemImage" src={item.image_url} alt={item.name} />
          <CardTitle className="Item-Name">{item.name}</CardTitle>
          <CardText className="Item-Name">
            {item.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </CardText>
            <Button color="info" size="sm" onClick={addItem}>Add</Button>{' '}
            <Button color="info" size="sm" onClick={removeItem}>Remove</Button>
        </CardBody>
      </Card>
    </Link>
  )
}

export default Item;