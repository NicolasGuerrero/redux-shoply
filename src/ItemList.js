import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Item from './Item';

function ItemList() {
  const { inventory, productIds } = useSelector(st => ({
    inventory: st.inventory,
    productIds: st.productIds
  }), shallowEqual);

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