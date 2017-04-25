import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

import ElementLayout from '../ElementLayout'

export default class TimelineEngine extends Component {
  constructor(props){
    super(props)

    // const tl = new TimelineMax();

    this.state={
      tlInit:false
      //isMaster : this.props.data.id === 'masterTL' ? true : false,
      // tl,

    }
    this.buildSubTL();
    // console.log('master?',this.state.isMaster);
    //intialize TL/props/states
    //add controls to populate the TL
      //play.stop.pause.restart?
      //send updates to EA & CA
    //array of states to send to EA & CA?
    //
  }

  buildSubTL(){
    if (!this.props.timeline.subTimelines[this.props.data.id]){
      this.props.actions.initializeSubTimeline(this.props.data.id);
      // this.props.timeline.masterTimeline.add(this.props.timeline.subTimelines[this.props.data.id])
    }
  }

  componentDidUpdate() {
    console.log('TimelineEngine Update',this.props);
    if (!this.state.tlInit){
      this.props.timeline.masterTimeline.add(this.props.timeline.subTimelines[this.props.data.id],0)
      this.setState({tlInit:true})
    }else if (this.props.data.id != 'face'){

      var subtl = this.props.timeline.subTimelines[this.props.data.id];
      console.log('here',this.props.data.id);
      subtl.to('.'+this.props.data.id+'.element-scale',.2,{scaleX:1,scaleY:.1,delay:0, yoyo:true, repeat:1, ease:Linear.easeNone})
      // subtl.pause();
    }
  }
  componentDidMount(){
    console.log('TimelineEngine',this.props);

  }
  /*renderAnimationObjects(){
    return (
      <ElementLayout actions={this.props.actions} data={this.props.data}>
        {this.props.children}
      </ElementLayout>
    )
  }
  renderControlsHolder(){
    return <ElementControls actions={this.props.actions} activeControl={this.props.activeControl} data={this.props.data}/>
  }*/
  render() {
    return (
      <div className={ `${styles}` }>

        <ElementLayout
          actions={this.props.actions}
          data={this.props.data}
        >
          {this.props.children}
        </ElementLayout>

        {/*!this.state.isMaster && this.renderAnimationObjects()}
        {/*{!this.state.isMaster && this.renderControlsHolder()}
        <ControlsAnimation/>*/}
      </div>
    )
  }
}
