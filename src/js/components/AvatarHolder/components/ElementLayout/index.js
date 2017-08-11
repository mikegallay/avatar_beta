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
    const user = this.props.user.user
    const id = data ? data.element.id : ''
    const type = id === 'face' ? 'main-element' : 'child-element'

    this.state = {
      w         : data ? data.element.w : '100',
      h         : data ? data.element.h : '100',
      id        : id,
      useEyeBg  : false,
      artId     : data ? data.element.artId : '',
      eyeBallId : data ? data.element.eyeBallId : '',
      type      : type,
      x         : data ? data.element.x : 0,
      y         : data ? data.element.y : 0,
      spriteSheet : user ? user.spriteSheet : '/assets/icon-sprite-def01.svg',
      rxValue    : 0,
      ryValue    : 0,
      rzValue    : 0,
      sxValue    : data ? data.element.sx : .5,//.5,//id == 'face' || id == 'faceOver' ? .4 : .5,
      syValue    : data ? data.element.sy : .5,
      fxValue    : 1,
      fyValue    : 1,
      dxValue    : 0,
      dyValue    : 0,
      skinColor  : data ? data.skinColor : 'yellow',
    }
  }


  componentDidMount() {
    var that = this
    let xs = .5;

    this.$element.addEventListener('click',function(){
      var id = that.props.data.element.id;
      // console.log('clicked',that.props.data.id);

      if (id != 'face') that.props.actions.toggleActiveControl(that.props.data.element.id);
    })

    // console.log('GOSTATE',this.state);

    // you have to scale down the assets on load.
    // this allows for more pixels to render in browser.
    // your scaling will always be based off of this setting.
    // scaling should never go over 1.0 which based on this and the styles
    // would be the equivalent of scaling to 200%
    // if( this.state.id == 'face' || this.state.id == 'faceOver') xs = .4;
    // TweenMax.set('.element-scale.'+this.state.id, {scaleY:0.5, scaleX:xs});

  }
  componentDidUpdate(){
    let initPosVals = this.props.controls.initPositionValues

    // console.log('initPosVals',initPosVals);
    if (this.state.spriteSheet != this.props.user.user.spriteSheet){
      this.setState({
        spriteSheet:this.props.user.user.spriteSheet
      })
    }

    //set ART
    if (initPosVals && initPosVals[this.state.id+'ID'] != null && initPosVals[this.state.id+'ID'] != this.state.artId){
      let useEyeBg = false;
      const artId = initPosVals[this.state.id+'ID'];
      if (this.state.id == 'leftEye' || this.state.id == 'rightEye' ) {
        if (isNaN(artId.substr(artId.length - 1))) useEyeBg = true;
      }
      // console.log(isNaN(artId.substr(artId.length - 1)));
      this.setState({
        artId, useEyeBg
      })
    }

    //set RotateX
    if (initPosVals && initPosVals[this.state.id+'RX'] != this.state.rxValue){
      this.setState({
        rxValue: initPosVals[this.state.id+'RX']
      })
    }

    //set RotateY
    if (initPosVals && initPosVals[this.state.id+'RY'] != this.state.ryValue){
      this.setState({
        ryValue: initPosVals[this.state.id+'RY']
      })
    }

    //set RotateZ
    if (initPosVals && initPosVals[this.state.id+'RZ'] != this.state.rzValue){
      this.setState({
        rzValue: initPosVals[this.state.id+'RZ']
      })
    }

    //set FlipX
    if (initPosVals && initPosVals[this.state.id+'FX'] != this.state.fxValue){
      this.setState({
        fxValue: initPosVals[this.state.id+'FX']
      })
    }

    //set FlipY
    if (initPosVals && initPosVals[this.state.id+'FY'] != this.state.fyValue){
      this.setState({
        fyValue: initPosVals[this.state.id+'FY']
      })
    }

    //set ScaleX
    if (initPosVals && initPosVals[this.state.id+'SX'] != this.state.sxValue){
      if (initPosVals[this.state.id+'SX'] != null){
        this.setState({
          sxValue: initPosVals[this.state.id+'SX']
        })
      }
    }

    //set ScaleY
    if (initPosVals && initPosVals[this.state.id+'SY'] != this.state.syValue){
      if (initPosVals[this.state.id+'SY'] != null){
        this.setState({
          syValue: initPosVals[this.state.id+'SY']
        })
      }
    }

    //set MoveXY
    if (initPosVals && initPosVals[this.state.id+'DX'] != this.state.dxValue || initPosVals[this.state.id+'DY'] != this.state.dyValue){
      this.setState({
        dxValue: initPosVals[this.state.id+'DX'],
        dyValue: initPosVals[this.state.id+'DY']
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
        <use xlinkHref={`${this.state.spriteSheet}#eyeLid`} />
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
        style={{fill:this.state.skinColor}}
      >
        <use xlinkHref={`${this.state.spriteSheet}#${skinId}Skin`} />
      </svg>
    )
  }


  renderIcon(){
    // console.log('this.props',this.state.id,this.props);
    let id = this.state.id;
    let artId = this.state.artId;
    let eyeBallId = this.state.eyeBallId;
    let vb = '0 0 ' +(this.state.w * svgScale)+' '+(this.state.h * svgScale);
    if (id == 'rightEyeBall' || id == 'leftEyeBall') artId=eyeBallId;

    if (id == 'rightEye' || id == 'leftEye') id='eye';
    if (id == 'rightBrow' || id == 'leftBrow') id='brow';
    if (id == 'rightEar' || id == 'leftEar') id='ear';

    //set scale style depending on whether or not you are controlling the face element
    let scaleStyle = 'scale('+this.state.sxValue+','+this.state.syValue+')';

    //make sure the eyeballs never scale even when the eyes do.
    if (this.state.id == 'leftEyeBall' || this.state.id == 'rightEyeBall') scaleStyle = 'scale(.5,.5)';
    if (this.state.id == 'face') scaleStyle = 'scale('+this.props.data.element.artSx+','+this.props.data.element.artSy+')';

    let skinStyle = this.state.useEyeBg?{backgroundColor:this.state.skinColor}:{}
    if (this.state.id == 'face') skinStyle={fill:this.state.skinColor}

    return (
      <div className={`element-scale ${this.state.id}`} style={{transform:scaleStyle}}>
      <div className={`element-supersize ${this.state.id}`}>
        {this.state.id == 'rightEye' && this.props.data.element.useLids && this.renderLid(this.state.id)}
        {this.state.id == 'leftEye' && this.props.data.element.useLids && this.renderLid(this.state.id)}

        {this.state.id == 'rightEar' && this.renderSkin(artId)}
        {this.state.id == 'leftEar' && this.renderSkin(artId)}

        <svg
          viewBox={vb}
          className={`icon ${id} ${this.state.useEyeBg?'useEyeBg':''}`}
          ref={svg => this.$svg = svg}
          style={skinStyle}
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

  /*renderBG(){
    let sx = this.state.sxValue * 2;
    let sy = this.state.syValue * 2;
    return (
      <div className="eyebg" style={{backgroundColor: 'white', transform:'scale('+sx+','+sy+')'}}></div>
    )
  }*/



  render() {

    // let DYZ = 'rotateZ('+this.props.controls[this.state.id+'Z']+')';
    // let DYZ = 'rotateZ('+this.state.rzValue+')';

    let stateX = this.state.x ? this.state.x : 0;
    let stateY = this.state.y ? this.state.y : 0;

    let sx = this.state.sxValue * 2;
    let sy = this.state.syValue * 2;
    let eyebg = null;



    if (this.state.id=='leftEye' || this.state.id=='rightEye' && this.props.data.element.useMask) {
      eyebg = <div
          className={`eyebg ${this.state.id} ${this.state.artId}` }
          style={{
            backgroundColor: this.props.data.element.bgColor,
            transform:'scale('+sx+','+sy+')',
            /*maskImage: 'url(/assets/eye01.svg)',
            maskSize: '100%'*/
          }}></div>;
    }

    let isEyeBall = (this.state.id=='leftEyeBall' || this.state.id=='rightEyeBall')?'isEyeBall '+this.props.data.element.artid:'';
    // if(isEyeBall) console.log('pussy',this.props);    -webkit-mask-size: 100% 40%;
    let isEyeBallStyle = (this.state.id=='leftEyeBall' || this.state.id=='rightEyeBall')?'mis'+(Math.round(sy*100)+5):'';

    let scaleStyle = 'scale('+this.state.fxValue+','+this.state.fyValue+')';
    if (this.state.id == 'face') scaleStyle = 'scale('+sx+','+sy+')';


    return (

      <div className={ `${styles} ${this.state.id} ${isEyeBall} ${isEyeBallStyle}` }>
        <div
          className={`element-wrapper ${this.state.id} ${this.state.type}` }
          style={{
            'width':this.state.w + 'px',
            'height':this.state.h + 'px',
            'left':stateX + this.state.dxValue + '%',
            'top':stateY + this.state.dyValue + '%',
          }}>
            <div className={`element-rotateX ${this.state.id}`} style={{transform:'rotateX('+this.state.rxValue+'deg)'}}>
              <div className={`element-rotateY ${this.state.id}`} style={{transform:'rotateY('+this.state.ryValue+'deg)'}}>
                <div className={`element-rotateZ ${this.state.id}`} style={{transform:'rotateZ('+this.state.rzValue+'deg)'}}>
                  <div
                    ref = {element => this.$element = element}
                    className={`element-holder ${this.state.id}`}
                    style={{transform:scaleStyle}}
                    >
                    {eyebg}
                    {this.renderIcon()}
                    {this.props.children}
                    {/*this.state.rzValue*/}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
