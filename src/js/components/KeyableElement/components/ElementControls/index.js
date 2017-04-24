import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ElementControls extends Component {
  constructor(props){
    super(props)
    console.log('ElementControls',props);
    this.state={
      isActive : false,
    }
    //addkeyframe
    //toggle hold
    //condition to determine what controls are available
  }
  componentDidMount() {

  }
  componentDidUpdate(){

  }
  render() {
    return (
      <div className={ `${styles}` }>
        <div className={ `element-controls ${this.props.data.id} ${this.state.isActive ? '' : 'hidden'}` }>
          <h4>{this.props.data.id}</h4>
          <button>ADD KEYFRAME</button>
        </div>
      </div>
    )
  }
}
