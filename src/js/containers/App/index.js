import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"
import { Link } from "react-router"



export default class App extends Component {
  componentWillMount() {
    // console.log('app props',this.props);
  }

  render() {
    return (
      <div class="container">
        {this.props.children}
      </div>
    )
  }
}
