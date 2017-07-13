import React, { Component } from 'react';

class Component3 extends Component {

  handleClick() {
    console.loge('Clicked')
  }

  render(){
    return (
      <div>I m #333 { this.state.message }
        <button  onClick={() => this.handleClick()}>
          Click Click
        </button>
      </div>
    );
  }
}

export default Component3;