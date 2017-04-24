import React, { Component } from 'react';
import { styles }  from './styles.scss';
// require('./styles.scss');
import { connect } from "react-redux"

import TimelineEngine from './components/TimelineEngine'

//import { bindActionCreators } from 'redux'

export default class KeyableElement extends Component {
  componentWillMount() {
console.log('KeyableElement',this.props);
  }
  render() {
    return (
    <div className={ `${styles}` }>
      <div>
        <TimelineEngine actions={this.props.actions} activeControl={this.props.activeControl} data={this.props.data}/>
      </div>
    </div>
    )

  }
}
