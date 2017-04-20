import React, { Component } from 'react';

// import Layout from "../components/Layout";

export default class Archives extends Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <li key={i}>{title}</li> );

    return (
      <div>
        <h1>Archives</h1>
        <ul class="row">{Articles}</ul>
      </div>
    );
  }
}
