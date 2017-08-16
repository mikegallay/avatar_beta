import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import { styles } from './styles.scss';

export default function Page(Container, pageName) {
	// try to only query the DOM once to get this.$el
	return class PageWrapper extends Component {
		constructor(props) {
			super(props);
			this.state = {
				pageName
			};
		}

		componentWillAppear(next) {
			console.log('will appear',pageName);
		}

		componentWillEnter(next) {
			console.log('will enter',pageName);
		}

		componentDidEnter() {
			console.log('did enter',pageName);
		}

		componentWillLeave(next) {
			console.log('will leave',pageName);
		}

		render() {
			return (
				<div
					className={ `${styles} ${pageName} hello` }
					ref={ wrapper => this.$wrapper = wrapper }
				>
					<Container data='mouth'/>
				</div>
			);
		}
	}
}
