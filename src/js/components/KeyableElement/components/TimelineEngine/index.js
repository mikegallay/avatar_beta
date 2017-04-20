import React, { Component } from 'react';
//import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class TimelineEngine extends Component {
  componentWillMount() {

  }
  componentDidUpdate(){
    console.log('TimelineEngine',this.props);
  }
  render() {
    return <div>TimelineEngine</div>
  }
}
