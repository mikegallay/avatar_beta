import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import KeyableElement from '../KeyableElement'
import TimelineEngine from '../KeyableElement/components/TimelineEngine'
import ControlsAnimation from '../KeyableElement/components/ControlsAnimation'
import ElementAnimation from '../KeyableElement/components/ElementAnimation'
// import KeyableElementChild from '../KeyableElementChild'

import { bindActionCreators } from 'redux'
// import { fetchUser } from "../../actions/userActions"
// import { fetchTweets } from "../../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.rootState.user.user,
    avatar: store.rootState.avatar
    // userFetched: store.rootState.user.fetched,
    // tweets: store.rootState.tweets.tweets,
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({}, dispatch)
  }
})
export default class Layout extends Component {
  constructor(props){
    super(props)
    this.state={
      rot:90
    }
    //add masterTL
  }
  componentDidUpdate() {
    // console.log('update');
  }
  componentDidMount(){
    console.log('Layout',this.props);
    var that = this
    // TweenMax.to('.face .element-rotateY',1,{rotationY:45,delay:1,ease:Linear.easeNone})
    this.$clickme.addEventListener('click',function(){
      // console.log('click2');
      TweenMax.to('.face.element-rotateZ',.25,{rotationZ:that.state.rot,ease:Linear.easeNone,onComplete: () => {that.setState({rot:that.state.rot+90})}})
      TweenMax.to('.right-eye.element-scale',.2,{scaleX:1,scaleY:.1,delay:.3, yoyo:true, repeat:1, ease:Linear.easeNone})
    })

  }

  render() {
    const {avatar} = this.props.avatar
    const mappedElements = this.props.avatar.elements.map(element =>
      <KeyableElement
        key={element.id}
        data={{
          'w':element.w,
          'h':element.h,
          'id':element.id,
          'x':element.bx,
          'y':element.by
        }}/>)

    return (
      <div className={ `${styles}` }>
        <div className="av-ke-main">
          <TimelineEngine data={{'id':'masterTL'}}/>
          <TimelineEngine data={this.props.avatar.mainElement}>
            {mappedElements}
          </TimelineEngine>
          <h6 ref={clickme => this.$clickme = clickme}>CLICK ME!</h6>
        </div>
      </div>
    )
  }
}
