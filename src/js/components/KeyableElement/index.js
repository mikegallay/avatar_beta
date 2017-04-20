import React, { Component } from 'react';
import { styles } from './styles.scss';
// require('./styles.scss');
// import { connect } from "react-redux"

import TimelineEngine from './components/TimelineEngine'

//import { bindActionCreators } from 'redux'

export default class KeyableElement extends Component {
  componentWillMount() {
console.log('KeyableElement',this.props);
  }
  render() {
    return (
    <div className='av-ke-container'>
      <div>
        <h1>KE  {this.props.id}</h1>
        <TimelineEngine />
      </div>
    </div>
    )

  }
}
