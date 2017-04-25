import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ElementControls extends Component {
  constructor(props){
    super(props)
    console.log('ElementControls',props);
    this.state={
      isActive : this.props.data.id == this.props.data.activeControl,
    }
    //addkeyframe
    //toggle hold
    //condition to determine what controls are available
  }
  componentDidMount() {

  }
  componentWillUpdate(){
    // console.log(this.props.data.id,'willupdate');
  }
  componentDidUpdate(props){
    // console.log(this.props.data.id, props);
    // if (props.data.id != props.data.activeControl)
    // this.setState({
    //   isActive : props.data.id == props.data.activeControl,
    // })
  }
  render() {
    return (
      <div className={ `${styles}` }>
        <div className={ `element-controls ${this.props.data.id} test-${this.props.activeControl} ${this.props.activeControl == this.props.data.id ? '' : 'hidden'}` }>
          <h4>{this.props.data.id}</h4>
          <button>ADD KEYFRAME</button>
        </div>
      </div>
    )
  }
}
