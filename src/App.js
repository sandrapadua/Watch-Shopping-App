import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import ShoppingListContainer from './components/ShoppingListContainer'
import ShoppingCart from './components/ShoppingCart'
import Topbar from './components/Topbar'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = 'main-container'>
        <Topbar/>
        <h2>Shopping app</h2>
        <Route exact path="/" component={ShoppingListContainer}/>
        <Route path="/shoppingCart" component={ShoppingCart}/>

        </div>
      </BrowserRouter>

    )}
  }

export default App;
