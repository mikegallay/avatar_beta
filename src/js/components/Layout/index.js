import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import AvatarHolder from '../AvatarHolder'
import ControlsHolder from '../ControlsHolder'

import { bindActionCreators } from 'redux'

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
          
          <ControlsHolder/>
        </div>
      </div>
    )
  }
}
