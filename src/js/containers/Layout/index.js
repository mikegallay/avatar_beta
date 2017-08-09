import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import AvatarHolder from '../../components/AvatarHolder'
import ControlsHolder from '../../components/ControlsHolder'

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
    // console.log('Layout',this.props);
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
