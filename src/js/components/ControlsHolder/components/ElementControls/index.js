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
  }
  componentDidMount() {
    var that = this

    /*this.$tab.addEventListener('click',function(){
      // console.log('clicked');
      that.props.actions.toggleActiveControl(that.props.data.id);
    })*/

    var bref = this[this.props.data.id + 'Input'];
    this[this.props.data.id + 'Button'].addEventListener('click',function(){
      // const inp = docu
      console.log('clicked',bref.value);
      that.props.actions.adjustKeyableValue(that.props.data.id,bref.value);
    })

    /*this.$ke.addEventListener('click',function(){
      console.log('clicked');
      // that.props.actions.toggleActiveControl(that.props.data.id);
    })*/
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

  renderKeyableElementControls(){
    const allElements = [{id:'all'},{id:'scale'},{id:'rotate'},{id:'move'}];

    const mappedElements = allElements.map((element,index) =>
      <div
        key={element.id}
        ref = {keyableElement => element.id = keyableElement}
        data={{
          'index' : index,
          'id'    : element.id,
        }}>
        {element.id}&nbsp;|&nbsp;
        </div>
      )

    return mappedElements;
  }

  render() {
    return (
        <div className={ `element-controls ${this.props.data.id} test-${this.props.activeControl} ${this.props.activeControl == this.props.data.id ? 'active' : ''}` }>
          <div className='element-panel'>

            <div className='element-elements'>
              <div><span className='panel-title'>{this.props.data.id}&nbsp;-&nbsp;</span></div>
              {this.renderKeyableElementControls()}
            </div>
            <div className='element-buttons'>


              <input ref={kfInput => this[this.props.data.id + 'Input'] = kfInput } id={`${this.props.data.id}Input`} name={`${this.props.data.id}Input`}/>
              <button ref={kf => this[this.props.data.id + 'Button'] = kf }>ADD KEYFRAME</button>
            </div>
          </div>
      </div>
    )
  }
}
