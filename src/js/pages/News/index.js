import React, { Component } from 'react';

// import Layout from "../components/Layout";

export default class News extends Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const News = [
      "Fake News",
      "Partial News",
      "American News",
      "Mexican News",
    ].map((title, i) => <li key={i}>{title}</li> );

    return (
      <div>
        <h1>News</h1>
        <ul class="row">{News}</ul>
      </div>
    );
  }
}
