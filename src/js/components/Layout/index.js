import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import AvatarHolder from '../AvatarHolder'
import AnimationControls from '../AnimationControls'

import { bindActionCreators } from 'redux'

import { hideAllControls, toggleControl } from "../../actions/elementControlsActions"

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
export default class Layout extends Component {
  constructor(props){
    super(props)
    this.state={
      rot:90
    }
    //add masterTL
  }
  componentDidUpdate() {
    // console.log('Layout update',this.props);
  }
  componentDidMount(){
    console.log('Layout',this.props);
  }

  render() {

    return (
      <div className={ `${styles}` }>
        <div className='layout'>
          <AvatarHolder/>
          <AnimationControls/>
        </div>
      </div>
    )
  }
}
