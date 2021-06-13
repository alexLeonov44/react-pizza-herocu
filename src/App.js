import React from 'react';

import Headers from './components/Headers';
import Home from './pages/Home';
import Cart from './pages/Cart';

import { Route } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { getPizzas } from './redux/actions/pizzas';

export default function App() {
  const dispatch = useDispatch();
  const {filters , cart} = useSelector(state=> state);
  
  React.useEffect(() => {
   dispatch(getPizzas(filters))
  },[filters]);
  return (
    <div className="wrapper">
      <Headers totalCount={cart.totalCount}/>
      <div className="content">
        <Route exact path="/">
          <Home dispatch={dispatch} />
        </Route>

        <Route exact path="/cart" render={() => <Cart addedPizzas={cart.items} totalCount={cart.totalCount} dispatch={dispatch}/>} />
      </div>
    </div>
  );
}


