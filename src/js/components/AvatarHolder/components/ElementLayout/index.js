import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'
const url = '/assets/sprites.svg';
const Icon = (props) => (
<svg viewBox='0 0 50 50' className={`icon ${props.icon}`}>
  <use xlinkHref={`${url}#${props.icon}`} />
</svg>
);

export default class ElementLayout extends Component {
  constructor(props){
    super(props)
    // console.log('ElementLayout',props);
    const data = this.props.data
    const type = data.id === 'face' ? 'main-element' : 'child-element'

    this.state = {
      w     : data ? data.w : '100',
      h     : data ? data.h : '100',
      id    : data ? data.id : '',
      type  : type,
      x     : data ? data.x : '0%',
      y     : data ? data.y : '0%',
      spriteURL:'/assets/sprites.svg'
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

    // let le = document.getElementById('leftEye');
    // this.$svg.firstChild.setAttribute('fill','#ffcc00')
  }
  componentDidUpdate(){

  }

  renderEyeMask(id){
    console.log('renderEyeMask',id);
    let vb = '0 0 ' +this.state.w+' '+this.state.h;
    return(
      <svg
        viewBox={vb}
        className={`icon eyeMask ${id}Mask`}
        ref={svg => this.$svg = svg}
      >
        <use xlinkHref={`${this.state.spriteURL}#${id}Mask`} />
      </svg>
    )
  }


  renderIcon(){
    let id = this.state.id;
    let vb = '0 0 ' +this.state.w+' '+this.state.h;
    if (id == 'rightEyeBall' || id == 'leftEyeBall') id='eyeBall';
    console.log(id);
    return (
      <div className={`element-scale ${this.state.id}`}>
        <svg
          viewBox={vb}
          className={`icon ${id}`}
          ref={svg => this.$svg = svg}
        >
          <use xlinkHref={`${this.state.spriteURL}#${id}`} />
        </svg>
        {id == 'rightEye' && this.renderEyeMask(id)}
        {id == 'leftEye' && this.renderEyeMask(id)}
      </div>
    )
  }

  render() {
    return (
      <div className={ `${styles} ${this.state.id}` }>
        <div
          className={`element-wrapper ${this.state.id} ${this.state.type}` }
          style={{
            'width':this.state.w + 'px',
            'height':this.state.h + 'px',
            'left':this.state.x,
            'top':this.state.y,
          }}>
          {/*<div className={`element-scale ${this.state.id}`}>*/}
            <div className={`element-rotateX ${this.state.id}`}>
              <div className={`element-rotateY ${this.state.id}`}>
                {/*<div className={`element-rotateZ ${this.state.id}`}>*/}
                  <div
                    ref = {element => this.$element = element}
                    className={`element-holder ${this.state.id}`}

                    >
                    {this.renderIcon()}
                    {this.props.children}
                  </div>
                </div>
                {/* </div>*/}
          </div>
          {/* </div>*/}

        </div>
      </div>
    )
  }
}
