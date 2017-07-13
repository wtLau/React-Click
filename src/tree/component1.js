import React, { Component } from 'react'
import { connect } from 'react-redux'

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

function mapStateToProps(store) {
  return {
    clicks: store.clicks
  }
}

export default connect(mapStateToProps)(Component1);