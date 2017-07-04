import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import ControlsAnimation from './components/ControlsAnimation'
import ElementControls from './components/ElementControls'

import { bindActionCreators } from 'redux'

// import { fetchUser } from "../../actions/userActions"
import { toggleActiveControl,adjustKeyableValue } from "../../actions/controlsActions"
import { addKeyFrame } from "../../actions/timelineActions"

@connect((store) => {
  return {
    user: store.rootState.user.user,
    avatar: store.rootState.avatar,
    timeline: store.rootState.timeline,
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({
      toggleActiveControl,
      adjustKeyableValue,
      addKeyFrame,
      // updateProgress
    }, dispatch)
  }
})
export default class ControlsHolder extends Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate() {
    // console.log('testing update',this.props);
  }
  componentDidMount(){
    // ugly fix to make the proper tab show up.
    this.props.actions.toggleActiveControl('rightEar');
  }

  change(e){
    // console.log('select',e.target);
    this.props.actions.toggleActiveControl(e.target.value);
  }

  render() {
    const avatarElements = this.props.avatar.elements
    const avatarEyes = this.props.avatar.eyes

    let allElements=[];
  //  let charCount = 0;
    for (var ob in avatarElements) {
    //  avatarElements[ob].charCount = charCount;
      allElements.push(avatarElements[ob]);
      //charCount += avatarElements[ob].id.length;
    }

    for (var ob in avatarEyes) {
    //  avatarEyes[ob].charCount = charCount;
      allElements.push(avatarEyes[ob]);
    //  charCount += avatarEyes[ob].id.length;
    }

    const mappedElementsPanels = allElements.map((element,index) =>
      <ElementControls

        key={element.id}
        actions={this.props.actions}
        activeControl={this.props.avatar.activeControl}
        timeline={this.props.timeline}
        data={{
          'index' : index,
          //'charCount' : element.charCount,
          //'w'     : element.w,
          // 'h'     : element.h,
          'id'    : element.id,
          // 'x'     : element.bx,
          // 'y'     : element.by
        }}/>)

    // allElements.reverse();

    const mappedOptions = allElements.map((element,index) =>
      <option
        ref = {dd => this.$dd = dd}
        key={element.id}
        value={element.id}>
          {element.id}
        </option>)

    let progress = this.props.timeline.masterTimeline?(this.props.timeline.masterProgress *100)+'%':'0%';

    return (
      <div className={ `${styles}` }>
        <div className='avatarControls'>
          <div className='main-timeline'>
            <div
              ref = {playhead => this.$playhead = playhead}
              className="main-timeline-playhead"
              style={ {left:progress} }
              >
            </div>
          </div>
          {/*<p>ControlsHolder</p>
          <ControlsAnimation actions={this.props.actions} activeControl={this.props.avatar.activeControl} data={this.props.avatar.mainElement}/>*/}
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
