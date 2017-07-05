import React, { Component } from 'react';
import { styles } from './styles.scss';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'
const url = '/assets/icon-sprite-def.svg';
const svgScale = 50;

export default class ElementLayout extends Component {
  constructor(props){
    super(props)
    console.log('ElementLayout',props);
    const data = this.props.data
    const user = this.props.user
    const type = data.id === 'face' ? 'main-element' : 'child-element'

    this.state = {
      w         : data ? data.w : '100',
      h         : data ? data.h : '100',
      id        : data ? data.id : '',
      artId     : data ? data.artId : '',
      eyeBallId : data ? data.eyeBallId : '',
      type      : type,
      x         : data ? data.bx : '0%',
      y         : data ? data.by : '0%',
      spriteSheet : user ? user.spriteSheet : '/assets/icon-sprite-def01.svg',
      zValue    : 0
    }
  }


  componentDidMount() {
    var that = this
    let xs = .5;

    // you have to scale down the assets on load.
    // this allows for more pixels to render in browser.
    // your scaling will always be based off of this setting.
    // scaling should never go over 1.0 which based on this and the styles
    // would be the equivalent of scaling to 200%
    if( this.state.id == 'face' || this.state.id == 'faceOver') xs = .4;
    TweenMax.set('.element-scale.'+this.state.id, {scaleY:0.5, scaleX:xs});

  }
  componentDidUpdate(){
    // console.log('ElementLayout Update',this.state.spriteSheet);
    if (this.state.spriteSheet != this.props.user.spriteSheet){
      this.setState({
        spriteSheet:this.props.user.spriteSheet
      })
    }
// console.log(this.state.id,this.props.controls[this.state.id+'Z']);
    if (this.props.controls[this.state.id+'Z'] && this.props.controls[this.state.id+'Z'] != this.state.zValue){
      console.log('yes set',this.props.controls[this.state.id+'Z'],this.state.zValue);
      this.setState({
        zValue: this.props.controls[this.state.id+'Z']
      })
    }


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
        <use xlinkHref={`${this.state.spriteSheet}#${id}Lid`} />
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
        <use xlinkHref={`${this.state.spriteSheet}#${skinId}Skin`} />
      </svg>
    )
  }


  renderIcon(){
    // console.log('this.props',this.props);
    let id = this.state.id;
    let artId = this.state.artId;
    let eyeBallId = this.state.eyeBallId;
    let vb = '0 0 ' +(this.state.w * svgScale)+' '+(this.state.h * svgScale);
    if (id == 'rightEyeBall' || id == 'leftEyeBall') artId=eyeBallId;

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
      <div className={`element-supersize ${this.state.id}`}>
        {this.state.id == 'rightEye' && this.props.data.useLids && this.renderLid(id)}
        {this.state.id == 'rightEye' && this.props.data.useMask && this.renderSkin(artId)}

        {this.state.id == 'leftEye' && this.props.data.useLids && this.renderLid(id)}
        {this.state.id == 'leftEye' && this.props.data.useMask && this.renderSkin(artId)}
        {/*this.state.id == 'leftEye' && this.props.data.useMask && this.renderClipPath(artId)*/}

        {this.state.id == 'rightEar' && this.renderSkin(artId)}
        {this.state.id == 'leftEar' && this.renderSkin(artId)}
        <svg
          viewBox={vb}
          className={`icon ${id}`}
          ref={svg => this.$svg = svg}
        >
          <use xlinkHref={`${this.state.spriteSheet}#${artId}`} />
        </svg>

</div>

      </div>
    )
  }

  renderClipPath(artId){
    return (
      <svg height="0" width="0">
          <defs>
              <clipPath clipPathUnits="objectBoundingBox" id="faceclippath">
                  <use xlinkHref={`${this.state.spriteSheet}#${artId}`} />
              </clipPath>
          </defs>
      </svg>
    )
  }

  render() {

    // let myZ = 'rotateZ('+this.props.controls[this.state.id+'Z']+')';
    // let myZ = 'rotateZ('+this.state.zValue+')';



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
            <div className={`element-rotateX ${this.state.id}`}>
              <div className={`element-rotateY ${this.state.id}`}>
                <div className={`element-rotateZ ${this.state.id}`} style={{transform:'rotate('+this.state.zValue+'deg)'}}>
                  <div
                    ref = {element => this.$element = element}
                    className={`element-holder ${this.state.id}`}
                    >
                    {this.renderIcon()}
                    {this.props.children}
                    {/*this.state.zValue*/}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
