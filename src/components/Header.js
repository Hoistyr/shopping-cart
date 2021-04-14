import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../images/icons/shoppingCart.svg';

const Header = (props) => {
  const [cartCount, setCartCount] = useState(0);
  
  console.log('header props ', props);
  
  if (props.cartCount !== '' && props.cartCount !== 0 && props.cartCount !== cartCount) {
    console.log('updating cart count state');
    setCartCount(props.cartCount);
  }

  let amountText = '';
  if (cartCount > 0) {
    console.log('Header cartcount: ', cartCount);
    amountText = <p className="cartCountText">{cartCount}</p>;
  }
  
  return (
    <header className="header">
      <h1 className="headerTitle">Garbuylo's</h1>
      <ul className="navList">
        <li className="home navListItem">
          <Link to="/">Home</Link>
        </li>
        <li className="shop navListItem">
        <Link to="/shop">Shop</Link>
        </li>
        <li className="cartDiv">
          <Link to="/shop/cart">
            <img 
              className="cartIcon"
              src={shoppingCart}
              alt="Shopping Cart" 
            />
          </Link>
          {amountText}
        </li>
      </ul>
    </header>
  );
};

export default Header;