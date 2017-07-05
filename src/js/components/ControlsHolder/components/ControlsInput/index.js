import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ControlsInput extends Component {
  constructor(props){
    super(props)
    console.log('ControlsInput',props);
  }
  componentWillMount() {

  }
  componentDidUpdate(){
    var bref = this[this.props.id + 'Input'];
    var id = this.props.id;
    var that = this;
    this[this.props.id + 'Button'].addEventListener('click',function(){
      // const inp = docu
      // console.log('clicked',bref.value,id);
      that.props.action(id,'Z',Number(bref.value));
    })
  }
  render() {
    return (
      <div className={ `${styles}` }>
        <div>ControlsInput</div>
        <input ref={kfInput => this[this.props.id + 'Input'] = kfInput } id={`${this.props.id}Input`} name={`${this.props.id}Input`}/>
        <button ref={kf => this[this.props.id + 'Button'] = kf }>adjust</button>
      </div>
    )
  }
}
