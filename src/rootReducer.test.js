import rootReducer from './rootReducer';

const emptyCartState = {
  productIds: ['47314fa1-ae56-4eae-80be-af6691145951'],
  inventory: {
    '47314fa1-ae56-4eae-80be-af6691145951':
    {
      name: 'tv',
      price: 219.99,
      description: 'A beautiful, big-screen TV. Because hey, Netflix isn\'t going to watch itself.',
      image_url: 'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
    }
  },
  cart: []
};

const singleItemCart = {
  productIds: ['47314fa1-ae56-4eae-80be-af6691145951'],
  inventory: {
    '47314fa1-ae56-4eae-80be-af6691145951':
    {
      name: 'tv',
      price: 219.99,
      description: 'A beautiful, big-screen TV. Because hey, Netflix isn\'t going to watch itself.',
      image_url: 'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
    }
  },
  cart: [{ id: '47314fa1-ae56-4eae-80be-af6691145951', qty: 1 }]
};

const twoItemCart = {
  productIds: ['47314fa1-ae56-4eae-80be-af6691145951'],
  inventory: {
    '47314fa1-ae56-4eae-80be-af6691145951':
    {
      name: 'tv',
      price: 219.99,
      description: 'A beautiful, big-screen TV. Because hey, Netflix isn\'t going to watch itself.',
      image_url: 'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue'
    }
  },
  cart: [{ id: '47314fa1-ae56-4eae-80be-af6691145951', qty: 2 }]
}

describe('tests rootReducer ADD', () => {

  test('rootReducer ADD action type when item not in cart', () => {
    let state;
    state = rootReducer(emptyCartState, { type: 'ADD', payload: { id: '47314fa1-ae56-4eae-80be-af6691145951' } });

    expect(state).toEqual(singleItemCart);
  });

  test('rootReducer ADD action type when item already in cart', () => {
    let state;
    state = rootReducer(singleItemCart, { type: 'ADD', payload: { id: '47314fa1-ae56-4eae-80be-af6691145951' } });


    expect(state).toEqual(twoItemCart);
  });
});

describe('tests rootReducer REMOVE', () => {
  test('rootReducer REMOVE action type removes if only one item', () => {
    let state = rootReducer(singleItemCart, { type: 'REMOVE', payload: { id: '47314fa1-ae56-4eae-80be-af6691145951' } });

    expect(state).toEqual(emptyCartState);
  });

  test('rootReducer REMOVE action type qty -1 if greater than 1 item', () => {
    let state = rootReducer(twoItemCart, { type: 'REMOVE', payload: { id: '47314fa1-ae56-4eae-80be-af6691145951' } });

    expect(state).toEqual(singleItemCart);
  });
});