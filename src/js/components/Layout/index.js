import React, { Component } from 'react';
import { connect } from "react-redux"

import KeyableElement from '../KeyableElement'

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

    return <div>
      <KeyableElement id="potato"/>
    </div>
  }
}
