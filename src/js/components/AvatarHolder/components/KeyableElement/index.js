import React, { Component } from 'react';
import { styles } from './styles.scss';

import TimelineEngine from '../TimelineEngine'

export default class KeyableElement extends Component {
  componentWillMount() {
    console.log('KeyableElement',this.props);
  }

  render() {
    return (
    <div className={ `${styles} ${this.props.data.element.id}` }>
      <div>
        <TimelineEngine
          actions={this.props.actions}
          timeline={this.props.timeline}
          data={this.props.data}
          controls={this.props.controls}
          user={this.props.user}/>
      </div>
    </div>
    )
  }
}
