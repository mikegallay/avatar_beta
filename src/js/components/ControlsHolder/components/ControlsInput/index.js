import React, { Component } from 'react';
import Knob from 'react-canvas-knob';
import Draggable from 'react-draggable';
import { styles } from './styles.scss';
import Slider from 'rc-slider';
import AssetGrid from '../../../Global/AssetGrid'

export default class ControlsInput extends Component {
  constructor(props){
    super(props)
    // console.log('ControlsInput',props);
    this.state = {
      activeInput:'move',
      rxvalue: 0,
      ryvalue: 0,
      rzvalue: 0,
      sxvalue:.5,
      syvalue:.5,
      fyvalue:1,
      fxvalue:props.id=='rightEye' || props.id=='rightBrow' ? -1 : 1,
      rmin:0,
      rmax:360,
      xymax:60,
      moveMax:25,
      deltaPosition: {
        x: 0, y: 0
      },
      eyePosition: {
        x: 0, y: 0
      }
    };
  }
  componentWillMount() {

  }
  componentDidUpdate(){

    if (this.props.id == this.props.controls.activeControl && this.props.controls.activeInput != this.state.activeInput){
      // console.log('inputtt',this.props.controls.activeInput,this.state.activeInput);
      this.setState({activeInput: this.props.controls.activeInput});
    }

  }
  knobChangeRX = (newValue) => {
    this.props.action(this.props.id,'RX',Number(newValue));
    this.setState({rxvalue: newValue});
  }
  knobChangeRXEnd = (newValue) => {}

  knobChangeRY = (newValue) => {
    this.props.action(this.props.id,'RY',Number(newValue));
    this.setState({ryvalue: newValue});
  }
  knobChangeRYEnd = (newValue) => {}

  knobChangeRZ = (newValue) => {
    this.props.action(this.props.id,'RZ',Number(newValue));
    this.setState({rzvalue: newValue});
  }
  knobChangeRZEnd = (newValue) => {}

  flipChangeY = (cb) => {
    let flip = this.state.fyvalue;
    this.props.action(this.props.id,'FY',this.$fyflip.checked?flip*-1:flip);
  }

  flipChangeX = (cb) => {
    let flip = this.state.fxvalue;
    this.props.action(this.props.id,'FX',this.$fxflip.checked?flip*-1:flip);
  }

  onSliderChangeSX = (value) => {
    const val = Number(value/100);
    this.setState({sxvalue: val});
    this.props.action(this.props.id,'SX',val);
  }
  onSliderChangeSY = (value) => {
    const val = Number(value/100);
    this.setState({syvalue: val});
    this.props.action(this.props.id,'SY',val);
    if (this.props.id == "leftEye") this.props.action('leftEyeBall','SY',val);
    if (this.props.id == "rightEye") this.props.action('rightEyeBall','SY',val);
  }
  handleScaleKeyUp(e){
    if (e.keyCode == 38 || e.keyCode == 40){
      let input = e.target;
      let delta = 0;
      if (e.keyCode == 38) delta = 1;
      if (e.keyCode == 40) delta = -1;

      var val = Number(input.value);
      val += delta;

      if (isNaN(val)) val = 0;
      if (val > 100) val = 100;
      if (val < 0) val = 0;

      input.value = val;

      if (e.target == this.$scaleInputX){
        this.handleScaleXInput(e);
      }else if (e.target == this.$scaleInputY){
          this.handleScaleYInput(e);
      }

    }
  }

  handleScaleXInput(e) {
    let val = e.target.value/100;
    if (isNaN(val)) val = 0;
    if (val > 100) val = 100;
    if (val < 0) val = 0;
    if (val != this.state.sxvalue){
      this.setState({sxvalue: val});
      this.props.action(this.props.id,'SX',val);
    }
  }
  handleScaleYInput(e) {
    let val = e.target.value/100;
    if (isNaN(val)) val = 0;
    if (val > 100) val = 100;
    if (val < 0) val = 0;
    if (val != this.state.syvalue){
      this.setState({syvalue: val});
      this.props.action(this.props.id,'SY',val);
      if (this.props.id == "leftEye") this.props.action('leftEyeBall','SY',val);
      if (this.props.id == "rightEye") this.props.action('rightEyeBall','SY',val);
    }
  }

  setMovePosition(x,y){
    let xchange = (x/this.state.xymax)*this.state.moveMax;
    let ychange = (y/this.state.xymax)*this.state.moveMax;

    if (this.props.id=="eyeFocus"){
     this.props.action('leftEyeBall','DX',xchange);
     this.props.action('leftEyeBall','DY',ychange);
     this.props.action('rightEyeBall','DX',-xchange);
     this.props.action('rightEyeBall','DY',ychange);
    }else{
     this.props.action(this.props.id,'DX',xchange);
     this.props.action(this.props.id,'DY',ychange);
    }
  }

  handleMoveXYKeyUp(e){
    if (e.keyCode == 38 || e.keyCode == 40){
      let input = e.target;
      let delta = 0;
      if (e.keyCode == 38) delta = 1;
      if (e.keyCode == 40) delta = -1;

      var val = Number(input.value);
      val += delta;

      if (isNaN(val)) val = 0;
      if (val > 100) val = 100;
      if (val < -100) val = -100;

      input.value = val;

      this.handleMoveXYInput(e);
    }
  }

  handleMoveXYInput(e) {
    let valX = (this.$moveInputX.value/100)*this.state.xymax;
    let valY = (this.$moveInputY.value/100)*this.state.xymax;

    let position = (this.props.id=="eyeFocus") ? 'eyePosition' : 'deltaPosition';

    if (isNaN(valX)) valX = 0;
    if (isNaN(valY)) valY = 0;

    if (valX > this.state.xymax) valX = this.state.xymax;
    if (valY > this.state.xymax) valY = this.state.xymax;

    if (valX < -this.state.xymax) valX = -this.state.xymax;
    if (valY < -this.state.xymax) valY = -this.state.xymax;

    // console.log(this.$moveInputX.value,this.$moveInputY.value);
    // console.log(valX,this.state[position].x,valY,this.state[position].y);
    if (valX != this.state[position].x || valY != this.state[position].y){
      this.setState({[position]: {x:valX,y:valY}});
      this.setMovePosition(valX,valY);
    }
  }

  handleDragXY(e, ui) {
    let position = (this.props.id=="eyeFocus") ? 'eyePosition' : 'deltaPosition';

    const {x, y} = this.state[position];
    let dx = x + ui.deltaX;
    let dy = y + ui.deltaY;

    this.setState({
     [position]: {
       x: dx,
       y: dy,
     }
    });

    this.setMovePosition(dx,dy);

 }

  render() {
    let position = (this.props.id=="eyeFocus") ? 'eyePosition' : 'deltaPosition';

    return (
      <div className={ `${styles}` }>
        {/*<div>ControlsInput</div>*/}

        {/*<input ref={kfInput => this[this.props.id + 'Input'] = kfInput } id={`${this.props.id}Input`} name={`${this.props.id}Input`}/>
        <button ref={kf => this[this.props.id + 'Button'] = kf }>adjust</button>*/}

        <div className={ `control-input swapArt-control ${this.state.activeInput=='swapArt'?'active':''}` }>
          <h4>Select Different Art.</h4>
          <AssetGrid
            avatarBuilt={true}
            id={this.props.id}
            user={this.props.user}
            avatar={this.props.avatar}
            action={this.props.action}
            // activeAvatar={this.props.controls.initPositionValues[this.props.id+'ID']}
          />
        </div>
        <div className={ `control-input rotate-control ${this.state.activeInput=='rotatex'?'active':''}` }>
          <Knob
            min={this.state.rmin}
            max={this.state.rmax}
            thickness={.2}
            cursor={true}
            width={160} height={160}
            value={this.state.rxvalue}
            onChange={this.knobChangeRX}
            onChangeEnd={this.knobChangeRXEnd}
          />
        </div>
        <div className={ `control-input rotate-control ${this.state.activeInput=='rotatey'?'active':''}` }>
          <Knob
            min={this.state.rmin}
            max={this.state.rmax}
            thickness={.2}
            cursor={true}
            width={160} height={160}
            value={this.state.ryvalue}
            onChange={this.knobChangeRY}
            onChangeEnd={this.knobChangeRYEnd}
          />
        </div>
        <div className={ `control-input rotate-control ${this.state.activeInput=='rotatez'?'active':''}` }>
          <Knob
            min={this.state.rmin}
            max={this.state.rmax}
            thickness={.2}
            cursor={true}
            width={160} height={160}
            value={this.state.rzvalue}
            onChange={this.knobChangeRZ}
            onChangeEnd={this.knobChangeRZEnd}
          />
        </div>

        <div className={ `control-input flip-control ${this.state.activeInput=='flip'?'active':''}` }>
          <input
            className="checkbox"
            ref={fyflip => this.$fyflip = fyflip}
            id="checkBox-flipY"
            type="checkbox"
            onClick={this.flipChangeY}/>
          <label for="checkBox-flipY">Flip y-scale?</label><br/>
          <input
            className="checkbox"
            ref={fxflip => this.$fxflip = fxflip}
            id="checkBox-flipX"
            type="checkbox"
            onClick={this.flipChangeX}/>
          <label for="checkBox-flipX">Flip x-scale?</label>
        </div>

        <div className={ `control-input scale-control ${this.state.activeInput=='scale'?'active':''}` }>
          <h4>Scale X</h4><input ref={scaleInputX => this.$scaleInputX = scaleInputX} type="text" value={Math.round(this.state.sxvalue*1000)/10} onChange={this.handleScaleXInput.bind(this)} onKeyUp={this.handleScaleKeyUp.bind(this)}/>
          <Slider
            className="sliderSX"
            defaultValue={this.state.sxvalue*100}
            value={this.state.sxvalue*100}
            trackStyle={{ backgroundColor: '#eeaa22', height: 20, position:'relative' }}
            handleStyle={{ display:'none' }}
            railStyle={{ backgroundColor: '#eeeeee', height: 20, width: '100%', position:'absolute'}}
            onChange={this.onSliderChangeSX}
          />
          <h4>Scale Y</h4><input ref={scaleInputY => this.$scaleInputY = scaleInputY} type="text" value={Math.round(this.state.syvalue*1000)/10} onChange={this.handleScaleYInput.bind(this)} onKeyUp={this.handleScaleKeyUp.bind(this)}/>
          <Slider
            className="sliderSY"
            defaultValue={this.state.syvalue*100}
            value={this.state.syvalue*100}
            trackStyle={{ backgroundColor: '#eeaa22', height: 20, position:'relative' }}
            handleStyle={{ display:'none' }}
            railStyle={{ backgroundColor: '#eeeeee', height: 20, width: '100%', position:'absolute'}}
            onChange={this.onSliderChangeSY}
          />
        </div>

        <div className={ `control-input move-control ${this.state.activeInput=='move'?'active':''}` }>
          <input ref={moveInputX => this.$moveInputX = moveInputX} type="text" value={Math.round((this.state[position].x/this.state.xymax)*1000)/10} onKeyUp={this.handleMoveXYKeyUp.bind(this)} onChange={this.handleMoveXYInput.bind(this)}/>
          <input ref={moveInputY => this.$moveInputY = moveInputY} type="text" value={Math.round((this.state[position].y/this.state.xymax)*1000)/10} onKeyUp={this.handleMoveXYKeyUp.bind(this)} onChange={this.handleMoveXYInput.bind(this)}/>
          <div className="moveBounds">
            <Draggable
              position={this.state[position]}
              onDrag={this.handleDragXY.bind(this)}
              bounds={{top: this.state.xymax * -1, left: this.state.xymax * -1, right: this.state.xymax, bottom: this.state.xymax}}
              >
              <div className="box" style={{ border:'none',backgroundColor: '#eeaa22'}}></div>
            </Draggable>
          </div>
        </div>

      </div>
    )
  }
}
