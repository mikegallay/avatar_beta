import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

import ElementAnimation from '../ElementAnimation'
import ControlsAnimation from '../ControlsAnimation'
import ElementControls from '../ElementControls'

export default class TimelineEngine extends Component {
  constructor(props){
    super(props)

    const tl = new TimelineMax();
    this.state={
      isMaster : this.props.data.id === 'masterTL' ? true : false,
      tl,

    }
    // console.log('master?',this.state.isMaster);
    //intialize TL/props/states
    //add controls to populate the TL
      //play.stop.pause.restart?
      //send updates to EA & CA
    //array of states to send to EA & CA?
    //
  }

  componentWillMount() {

  }
  componentDidMount(){
    console.log('TimelineEngine',this.props);
  }
  renderAnimationObjects(){
    return (
      <ElementAnimation actions={this.props.actions} data={this.props.data}>
        {this.props.children}
      </ElementAnimation>
    )
  }
  renderAnimationControls(){
    return <ElementControls actions={this.props.actions} activeControl={this.props.activeControl} data={this.props.data}/>
  }
  render() {
    return (
      <div className={ `${styles}` }>
        {!this.state.isMaster && this.renderAnimationObjects()}
        {/*{!this.state.isMaster && this.renderAnimationControls()}
        <ControlsAnimation/>*/}
      </div>
    )
  }
}
