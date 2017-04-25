import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import KeyableElement from './components/KeyableElement'
import TimelineEngine from './components/TimelineEngine'
import ElementLayout from './components/ElementLayout'

import { bindActionCreators } from 'redux'

import { initializeTimeline, initializeSubTimeline } from "../../actions/timelineActions"
import { toggleActiveControl } from "../../actions/controlsActions"

@connect((store) => {
  return {
    user: store.rootState.user.user,
    avatar: store.rootState.avatar,
    timeline: store.rootState.timeline,
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({toggleActiveControl,initializeTimeline,initializeSubTimeline}, dispatch)
  }
})
export default class AvatarHolder extends Component {
  constructor(props){
    super(props)
    this.state={
      rot:90
    }

    this.buildMasterTL();
  }

  playTL(){
    console.log('playTL');
    this.props.timeline.masterTimeline.restart();
  }

  componentDidUpdate() {
    console.log('AvatarHolder update',this.props);
      // let tm = new TweenMax('.face.element-rotateZ',1,{rotationZ:360,ease:Linear.easeNone});
      this.props.timeline.masterTimeline.to('.face.element-rotateZ',1,{rotationZ:360,ease:Linear.easeNone})
      this.props.timeline.masterTimeline.pause();
  }
  componentDidMount(){
    console.log('AvatarHolder',this.props);
    var that = this
    // TweenMax.to('.face .element-rotateY',1,{rotationY:45,delay:1,ease:Linear.easeNone})
    this.$clickme.addEventListener('click',function(){
      console.log('click2');
      that.playTL();
      // TweenMax.to('.face.element-rotateZ',.25,{rotationZ:that.state.rot,ease:Linear.easeNone,onComplete: () => {that.setState({rot:that.state.rot+90})}})
      // TweenMax.to('.rightEye.element-scale',.2,{scaleX:1,scaleY:.1,delay:.3, yoyo:true, repeat:1, ease:Linear.easeNone})
    })

  }

  buildMasterTL(){
    if (!this.props.timeline.masterTimeline){
      let tl = new TimelineMax(/*{onComplete:() => {this.restart()}}*/);


      this.props.actions.initializeTimeline(tl);
    }
  }

  render() {
    const avatarElements = this.props.avatar.elements

    let allElements=[];
    for (var ob in avatarElements) {
      allElements.push(avatarElements[ob]);
    }

    const mappedElements = allElements.map(element =>
      <KeyableElement
        key={element.id}
        actions={this.props.actions}
        timeline={this.props.timeline}
        activeControl={this.props.avatar.activeControl}
        data={{
          'w'  : element.w,
          'h'  : element.h,
          'id' : element.id,
          'x'  : element.bx,
          'y'  : element.by
        }}/>)

    return (
      <div className={ `${styles}` }>
        <div className="av-ke-main">
          {/*<TimelineEngine actions={this.props.actions} data={{'id':'masterTL'}}/>*/}
          <TimelineEngine
            actions={this.props.actions}
            timeline={this.props.timeline}
            activeControl={this.props.avatar.activeControl}
            data={this.props.avatar.mainElement}
          >
            {mappedElements}
          </TimelineEngine>
          <h6 ref={clickme => this.$clickme = clickme}>CLICK ME!</h6>
        </div>
      </div>
    )
  }
}
