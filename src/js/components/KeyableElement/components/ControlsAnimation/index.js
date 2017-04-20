import React, { Component } from 'react';
//import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ElementAnimation extends Component {
  componentWillMount() {

  }
  componentDidUpdate(){
    console.log('ElementAnimation',this.props);
  }
  render() {
    return <div>ElementAnimation</div>
  }
}
