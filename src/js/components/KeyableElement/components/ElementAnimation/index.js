import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ElementAnimation extends Component {
  constructor(props){
    super(props)
    console.log('ElementAnimation',props);
    const data = this.props.data

    this.state = {
      w : data ? data.w + 'px' : '100px',
      h : data ? data.h + 'px' : '100px',
    }
  }
  componentWillMount() {

  }
  componentDidUpdate(){

  }
  render() {
    return (
      <div className={ `${styles}` }>
        <div className='element-wrapper' style={{
          'width':this.state.w,
          'height':this.state.h,
          'background':'none'
        }}>
          <div className='element-scale'>
            <div className='element-rotateX'>
              <div className='element-rotateY'>
                <div className='element-rotateZ'>
                  <div className='element-holder'>ElementAnimation</div>
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
