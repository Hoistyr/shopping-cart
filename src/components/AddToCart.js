import React from 'react';

const AddToCart = (props) => {
  const brickObjs = props.brickObjs;
  return (
    <div className="addToCartDiv">
      <button 
        className="addToCartButton"
        onClick={props.addToCart.bind(this, brickObjs)}
        brickid={props.brickName}
        >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;