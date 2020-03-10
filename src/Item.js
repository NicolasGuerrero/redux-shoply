import React from 'react';
import { useDispatch } from 'react-redux';
import { add, remove } from './actions';

function Item({ id, item }) {
  const dispatch = useDispatch();

  const addItem = () => dispatch(add(id));
  const removeItem = () => dispatch(remove(id));

  return (
    <div className="Item">
      <img scr={item.image_url} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <button onClick={addItem}>Add</button>
      <button onClick={removeItem}>Remove</button>
    </div>
  )
}

export default Item;