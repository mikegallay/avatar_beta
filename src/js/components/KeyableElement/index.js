import React, { Component } from 'react';
//import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class KeyableElement extends Component {
  componentWillMount() {

  }
  componentDidUpdate(){
    console.log('KeyableElement',this.props);
  }
  render() {
    return <div>KE</div>
  }
}
