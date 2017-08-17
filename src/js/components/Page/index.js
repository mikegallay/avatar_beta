import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import { styles } from './styles.scss';

export default function Page(Container, pageName) {
	// try to only query the DOM once to get this.$el
	return class PageWrapper extends Component {
		constructor(props) {
			super(props);
			console.log('wrapper',props,pageName);
			this.state = {
				pageName
			};
		}

		componentWillAppear(next) {
			console.log('will appear',pageName);
			next();
		}

		componentWillEnter(next) {
			console.log('will enter',pageName);
			const lastPath = this.props.lastPath;
			const el = ReactDOM.findDOMNode(this);
			const tl = new TimelineMax();

	    /*tl
	      .set(el, { x: '100%' })
	      .to(el, 0.6, { x: '0%', force3D: true, ease: Power2.easeIn })
	      // .call(setIsTransitioning, [false], null, 0.5)
	      .call(next);*/
		}

		componentDidEnter() {
			console.log('did enter',pageName);
		}

		componentWillLeave(next) {
			console.log('will leave',pageName);
			const el = ReactDOM.findDOMNode(this);
			const nextPath = browserHistory.getCurrentLocation().pathname;
			const tl = new TimelineMax();

	    /*tl
	      .set(el, { x: '0%' })
	      .to(el, 0.8, { x: '-100%', force3D: true, ease: Cubic.easeOut })
				tl.call(next, [], null, 0.8);*/
		}

		render() {
			return (
				<div
					className={ `${styles} ${pageName} hello` }
					ref={ wrapper => this.$wrapper = wrapper }
				>
					<Container data={this.props.params}/>
				</div>
			);
		}
	}
}
