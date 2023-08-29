import React from 'react';
import '../../src/App.css';

const ItemListContainer = ({greeting}) => {
  
  return (
    <div className='centered-container'>
        <h2 className='centered-greeting'>{greeting}</h2>
    </div>
  )
}

export default ItemListContainer