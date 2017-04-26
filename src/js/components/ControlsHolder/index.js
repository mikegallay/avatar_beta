import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import ControlsAnimation from './components/ControlsAnimation'
import ElementControls from './components/ElementControls'

import { bindActionCreators } from 'redux'

// import { fetchUser } from "../../actions/userActions"
import { toggleActiveControl } from "../../actions/controlsActions"

@connect((store) => {
  return {
    user: store.rootState.user.user,
    avatar: store.rootState.avatar
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({toggleActiveControl}, dispatch)
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
    for (var ob in avatarElements) {
      allElements.push(avatarElements[ob]);
    }

    for (var ob in avatarEyes) {
      allElements.push(avatarEyes[ob]);
    }

    const mappedElements = allElements.map(element =>
      <ElementControls

        key={element.id}
        actions={this.props.actions}
        activeControl={this.props.avatar.activeControl}
        data={{
          'w'  : element.w,
          'h'  : element.h,
          'id' : element.id,
          'x'  : element.bx,
          'y'  : element.by
        }}/>)

    return (
      <div className={ `${styles}` }>
        <div className='av-ac-main'>
          <p>ControlsHolder</p>
          <ControlsAnimation actions={this.props.actions} activeControl={this.props.avatar.activeControl} data={this.props.avatar.mainElement}/>
          <div className='element-controls-wrapper'>
            {mappedElements}
          </div>
        </div>
      </div>
    )
  }
}
