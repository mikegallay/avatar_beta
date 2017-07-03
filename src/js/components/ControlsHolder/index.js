import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import ControlsAnimation from './components/ControlsAnimation'
import ElementControls from './components/ElementControls'

import { bindActionCreators } from 'redux'

// import { fetchUser } from "../../actions/userActions"
import { toggleActiveControl,adjustKeyableValue } from "../../actions/controlsActions"

@connect((store) => {
  return {
    user: store.rootState.user.user,
    avatar: store.rootState.avatar
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({toggleActiveControl,adjustKeyableValue}, dispatch)
  }
})
export default class ControlsHolder extends Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate() {
    // console.log('Layout update',this.props);
  }
  componentDidMount(){
    // console.log('ControlsHolder',this.props);
  }

  render() {
    const avatarElements = this.props.avatar.elements
    const avatarEyes = this.props.avatar.eyes

    let allElements=[];
    let charCount = 0;
    for (var ob in avatarElements) {
      avatarElements[ob].charCount = charCount;
      allElements.push(avatarElements[ob]);
      charCount += avatarElements[ob].id.length;
    }

    for (var ob in avatarEyes) {
      avatarEyes[ob].charCount = charCount;
      allElements.push(avatarEyes[ob]);
      charCount += avatarEyes[ob].id.length;
    }

    const mappedElements = allElements.map((element,index) =>
      <ElementControls

        key={element.id}
        actions={this.props.actions}
        activeControl={this.props.avatar.activeControl}
        data={{
          'index' : index,
          'charCount' : element.charCount,
          //'w'     : element.w,
          // 'h'     : element.h,
          'id'    : element.id,
          // 'x'     : element.bx,
          // 'y'     : element.by
        }}/>)

    return (
      <div className={ `${styles}` }>
        <div className='avatarControls'>
          {/*<p>ControlsHolder</p>*/}
          <ControlsAnimation actions={this.props.actions} activeControl={this.props.avatar.activeControl} data={this.props.avatar.mainElement}/>
          <div className='element-controls-wrapper'>
            {mappedElements}
          </div>
        </div>
      </div>
    )
  }
}
