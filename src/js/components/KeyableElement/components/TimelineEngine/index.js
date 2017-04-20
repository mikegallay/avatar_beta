import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

import ElementAnimation from '../ElementAnimation'
import ControlsAnimation from '../ControlsAnimation'

export default class TimelineEngine extends Component {
  componentWillMount() {

  }
  componentDidUpdate(){
    console.log('TimelineEngine',this.props);
  }
  render() {
    return (
      <div className={ `${styles}` }>
        <div>TimelineEngine</div>
        <ElementAnimation data={{'w':50,'h':'75'}}/>
        <ControlsAnimation/>
      </div>
    )
  }
}
