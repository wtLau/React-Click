import React, { Component } from 'react';

class Component1 extends Component {

  render(){
    return (
      <div>
        <h1>I m #1</h1>
        <p>you have click {this.props.clicks} times</p>
      </div>
    );
  }
}

export default Component1;