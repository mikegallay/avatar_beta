import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"
import { Link } from "react-router"
import ReactTransitionGroup from 'react-addons-transition-group';


export default class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			lastPath: null,
		};
  }
  
  componentWillMount() {
    // console.log('app props',this.props);
  }

  render() {
    return (
      <div class="container">
      <div
        className='body-wrapper'
        ref={ wrapper => this.$bodyWrapper = wrapper }
      >
        <ReactTransitionGroup
          component='div'
          className='main-transition'
        >
          { React.cloneElement(this.props.children, {
            key: this.props.location.pathname,
            lastPath: this.state.lastPath,
          }) }
        </ReactTransitionGroup>
      </div>
      </div>
    )
  }
}
