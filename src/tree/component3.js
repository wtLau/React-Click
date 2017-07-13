import React, { Component } from 'react'
import { connect } from 'react-redux'

import { incrementClicks } from '../redux'

class Component3 extends Component {

  handleClick() {
    this.props.dispatch(incrementClicks())
  }

  render(){
    return (
      <div>I m #333 
        <button  onClick={() => this.handleClick()}>
          Click Click
        </button>
      </div>
    );
  }
}

export default connect()(Component3);