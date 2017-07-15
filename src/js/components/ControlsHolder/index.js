import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import ControlsAnimation from './components/ControlsAnimation'
import ElementControls from './components/ElementControls'

import { bindActionCreators } from 'redux'

// import { fetchUser } from "../../actions/userActions"
import { toggleActiveControl,adjustKeyableValue,toggleActiveInput } from "../../actions/controlsActions"
import { addKeyFrame } from "../../actions/timelineActions"

@connect((store) => {
  return {
    user: store.rootState.user.user,
    avatar: store.rootState.avatar,
    timeline: store.rootState.timeline,
    controls: store.rootState.controls,
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({
      toggleActiveControl,
      toggleActiveInput,
      adjustKeyableValue,
      addKeyFrame,
    }, dispatch)
  }
})
export default class ControlsHolder extends Component {
  constructor(props){
    console.log('ControlsHolder',props);
    super(props)
  }
  componentDidUpdate() {
    // console.log('testing update',this.props);
  }
  componentDidMount(){
    // ugly fix to make the proper tab show up.
    this.props.actions.toggleActiveControl('rightEar');
    this.props.actions.toggleActiveInput('move');
  }

  change(e){
    // console.log('toggleActiveControl',e.target.value);
    this.props.actions.toggleActiveControl(e.target.value);
    this.props.actions.toggleActiveInput('move');
  }

  render() {
    const avatarElements = this.props.avatar.elements
    const avatarEyes = this.props.avatar.eyes

    let allElements=[];
    for (var ob in avatarElements) {
      allElements.push(avatarElements[ob]);
    }

    for (var ob in avatarEyes) {
      allElements.push(avatarEyes[ob]);
    }

    const mappedElementsPanels = allElements.map((element,index) =>
      <ElementControls

        key={element.id}
        actions={this.props.actions}
        activeControl={this.props.controls.activeControl}
        timeline={this.props.timeline}
        controls={this.props.controls}
        data={{
          'index' : index,
          'id'    : element.id,
        }}/>)

    const mappedOptions = this.props.controls.keyableElements.map((element,index) =>
      <option
        ref = {dd => this.$dd = dd}
        key={element.val}
        value={element.val}>
          {element.name}
        </option>)

    let progress = this.props.timeline.masterTimeline?(this.props.timeline.masterProgress *100)+'%':'0%';

    return (
      <div className={ `${styles}` }>
        <div className='avatarControls'>
          {/* the main graphic for the animation timeline*/}
          <div className='main-timeline'>
            <div
              ref = {playhead => this.$playhead = playhead}
              className="main-timeline-playhead"
              style={ {left:progress} }
              >
            </div>
          </div>

          <div className='element-controls-wrapper'>

            <select onChange={this.change.bind(this)}>
              {mappedOptions}
            </select>

            {mappedElementsPanels}
          </div>
        </div>
      </div>
    )
  }
}
