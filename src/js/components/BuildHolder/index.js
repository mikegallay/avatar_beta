import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import AssetGrid from '../Global/AssetGrid'

// import { fetchUser } from "../../actions/userActions"
import { setBuildItemStyle } from "../../actions/userActions"
import { adjustKeyableValue } from "../../actions/controlsActions"

// import { addKeyFrame } from "../../actions/timelineActions"

@connect((store) => {
  return {
    user: store.rootState.user,
    avatar: store.rootState.avatar,
    timeline: store.rootState.timeline,
    controls: store.rootState.controls,
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({
      setBuildItemStyle,
      adjustKeyableValue
    }, dispatch)
  }
})
export default class BuildHolder extends Component {
  constructor(props){

    super(props)
    console.log('bh',props);
    this.state={
      buildIndex:null,
      buildOrder:props.avatar.buildOrder,
      id:props.data,
      prev:null,
      next:null
    }
  }
  componentDidUpdate() {
    this.getIndex();
    // console.log('holder update',this.props);
  }

  componentDidMount(){
    this.getIndex();
  }

	/*componentWillEnter(next) {
    console.log('yes will enter');
		const lastPath = this.props.lastPath;
		const el = ReactDOM.findDOMNode(this);
		const tl = new TimelineMax();

    tl
      .set(el, { x: '-100%' })
      .to(el, 0.6, { x: '0%', force3D: true, ease: Power2.easeIn })
      // .call(setIsTransitioning, [false], null, 0.5)
      .call(next);

	}

	componentDidEnter() {
	}

	componentWillLeave(next) {
    console.log('yes will leave');
		const el = ReactDOM.findDOMNode(this);
		const nextPath = browserHistory.getCurrentLocation().pathname;
		const tl = new TimelineMax();

    tl
      .set(el, { x: '0%' })
      .to(el, 0.8, { x: '-100%', force3D: true, ease: Cubic.easeOut });
	}*/

  getIndex(){
    let a = this.state.buildOrder;
    let id = this.state.id;
    let buildIndex = a.indexOf(id);
    let prev = buildIndex-1>=0?buildIndex-1:null;
    let next = buildIndex+1<a.length?buildIndex+1:null;

    console.log('asdf',id,buildIndex,prev,next);


    if (this.state.buildIndex != buildIndex){
      this.setState({buildIndex,prev,next})
    }
  }

  render() {
    return (
      <div className={ `${styles}` }>
        <div className='buildHolder'>
          <div className='build-menu'>
            <Link className='build-prev build-nav' to={ `/build/${this.state.buildOrder[this.state.prev]}` } >
              {this.state.buildOrder[this.state.prev]}
            </Link>
            <h3 className='panel-title'>CHOOSE A {this.state.id}</h3>
            <Link className='build-next build-nav' to={ `/build/${this.state.buildOrder[this.state.next]}` } >
              {this.state.buildOrder[this.state.next]}
            </Link>
          </div>

          <div className='grid-holder'>


            <AssetGrid
              avatarBuilt={false}
              id={this.state.id}
              user={this.props.user}
              avatar={this.props.avatar}
              actions={this.props.actions}
              // activeAvatar={this.props.controls.initPositionValues[this.props.id+'ID']}
            />

          </div>
        </div>
      </div>
    )
  }
}
