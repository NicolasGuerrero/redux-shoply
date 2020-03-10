import React from 'react';
import { useParams, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardTitle, CardImg, CardText, CardBody, Button } from 'reactstrap';

import './Item.css'
import { add, remove } from './actions';

function ItemDetail({ cantFind }) {
  let { id } = useParams();
  let inventory = useSelector(st => st.inventory);
  let cart = useSelector(st => st.cart);
  let count = cart.find(item => item.id === id)
  const dispatch = useDispatch();

  let item = inventory[id];

  if (!item) {
    return <Redirect to={cantFind} />
  }

  const addItem = () => dispatch(add(id));
  const removeItem = () => dispatch(remove(id));

  return (
    <Card className="ItemDetail">
        <CardImg className='ItemDetail-Image' src={item.image_url} alt={item.name} />
        <CardTitle className="Item-Name">{item.name}</CardTitle>
        <CardBody className="Item-Details">
          <CardText>{item.description}</CardText>
          <CardText>{item.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}</CardText>
          <CardText>
          { count ? `Number in cart: ${count.qty}` : `Number in cart: 0` }
          </CardText>
          <Button color="info" size="sm" onClick={addItem}>Add</Button>{' '}
          <Button color="info" size="sm" onClick={removeItem}>Remove</Button>
        </CardBody>
    </Card>
  )
}

export default ItemDetail;