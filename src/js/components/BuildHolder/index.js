import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import AssetGrid from '../Global/AssetGrid'

// import { fetchUser } from "../../actions/userActions"
import { toggleActiveControl,adjustKeyableValue,toggleActiveInput,setActiveInput } from "../../actions/controlsActions"
import { addKeyFrame } from "../../actions/timelineActions"

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
      toggleActiveControl,
      toggleActiveInput,
      setActiveInput,
      adjustKeyableValue,
      addKeyFrame,
    }, dispatch)
  }
})
export default class BuildHolder extends Component {
  constructor(props){
    console.log('BuildHolder',props);
    super(props)
    this.state={
      initInput:'move'
    }
  }
  componentDidUpdate() {
    // console.log('testing update',this.props);
  }
  componentDidMount(){
  }

  render() {
    return (
      <div className={ `${styles}` }>
        <div className='buildHolder'>
          <h3 className='panel-title'>CHOOSE A MOUTH</h3>
          <div className='grid-holder'>
            <AssetGrid
              avatarBuilt={false}
              id='mouth'
              user={this.props.user}
              avatar={this.props.avatar}
              action={this.props.actions.setActiveInput}
              // activeAvatar={this.props.controls.initPositionValues[this.props.id+'ID']}
            />
          </div>
        </div>
      </div>
    )
  }
}
