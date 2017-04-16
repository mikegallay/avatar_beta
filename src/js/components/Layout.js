import React from "react"
import { connect } from "react-redux"

import { bindActionCreators } from 'redux'
import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({fetchUser, fetchTweets}, dispatch)
  }
})
export default class Layout extends React.Component {
  componentWillMount() {

    this.props.actions.fetchUser()
  }
  componentDidUpdate(){
    console.log(this.props);
  }

  fetchTweets() {
    this.props.actions.fetchTweets()
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    }

    const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.id}</li>)

    return <div>
      <h1>{user.name}</h1>
      <ul>{mappedTweets}</ul>
    </div>
  }
}
