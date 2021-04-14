import React from 'react';
import brick1 from '../images/bricks/brick1.jpeg';
import brick2 from '../images/bricks/brick2.jpeg';
import brick3 from '../images/bricks/brick3.jpeg';
import brick4 from '../images/bricks/brick4.jpeg';
import brick5 from '../images/bricks/brick5.jpeg';
import brick6 from '../images/bricks/brick6.jpeg';
import brick7 from '../images/bricks/brick7.jpeg';
import brick8 from '../images/bricks/brick8.jpeg';
import brick9 from '../images/bricks/brick9.jpeg';
import brick10 from '../images/bricks/brick10.jpeg';
import brick11 from '../images/bricks/brick11.jpeg';
import brick12 from '../images/bricks/brick12.jpeg';
import brick13 from '../images/bricks/brick13.jpeg';
import brick14 from '../images/bricks/brick14.jpeg';
import AddToCart from './AddToCart';

const Products = (props) => {
  console.log('Products passBrickObjs: ', props.passBrickObjs);
  const brickSrc = [
    {brick1}, {brick2}, {brick3}, {brick4}, {brick5}, {brick6}, {brick7}, {brick8}, {brick9}, {brick10}, {brick11}, {brick12}, {brick13}, {brick14},
  ];

  let brickObjs = brickSrc.map((link) => {
    let brickName = '';
    for ( const prop in link) {
      brickName = prop;
    };

    const returnObj = {
      name: brickName,
      id: brickName,
      div: '',
      inCart: false,
      productAmount: 0,
    };

    return returnObj;
  });

  let cartBrickObjs = brickObjs;
  if (props.passBrickObjs.length !== 0) {
    console.log('passBricksObjs exists');
    cartBrickObjs = props.passBrickObjs;
  }

  const brickDivs = brickSrc.map((link) => {
    let brickName = '';
    for ( const prop in link) {
      brickName = prop;
    };

    const returnDiv =
    <div className="productCard" key={brickName}>
      <img
        src={link[brickName]}
        className="brickName brickImage"
        alt="LEGO brick"
      />
      <AddToCart 
        addToCart={props.addToCart} 
        brickObjs={cartBrickObjs} 
        brickName={brickName}
      />
    </div>
    
    return returnDiv;
  });

  brickObjs = brickObjs.map((obj) => {
    brickDivs.forEach((div) => {
      if (div.key === obj.name) {
        obj.div = div;
      };
    });

    return obj;
  });
  
  return (
    <div className="products">
      {brickDivs}
    </div>
  );
};

export default Products;