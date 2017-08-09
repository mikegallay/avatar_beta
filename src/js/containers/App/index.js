import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"
import { Link } from "react-router"

import { bindActionCreators } from 'redux'
import { fetchUser } from "../../actions/userActions"
import { fetchTweets } from "../../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.rootState.user.user,
    userFetched: store.rootState.user.fetched,
    tweets: store.rootState.tweets.tweets,
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({fetchUser, fetchTweets}, dispatch)
  }
})
export default class App extends Component {
  componentWillMount() {
    console.log('app props',this.props);
  }

  render() {
    return <div>
      <h1>App</h1>
      <Link to="archives">archives </Link>
      <Link to="news">news</Link>
      <div class="container">
        {this.props.children}
      </div>
      </div>
  }
}
