import React, { Component } from 'react';
import  Component3 from './component3'

class Component2 extends Component {
  render(){
    return (
      <div>
        <Component3 handleClick={ this.props.handleClick }/>
      </div>
    );
  }
}

export default Component2;