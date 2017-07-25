import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux";
import Slider from 'rc-slider';

import ControlsAnimation from './components/ControlsAnimation'
import ElementControls from './components/ElementControls'

import { bindActionCreators } from 'redux'

// import { fetchUser } from "../../actions/userActions"
import { toggleActiveControl,adjustKeyableValue,toggleActiveInput,setActiveInput } from "../../actions/controlsActions"
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
      setActiveInput,
      adjustKeyableValue,
      addKeyFrame,
    }, dispatch)
  }
})
export default class ControlsHolder extends Component {
  constructor(props){
    console.log('ControlsHolder',props);
    super(props)
    this.state={
      initInput:'move'
    }
  }
  componentDidUpdate() {
    // console.log('testing update',this.props);
  }
  componentDidMount(){
    // ugly fix to make the proper tab show up.
    this.props.actions.toggleActiveControl('rightEar');
    this.props.actions.toggleActiveInput(this.state.initInput);
  }

  change(e){
    // console.log('toggleActiveControl',e.target.value,this.props.controls.activeInputs[e.target.value]);
    this.props.actions.toggleActiveControl(e.target.value);
    this.props.actions.toggleActiveInput(this.props.controls.activeInputs[e.target.value]);
  }

  onSliderChange = (value) => {
    this.props.timeline.masterTimeline.pause();
    const val = Number(value/100);
    this.props.timeline.masterTimeline.progress(val);
  }

  render() {
    let activeAvatar = this.props.avatar.avatars[this.props.avatar.activeAvatar];
    const avatarElements = activeAvatar.elements
    const avatarEyes = activeAvatar.eyes

    let allElements=[];
    for (var ob in avatarElements) {
      allElements.push(avatarElements[ob]);
    }

    for (var ob in avatarEyes) {
      allElements.push(avatarEyes[ob]);
    }

    allElements.push({id:'eyeFocus'},{id:'face'});

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

    let progress = this.props.timeline.masterTimeline ? this.props.timeline.masterProgress : 0;

    return (
      <div className={ `${styles}` }>
        <div className='avatarControls'>
          <Slider
            className="main-timeline"
            defaultValue={0}
            value={progress*100}
            trackStyle={{ backgroundColor: '#eeaa22', height: 20, position:'relative' }}
            handleStyle={{ position:'absolute', width:10, height:'100%',backgroundColor:'white', border:'1px solid red', marginLeft:-5, top:0,left:0, }}
            railStyle={{ backgroundColor: '#eeeeee', height: 20, width: '100%', position:'absolute'}}
            onChange={this.onSliderChange}
          />
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
