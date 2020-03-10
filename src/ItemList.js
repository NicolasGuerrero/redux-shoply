import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

function ItemList() {
  const { inventory, productIds } = useSelector(st => ({
    inventory: st.inventory,
    productIds: st.productIds
  }));

  return (
    <div className="ItemList">
      {productIds.map(id => {
        let item = inventory[id];
        return <Item key={id} id={id} item={item} />
      })}
    </div>
  )
}

export default ItemList;