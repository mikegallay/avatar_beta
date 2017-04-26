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
    console.log('buildSubTL',this.props.data.id);
    //for all, scale the svg
    //for eyeballs. translate the svg
    //for all other, translate the element-holder
    //for all remove rotateZ and apply it to element-holder
    if (!this.props.timeline.subTimelines[this.props.data.id]){
      this.props.actions.initializeSubTimeline(this.props.data.id);
      // this.props.timeline.masterTimeline.add(this.props.timeline.subTimelines[this.props.data.id])
    }
  }

  componentDidUpdate() {
    // console.log('TimelineEngine Update',this.props);
    const {masterTimeline, subTimelines} = this.props.timeline
    const {id} = this.props.data
    // const id = this.props.data.id;

    if (!this.state.tlInit){
      masterTimeline.add(subTimelines[id],0)
      this.setState({tlInit:true})

    // }else if (id != 'face'){
    }else if (id == 'leftBrow' || id == 'rightBrow' || id == 'leftEye'){
      var subtl = subTimelines[id];
      // console.log('here',this.props.data.id);
      let diff = '-=15px';
      if (id == 'nose') diff = 0;
      if (id == 'mouth') diff = '+=15px'
      subtl.to('.'+id+'.element-holder',.5,{scaleX:1.5,scaleY:1.5,yoyo:true, repeat:1, ease:Linear.easeNone},0)
      subtl.to('.'+id+'.element-holder',.15,{top:diff,yoyo:true, repeat:3, ease:Linear.easeNone},.2)
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
      <div className={ `${styles} ${this.props.data.id}` }>

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
