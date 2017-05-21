import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ElementControls extends Component {
  constructor(props){
    super(props)
    // console.log('ElementControls',props);
    this.state={
      isActive : this.props.data.id == this.props.data.activeControl,
    }
  }
  componentDidMount() {
    var that = this

    this.$tab.addEventListener('click',function(){
      // console.log('clicked');
      that.props.actions.toggleActiveControl(that.props.data.id);
    })
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
    let padding = 32;// + (this.props.data.index/3);
    let letterW = 6.5;
    const base = 4;
    let left = (base + (this.props.data.charCount * letterW) + (padding * this.props.data.index)) + 'px';
    // console.log( this.props.data.index,left);
    return (
        <div className={ `element-controls ${this.props.data.id} test-${this.props.activeControl} ${this.props.activeControl == this.props.data.id ? 'active' : ''}` }>
          <div
            className='element-tab'
            ref = {tab => this.$tab = tab}
            style={{'left':left}}>
            <h4>{this.props.data.id}</h4>
          </div>
          <div className='element-panel'>
            <div className='element-buttons'>
              <h4>{this.props.data.id}</h4>
              <button>ADD KEYFRAME</button>
            </div>
          </div>
      </div>
    )
  }
}
