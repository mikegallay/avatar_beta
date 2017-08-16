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
    this.state={
      buildIndex:null,
      buildOrder:this.props.avatar.buildOrder,
      id:this.props.data.id,
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

  getIndex(){
    let a = this.state.buildOrder;
    let id = this.props.data.id;
    let buildIndex = a.findIndex(x => id);
    let prev = buildIndex-1>=0?buildIndex-1:null;
    let next = buildIndex+1<a.length?buildIndex+1:null;

    console.log('asdf',id,buildIndex,prev,next);


    if (this.state.buildIndex != buildIndex){
      this.setState({buildIndex:buildIndex,prev:prev,next:next})
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
              id={this.props.data.id}
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
