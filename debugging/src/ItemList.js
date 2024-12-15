import React from 'react';

function ItemList({ items }) {
    // BUG: Check if items is an array
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      
    );
}

export default ItemList;