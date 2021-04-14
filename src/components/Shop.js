import React, {useState} from 'react';
import Products from './Products';
import Header from './Header';

const Shop = () => {
  const [stateBrickObjs, setStateBrickObjs] = useState([]);
  const [cartCount, setCartCount] = useState('');
  
  const addToCart = (brickObjs, event) => {
    // product should be an object
    setStateBrickObjs(brickObjs);
    const brickClicked =  event.target.attributes.brickid.value;
    console.log('click registered');
    
    const updateBrickObjs = brickObjs.map((obj) => {
      if (obj.name === brickClicked) {
        obj.inCart = true;
        obj.productAmount += 1;
      };
      return obj;
    });
    setStateBrickObjs(updateBrickObjs);

    const itemsInCart = brickObjs.filter((obj) => {
      if (obj.inCart === true) {
        return true;
      };
      return false;
    });

    setCartCount(itemsInCart.length);
  }

  console.log('shop state brickObj', stateBrickObjs);
  return (
    <div className="page">
      <Header cartCount={cartCount} />
      <div className="shop">
        <h1 className="shopTitle">Shop</h1>
        <Products addToCart={addToCart} passBrickObjs={stateBrickObjs} />
      </div>
    </div>
  );
};

export default Shop;