import React from 'react';
import homeBricks from '../images/homeBricks.jpg';

const Home = () => {
  
  
  return (
    <div className="page">
      <div className="home">
        <h1 className="homePageTitle">Garbuylo's</h1>
        <img
            className="homeBricks"
            src={homeBricks}
          />
      </div> 
        
    </div>
    
    
  );
};

export default Home;