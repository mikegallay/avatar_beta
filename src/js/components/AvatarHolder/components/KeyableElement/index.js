import React, { Component } from 'react';
import { styles } from './styles.scss';

import TimelineEngine from '../TimelineEngine'

export default class KeyableElement extends Component {
  componentWillMount() {
    // console.log('KeyableElement',this.props);
  }

  render() {
    return (
    <div className={ `${styles} ${this.props.data.id}` }>
      <div>
        <TimelineEngine
          actions={this.props.actions}
          timeline={this.props.timeline}
          activeControl={this.props.activeControl}
          data={this.props.data}
          user={this.props.user}/>
      </div>
    </div>
    )
  }
}
