import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import KeyableElement from './components/KeyableElement'
import TimelineEngine from './components/TimelineEngine'
import ElementLayout from './components/ElementLayout'

import { bindActionCreators } from 'redux'

import { initializeTimeline, initializeSubTimeline,updateProgress } from "../../actions/timelineActions"
import { toggleActiveControl } from "../../actions/controlsActions"
import { toggleSpriteSheet } from "../../actions/userActions"

@connect((store) => {
  return {
    user: store.rootState.user,
    avatar: store.rootState.avatar,
    timeline: store.rootState.timeline,
    controls: store.rootState.controls,
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({
      toggleSpriteSheet,
      toggleActiveControl,
      initializeTimeline,
      initializeSubTimeline,
      updateProgress
    }, dispatch)
  }
})
export default class AvatarHolder extends Component {
  constructor(props){
    super(props)
    /*this.state={
      rot:90
    }*/
    console.log('AH',props);

  }

  playTL(){
    console.log('playTL');
    this.props.timeline.masterTimeline.restart();
  }

  componentDidUpdate() {
    // console.log('AvatarHolder update',this.props);
      // let tm = new TweenMax('.face.element-rotateZ',1,{rotationZ:360,ease:Linear.easeNone});
      // this.props.timeline.masterTimeline.to('.face.element-rotateZ',1,{rotationZ:360,ease:Linear.easeNone})

  }
  componentDidMount(){
    // console.log('AvatarHolder',this.props);

    var that = this
    // TweenMax.to('.face .element-rotateY',1,{rotationY:45,delay:1,ease:Linear.easeNone})
    this.$clickme.addEventListener('click',function(){
      that.playTL();
    })

    this.$toggleSprite.addEventListener('click',function(){
        // console.log('toggleSprite',that.props.user.spriteSheet);
      let newURL = 'assets/icon-sprite-def01.svg'
      if (that.props.user.user.spriteSheet == newURL){
        newURL = 'assets/icon-sprite-def02.svg'
      }
      // console.log('toggleSpriteSheet',newURL);
      that.props.actions.toggleSpriteSheet(newURL);
    })

    this.buildMasterTL();


  }

  updateTimelineProgess(progress){
    this.props.actions.updateProgress(progress);
      // console.log(progress)
  }

  buildMasterTL(){
    //this is the master timeline that controls all the other subtimelines
    //initialized in TimelineEngine components within the KeyableElements
    var that = this;
    if (!this.props.timeline.masterTimeline){
      let tl = new TimelineMax({
        // repeat:-1,
        // timeScale:.1,
        onUpdateParams:["{self}"],
        onUpdate: (tween) => {
          let p = tween.progress();
          that.updateTimelineProgess(p);
        },
      });

      this.props.actions.initializeTimeline(tl);

      //make the master timeline 5 seconds
      tl.to(this.$mainTL,5,{opacity:1});
      tl.pause();
    }
  }
  renderEyeBall(element,skinColor){
    //when used, eyeballs are initialized here.

    // console.log('eyeball',this.props);
    return(
      <KeyableElement
        key={element.id+"Ball"}
        actions={this.props.actions}
        timeline={this.props.timeline}
        controls={this.props.controls}
        user={this.props.user}
        data={{
          element:{
            'w'         : element.w,//, * .75,
            'h'         : element.h,//, * .75,
            'sx'        : .5,
            'sy'        : .5,
            'id'        : element.id+'Ball',
            'artid'     : element.artId,
            'eyeBallId' : element.eyeBallId,
            'x'         : 0,
            'y'         : 0,
            'bgColor'   : element.bgColor
          },
          skinColor:skinColor

        }}/>
    )
  }

  render() {
    let activeAvatar = this.props.user.avatars[this.props.user.user.activeAvatar];
    let avatarElements = activeAvatar.elements

    let allElements=[];
    for (var ob in avatarElements) {
      allElements.push(avatarElements[ob]);
    }

    let mappedElements = allElements.map(element =>
      <KeyableElement
        key={element.id}
        actions={this.props.actions}
        timeline={this.props.timeline}
        controls={this.props.controls}
        data={{element:element,skinColor:activeAvatar.skinColor}}
        user={this.props.user}/>
    )

    let avatarEyes = activeAvatar.eyes

    let allEyes=[];
    for (var ob in avatarEyes) {
      allEyes.push(avatarEyes[ob]);
    }

    let mappedEyes = allEyes.map(element =>
      <TimelineEngine
        key={element.id}
        actions={this.props.actions}
        timeline={this.props.timeline}
        controls={this.props.controls}
        data={{element:element,skinColor:activeAvatar.skinColor}}
        user={this.props.user}>
        {element.useEyeBall && this.renderEyeBall(element,activeAvatar.skinColor)}
      </TimelineEngine>
    )
    return (
      <div className={ `${styles}` }>
        <div className="avatarHolder">

          {/*This TimelineEngine builds the master timeline
          //and the main div that holds every other element of the face*/}
          <TimelineEngine
            ref={mainTL => this.$mainTL = mainTL}
            actions={this.props.actions}
            timeline={this.props.timeline}
            controls={this.props.controls}
            user={this.props.user}
            data={{element:activeAvatar.mainElement,skinColor:activeAvatar.skinColor}}
          >

            {mappedEyes}
            {mappedElements}

          </TimelineEngine>

          <h6 ref={clickme => this.$clickme = clickme}>PLAY TIMELINE!</h6>
          <h6 className='h62' ref={toggleSprite => this.$toggleSprite = toggleSprite}>TOGGLE SPRITES!</h6>
        </div>
      </div>
    )
  }
}
