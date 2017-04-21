import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ElementAnimation extends Component {
  constructor(props){
    super(props)
    console.log('ElementAnimation',props);
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
  componentWillMount() {

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
          <div className={`element-scale ${this.state.id}`}>
            <div className={`element-rotateX ${this.state.id}`}>
              <div className={`element-rotateY ${this.state.id}`}>
                <div className={`element-rotateZ ${this.state.id}`}>
                  <div className={`element-holder ${this.state.id}`}></div>
                  {this.props.children}
                </div>
              </div>
            </div>
            </div>

        </div>
      </div>
    )
  }
}
