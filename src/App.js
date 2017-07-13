import React, { Component } from 'react';

import  Component1 from './tree/component1'
import  Component2 from './tree/component2'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    click: 0
  }
  handleClick() {
    this.setState({ click: this.state.click + 1 });
  }

  render() {
    return (
      <div className="App">
        <Component1  clicks={ this.state.click } />
        <Component2 handleClick={ this.handleClick.bind(this) } />
      </div>
    );
  }
}

export default App;
