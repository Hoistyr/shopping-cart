import React from 'react';
import subtractIcon from '../images/icons/subtractIcon.svg';
import plusIcon from '../images/icons/plusIcon.svg';
import deleteIcon from '../images/icons/deleteIcon.svg';
import emptyCartImage from '../images/emptyCartImage.svg';

const Cart = (props) => {
  
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

  const cartBrickDivs = props.cartItems.map((item) => {
    const itemName = item.name;
    const returnDiv =
    <div className="cartProduct" key={item.name}>
      <p className="cartProductName">{item.name}</p>
      <img
        src={item.div.props.children[0].props.src}
        className="brickName cartBrickImage"
        alt="LEGO brick"
      />
        <div className="updateCartDiv">
        <div className="itemAmountDiv">
          <button
            className="decreaseItemAmountBtn itemAmountBtn"
            onClick={subtractOne}
          >
            <img
              className="itemAmountIcon subtractAmountIcon"
              src={subtractIcon}
              alt="Remove one of this item"
            />
          </button>
          <label htmlFor="itemAmount">
            <input 
              name="itemAmount"
              className="itemAmountInput"
              type="number"
              defaultValue={item.productAmount}
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
              alt="Add one of this item"
            />
          </button>
        </div>
        <button 
          className="updateCartAmountButton"
          onClick={props.updateCart.bind(this, itemName)}
          brickid={props.brickName}
          >
          Update Amount
        </button>
      </div>

      <div className="deleteCartItemDiv">
        <button 
          className="deleteCartItemButton"
          onClick={props.removeFromCart.bind(this, itemName)}
        >
          <img 
            src={deleteIcon}
            className="deleteCartItemIcon"
            alt="Delete Icon" 
          />
        </button>
        
      </div>
    </div>;

    return returnDiv;
  });

  let cartContent = 
  <div className="emptyCartDiv">
    <h1 className="emptyCartTitle">Looks like nothing's here yet...</h1>
    <img 
      className="emptyCartImage"
      src={emptyCartImage}
      alt="Cart is empty image"
    />
  </div>;
  
  let purBtn = '';
  if (props.cartItems.length > 0) {
    cartContent = cartBrickDivs;
    purBtn = <button className="purchaseButton">Begin Purchase</button>
  }

  return (
    <div className="page">
      
      <div className="cartTop">
        <h1 className="cartTitle">Cart</h1>
        {purBtn}
      </div>
      <div className="cart">
        {cartContent}
      </div>
      
    </div>
    
  );
};

export default Cart;