import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = 'main-container'>
        <h2>Shopping app</h2>
        </div>
      </BrowserRouter>

    )}
  }

export default App;
