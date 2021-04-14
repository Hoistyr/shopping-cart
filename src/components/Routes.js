import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/main.css';
import App from './App';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const shopTest =
<Shop test='hi there' />;

const Routes = () => {
  return (
    <BrowserRouter>
      <App />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route 
          exact path='/shop' 
          render={(props) => (
              <Shop {...props} test='hi there' />
          )}
        />
        <Route exact path='/shop/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;