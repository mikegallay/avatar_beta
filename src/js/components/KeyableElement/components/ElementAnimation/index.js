import React, { Component } from 'react';
//import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ControlsAnimation extends Component {
  componentWillMount() {

  }
  componentDidUpdate(){
    console.log('ControlsAnimation',this.props);
  }
  render() {
    return <div>ControlsAnimation</div>
  }
}
