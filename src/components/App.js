import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/main.css';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [brickObjs, setBrickObjs] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (brickObjs, event) => {
    // product should be an object
    setBrickObjs(brickObjs);
    const brickClicked =  event.target.attributes.brickid.value;
    const amountAdded = event.target.parentNode.querySelector('.itemAmountInput').value;
    
    const updateBrickObjs = brickObjs.map((obj) => {
      if (obj.name === brickClicked) {
        obj.inCart = true;
        obj.productAmount = (Number(obj.productAmount) + Number(amountAdded));
      };
      return obj;
    });
    setBrickObjs(updateBrickObjs);

    const itemsInCart = brickObjs.filter((obj) => {
      if (obj.inCart === true) {
        return true;
      };
      return false;
    });
    setCartCount(itemsInCart.length);
    setCartItems(itemsInCart);
  }

  const updateCart = (itemName, event) => {
    const updatedAmount = event.target.parentNode.querySelector('.itemAmountInput').value;
    
    const updateBrickObjs = brickObjs.map((obj) => {
      if (obj.name === itemName) {
        obj.productAmount = updatedAmount;
      };
      return obj;
    });
    setBrickObjs(updateBrickObjs);
    
    const itemsInCart = brickObjs.filter((obj) => {
      if (obj.inCart === true) {
        return true;
      };
      return false;
    });
    setCartCount(itemsInCart.length);
    setCartItems(itemsInCart);
  }

  const removeFromCart = (itemName, event) => {
    const updateBrickObjs = brickObjs.map((obj) => {
      if (obj.name === itemName) {
        obj.inCart = false;
        obj.productAmount = 0;
      };
      return obj;
    });
    setBrickObjs(updateBrickObjs);
    
    const itemsInCart = brickObjs.filter((obj) => {
      if (obj.inCart === true) {
        return true;
      };
      return false;
    });
    setCartCount(itemsInCart.length);
    setCartItems(itemsInCart);
  }
  
  return (
    <BrowserRouter>
      <Header cartCount={cartCount}/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route 
          exact path='/shop' 
          render={(props) => (
              <Shop 
                {...props} 
                test='hi there' 
                addToCart={addToCart}
                passBrickObjs={brickObjs}
              />
          )}
        />
        <Route 
          exact path='/shop/cart' 
          render={(props) => (
            <Cart
              {...props}
              cartItems={cartItems}
              updateCart={updateCart}
              removeFromCart={removeFromCart}
            />
          )} 
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;