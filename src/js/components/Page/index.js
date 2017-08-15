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
		}

		componentWillEnter(next) {
		}

		componentDidEnter() {
		}

		componentWillLeave(next) {
		}

		render() {
			return (
				<div
					className={ `${styles} ${pageName}` }
					ref={ wrapper => this.$wrapper = wrapper }
				>
					<Container data='mouth'/>
				</div>
			);
		}
	}
}
