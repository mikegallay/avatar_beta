import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"

import AvatarHolder from '../../components/AvatarHolder'
import BuildHolder from '../../components/BuildHolder'

export default class Build extends Component {
  constructor(props){
    // console.log('build',props);
    super(props)
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
        <div className='build-holder'>
          <AvatarHolder/>
          <BuildHolder data={{id:this.props.params.id}}/>
        </div>
      </div>
    )
  }
}
