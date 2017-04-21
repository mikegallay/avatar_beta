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
  componentWillMount() {

  }
  componentDidUpdate(){
    console.log('Layout',this.props);
  }

  render() {


    // const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.id}</li>)

    return (
      <div className={ `${styles}` }>
        <div className="av-ke-main">
          <p>KEM</p>
          <div>TimelineEngine</div>
          <ElementAnimation data={{'w':200,'h':200}}>
            <KeyableElement id="potato"/>
            <KeyableElement id="frenchfry"/>
          </ElementAnimation>
          <ControlsAnimation/>
        </div>
      </div>
    )
  }
}
