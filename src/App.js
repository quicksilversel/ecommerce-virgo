import './App.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom';

// PAGES
import Home from './pages/home';
import Collections from './pages/collections';
import ProductDetails from './pages/productDetails';
import About from './pages/about';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/collections' component={Collections}></Route>
      <Route exact path='/collections/:id' component={ProductDetails}></Route>
      <Route exact path='/about' component={About}></Route>
    </Switch>
  );
}

export default App;
