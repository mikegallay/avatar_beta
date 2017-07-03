import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import KeyableElement from './components/KeyableElement'
import TimelineEngine from './components/TimelineEngine'
import ElementLayout from './components/ElementLayout'

import { bindActionCreators } from 'redux'

import { initializeTimeline, initializeSubTimeline } from "../../actions/timelineActions"
import { toggleActiveControl } from "../../actions/controlsActions"
import { toggleSpriteSheet } from "../../actions/userActions"

@connect((store) => {
  return {
    user: store.rootState.user.user,
    avatar: store.rootState.avatar,
    timeline: store.rootState.timeline,
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({
      toggleSpriteSheet,
      toggleActiveControl,
      initializeTimeline,
      initializeSubTimeline
    }, dispatch)
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
      // this.props.timeline.masterTimeline.to('.face.element-rotateZ',1,{rotationZ:360,ease:Linear.easeNone})
      this.props.timeline.masterTimeline.pause();
  }
  componentDidMount(){
    console.log('AvatarHolder',this.props);
    var that = this
    // TweenMax.to('.face .element-rotateY',1,{rotationY:45,delay:1,ease:Linear.easeNone})
    this.$clickme.addEventListener('click',function(){
      that.playTL();
    })

    this.$toggleSprite.addEventListener('click',function(){
        console.log('toggleSprite',that.props.user.spriteSheet);
      let newURL = '/assets/icon-sprite-def01.svg'
      if (that.props.user.spriteSheet == newURL){
        newURL = '/assets/icon-sprite-def02.svg'
      }
      // console.log('toggleSpriteSheet',newURL);
      that.props.actions.toggleSpriteSheet(newURL);
    })

  }

  buildMasterTL(){
    //this is the master timeline that controls all the other subtimelines
    //initialized in TimelineEngine components within the KeyableElements

    if (!this.props.timeline.masterTimeline){
      let tl = new TimelineMax(/*{onComplete:() => {this.restart()}}*/);


      this.props.actions.initializeTimeline(tl);
    }
  }
  renderEyeBall(element){
    //when used eyeballs are initialized here.

    // console.log('eyeball',this.props);
    return(
      <KeyableElement
        key={element.id+"Ball"}
        actions={this.props.actions}
        timeline={this.props.timeline}
        activeControl={this.props.avatar.activeControl}
        user={this.props.user}
        data={{
          'w'         : element.w,//, * .75,
          'h'         : element.h,//, * .75,
          'id'        : element.id+'Ball',
          'eyeBallId' : element.eyeBallId,
          'x'         : '0%',
          'y'         : '0%',
          'bgColor'   : element.bgColor
        }}/>
    )
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
        data={element}
        user={this.props.user}/>
    )

    const avatarEyes = this.props.avatar.eyes

    let allEyes=[];
    for (var ob in avatarEyes) {
      allEyes.push(avatarEyes[ob]);
    }

    const mappedEyes = allEyes.map(element =>
    <TimelineEngine
      key={element.id}
      actions={this.props.actions}
      timeline={this.props.timeline}
      activeControl={this.props.avatar.activeControl}
      data={element}
      user={this.props.user}>
      {element.useEyeBall && this.renderEyeBall(element)}
    </TimelineEngine>
    )

    return (
      <div className={ `${styles}` }>
        <div className="avatarHolder">

          {/*This TimelineEngine builds the master timeline
          //and the main div that holds every other element of the face*/}
          <TimelineEngine
            actions={this.props.actions}
            timeline={this.props.timeline}
            activeControl={this.props.avatar.activeControl}
            user={this.props.user}
            data={this.props.avatar.mainElement}
          >

            {mappedEyes}
            {mappedElements}


          </TimelineEngine>

          <h6 ref={clickme => this.$clickme = clickme}>CLICK ME!</h6>
          <h6 className='h62' ref={toggleSprite => this.$toggleSprite = toggleSprite}>TOGGLE SPRITES!</h6>
        </div>
      </div>
    )
  }
}
