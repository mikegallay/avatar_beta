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
  }
  componentDidUpdate() {
    console.log('update');
  }
  componentDidMount(){
    console.log('Layout',this.props);
    var that = this
    // TweenMax.to('.face .element-rotateY',1,{rotationY:45,delay:1,ease:Linear.easeNone})
    window.addEventListener('click',function(){
      console.log('click2');

      // TweenMax.set('.face.element-rotateZ',{rotationZ:that.state.rot})
      TweenMax.to('.face.element-rotateZ',.25,{rotationZ:that.state.rot,ease:Linear.easeNone,onComplete: () => {that.setState({rot:that.state.rot+90})}})
      // that.setState({rot:that.state.rot+90})

    })

  }

  render() {


    // const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.id}</li>)

    return (
      <div className={ `${styles}` }>
        <div className="av-ke-main">
          {/*<p>KEM</p>
          <div>TimelineEngine</div>*/}
          <ElementAnimation data={{'w':200,'h':200, 'id':'face'}}>
            <KeyableElement data={{'w':50,'h':50, 'id':'left-eye', 'x':'25%','y':'25%'}}/>
            <KeyableElement data={{'w':50,'h':50, 'id':'right-eye', 'x':'75%','y':'25%'}}/>
          </ElementAnimation>
          <ControlsAnimation/>
          <h6>CLICK ME!</h6>
        </div>
      </div>
    )
  }
}
