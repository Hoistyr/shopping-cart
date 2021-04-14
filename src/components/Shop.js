import React, {useState} from 'react';
import Products from './Products';

const Shop = (props) => {

  return (
    <div className="page">
      <div className="shop">
        <h1 className="shopTitle">Shop</h1>
        <Products 
          addToCart={props.addToCart} 
          passBrickObjs={props.passBrickObjs} 
        />
      </div>
    </div>
  );
};

export default Shop;