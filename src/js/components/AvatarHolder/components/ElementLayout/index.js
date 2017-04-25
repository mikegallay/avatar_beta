import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ElementLayout extends Component {
  constructor(props){
    super(props)
    // console.log('ElementLayout',props);
    const data = this.props.data
    const type = data.id === 'face' ? 'main-element' : 'child-element'

    this.state = {
      w     : data ? data.w + 'px' : '100px',
      h     : data ? data.h + 'px' : '100px',
      id    : data ? data.id : '',
      type  : type,
      x     : data ? data.x : '0%',
      y     : data ? data.y : '0%',
    }
  }
  componentDidMount() {
    var that = this

    if (this.state.type == 'child-element'){
      this.$element.addEventListener('click',function(){
        console.log('clicked',that.state.id);
        that.props.actions.toggleActiveControl(that.state.id);
        // TweenMax.to('.face.element-rotateZ',.25,{rotationZ:that.state.rot,ease:Linear.easeNone,onComplete: () => {that.setState({rot:that.state.rot+90})}})
        // TweenMax.to('.right-eye.element-scale',.2,{scaleX:1,scaleY:.1,delay:.3, yoyo:true, repeat:1, ease:Linear.easeNone})
      })
    }
  }
  componentDidUpdate(){

  }
  render() {
    return (
      <div className={ `${styles}` }>
        <div
          className={`element-wrapper ${this.state.id} ${this.state.type}` }
          style={{
            'width':this.state.w,
            'height':this.state.h,
            'left':this.state.x,
            'top':this.state.y,
          }}>
          {/*<div className={`element-scale ${this.state.id}`}>*/}
            <div className={`element-rotateX ${this.state.id}`}>
              <div className={`element-rotateY ${this.state.id}`}>
                <div className={`element-rotateZ ${this.state.id}`}>
                  <div
                    ref = {element => this.$element = element}
                    className={`element-holder ${this.state.id}`}>
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          {/*</div>*/}

        </div>
      </div>
    )
  }
}
