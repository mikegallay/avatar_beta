import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import ControlsAnimation from './components/ControlsAnimation'
import ElementControls from './components/ElementControls'

import { bindActionCreators } from 'redux'

// import { fetchUser } from "../../actions/userActions"
import { hideAllControls, toggleControl } from "../../actions/controlsActions"

@connect((store) => {
  return {
    user: store.rootState.user.user,
    avatar: store.rootState.avatar
  };
},(dispatch) => {
  return {
    actions:bindActionCreators({hideAllControls, toggleControl}, dispatch)
  }
})
export default class AnimationControls extends Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate() {
    // console.log('Layout update',this.props);
  }
  componentDidMount(){
    console.log('Layout',this.props);
  }

  render() {
    const avatarElements = this.props.avatar.elements

    let allElements=[];
    for (var ob in avatarElements) {
      allElements.push(avatarElements[ob]);
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
        <div className="av-ac-main">
          <p>AnimationControls</p>
          <ControlsAnimation actions={this.props.actions} activeControl={this.props.avatar.activeControl} data={this.props.avatar.mainElement}/>
          {mappedElements}
        </div>
      </div>
    )
  }
}
