import React from 'react';
import subtractIcon from '../images/icons/subtractIcon.svg';
import plusIcon from '../images/icons/plusIcon.svg';

const AddToCart = (props) => {
  const brickObjs = props.brickObjs;
  
  const addOne = (event) => {
    const amountInput = event.target.parentNode.parentNode.querySelector('.itemAmountInput');
    const value = Number(amountInput.value);
    amountInput.value = value + 1;
  }

  const subtractOne = (event) => {
    const amountInput = event.target.parentNode.parentNode.querySelector('.itemAmountInput');
    const value = Number(amountInput.value);
    if (value > 1) {
      amountInput.value = value - 1;
    }
    
  }
  
  return (
    <div className="addToCartDiv">
      <div className="itemAmountDiv">
        <button
          className="decreaseItemAmountBtn itemAmountBtn"
          onClick={subtractOne}
        >
          <img
            className="itemAmountIcon subtractAmountIcon"
            src={subtractIcon}
          />
        </button>
        <label htmlFor="itemAmount">
          <input 
            name="itemAmount"
            className="itemAmountInput"
            type="number"
            defaultValue={1}
            min={0}
          />
        </label>
        <button
          className="IncreaseItemAmountBtn itemAmountBtn"
          onClick={addOne}
        >
          <img
            className="itemAmountIcon plusAmountIcon"
            src={plusIcon}
          />
        </button>
      </div>
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