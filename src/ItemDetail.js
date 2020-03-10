import React from 'react';
import { useParams, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';

import './Item.css'
import { add, remove } from './actions';

function ItemDetail({ cantFind }) {
  let { id } = useParams();
  let inventory = useSelector(st => st.inventory);
  const dispatch = useDispatch();

  let item = inventory[id];

  if (!item) {
    return <Redirect to={cantFind} />
  }

  const addItem = () => dispatch(add(id));
  const removeItem = () => dispatch(remove(id));

  return (
    <div className="ItemDetail">
        <img className="ItemImage" src={item.image_url} alt={item.name} />
        <h1 className="Item-Name">{item.name}</h1>
        <div className="Item-Details">
          <p>{item.description}</p>
          <p>{item.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}</p>
          <Button color="info" size="sm" onClick={addItem}>Add</Button>{' '}
          <Button color="info" size="sm" onClick={removeItem}>Remove</Button>
        </div>
    </div>
  )
}

export default ItemDetail;