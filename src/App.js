import React, { Component } from 'react';

import  Component1 from './tree/component1'
import  Component2 from './tree/component2'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Component1 />
        <Component2 />
      </div>
    );
  }
}

export default App;
