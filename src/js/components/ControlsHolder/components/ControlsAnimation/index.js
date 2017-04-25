import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ControlsAnimation extends Component {
  constructor(props){
    super(props)
    // console.log('ControlsAnimation',props);
  }
  componentWillMount() {

  }
  componentDidUpdate(){
    // console.log('ControlsAnimationUpdate',this.props);
  }
  render() {
    return (
      <div className={ `${styles}` }>
        {/*<div>ControlsAnimation</div>*/}
      </div>
    )
  }
}
