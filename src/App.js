import React, { Component } from 'react';
import { Provider } from 'react-redux'

import  Component1 from './tree/component1'
import  Component2 from './tree/component2'

import { store } from './redux'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Component1 />
          <Component2 />
        </div>
      </Provider>
    );
  }
}

export default App;
