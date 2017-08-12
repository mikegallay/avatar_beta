import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

import ElementLayout from '../ElementLayout'

export default class TimelineEngine extends Component {
  constructor(props){
    super(props)
    console.log('TLE',props);
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
    // console.log('buildSubTL',this.props.data.id);
    //for all, scale on element-scale
    //for eyeballs. translate the svg
    //for all other, translate the element-wrapper
    //for all rotate on their perspective rotation divs
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
    // console.log('id',id);
    if (!this.state.tlInit){
      // console.log('tlinit',id);
      masterTimeline.add(subTimelines[id],0)
      // subTimelines[id].from('.'+id+'.element-scale',.25,{scaleX:0,scaleY:0, ease:Linear.easeNone})
      this.setState({tlInit:true})
    }
  }

  componentDidMount(){
    // console.log('TimelineEngine',this.props);
  }

  render() {
    return (
      <div className={ `${styles} ${this.props.data.element.id}` }>

        <ElementLayout
          actions={this.props.actions}
          data={this.props.data}
          user={this.props.user}
          controls={this.props.controls}
        >
          {this.props.children}
        </ElementLayout>
      </div>
    )
  }
}
