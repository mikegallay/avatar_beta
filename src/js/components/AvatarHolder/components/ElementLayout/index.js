import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'
const url = '/assets/icon-sprite-def.svg';
const svgScale = 50;
/*const Icon = (props) => (
<svg viewBox='0 0 50 50' className={`icon ${props.icon}`}>
  <use xlinkHref={`${url}#${props.icon}`} />
</svg>
);*/

export default class ElementLayout extends Component {
  constructor(props){
    super(props)
    console.log('ElementLayout',props);
    const data = this.props.data
    const type = data.id === 'face' ? 'main-element' : 'child-element'

    this.state = {
      w     : data ? data.w : '100',
      h     : data ? data.h : '100',
      id    : data ? data.id : '',
      artId : data ? data.artId : '',
      type  : type,
      x     : data ? data.bx : '0%',
      y     : data ? data.by : '0%',
      spriteURL:'/assets/icon-sprite-def.svg'
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

  renderLid(id){
    // console.log('renderSkin',id);
    let vb = '0 0 ' +(this.state.w * svgScale)+' '+(this.state.h * svgScale);

    return(
      <svg
        viewBox={vb}
        className={`icon eyeLid ${id}Lid`}
        ref={svg => this.$svg = svg}
      >
        <use xlinkHref={`${this.state.spriteURL}#${id}Lid`} />
      </svg>
    )
  }

  renderSkin(id){
    // console.log('renderSkin',id);
    let skinId = id;
    let vb = '0 0 ' +(this.state.w * svgScale)+' '+(this.state.h * svgScale);
    if (skinId == 'rightEye' || skinId == 'leftEye') skinId='eye';
    if (skinId == 'rightEar' || skinId == 'leftEar') skinId='ear';
    // console.log(id);
    return(
      <svg
        viewBox={vb}
        className={`icon skin ${skinId}Skin`}
        ref={svg => this.$svg = svg}
      >
        <use xlinkHref={`${this.state.spriteURL}#${skinId}Skin`} />
      </svg>
    )
  }


  renderIcon(){
    // console.log('this.props',this.props);
    let id = this.state.id;
    let artId = this.state.artId;
    let vb = '0 0 ' +(this.state.w * svgScale)+' '+(this.state.h * svgScale);
    if (id == 'rightEyeBall' || id == 'leftEyeBall') artId='eyeBall';

    if (id == 'rightEye' || id == 'leftEye') id='eye';
    // if (!this.props.data.useEyeBall && id=='eye') id='noEyeBall';

    if (this.state.id == 'leftEye') TweenMax.set('.element-holder.leftEye',{background:this.props.data.bgColor})
    if (this.state.id == 'rightEye') TweenMax.set('.element-holder.rightEye',{background:this.props.data.bgColor})

    if (id == 'rightBrow' || id == 'leftBrow') id='brow';
    if (id == 'rightEar' || id == 'leftEar') id='ear';
    // console.log(id);
    // console.log('lids/mask',this.props.data.useLids,this.props.data.useMask);
    return (
      <div className={`element-scale ${this.state.id}`}>
        <svg
          viewBox={vb}
          className={`icon ${id}`}
          ref={svg => this.$svg = svg}
        >
          <use xlinkHref={`${this.state.spriteURL}#${artId}`} />
        </svg>
        {this.state.id == 'rightEye' && this.props.data.useLids && this.renderLid(id)}
        {this.state.id == 'rightEye' && this.props.data.useMask && this.renderSkin(artId)}

        {this.state.id == 'leftEye' && this.props.data.useLids && this.renderLid(id)}
        {this.state.id == 'leftEye' && this.props.data.useMask && this.renderSkin(artId)}

        {this.state.id == 'rightEar' && this.renderSkin(artId)}
        {this.state.id == 'leftEar' && this.renderSkin(artId)}
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
