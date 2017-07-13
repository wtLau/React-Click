import React, { Component } from 'react';

class Component3 extends Component {
  constructor () {
    super ()
      this.state= {
        message: 'Hakuna Matana'
      }
  }

  render(){
    return (
      <div>I m #333 { this.state.message }
        <button  onClick={() => this.props.handleClick()}>Click Click</button>
      </div>
    );
  }
}

export default Component3;