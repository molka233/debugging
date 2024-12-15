
import React, { useState } from 'react'
import Counter from './Counter';
import ItemList from './ItemList';

const App = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
};
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Counter />
            <button onClick={addItem}>Add Item</button>
            <ItemList items={items} />
    </div>
    </div>
  );
}

export default App

