import React, { Component } from 'react';
import Knob from 'react-canvas-knob';
import Draggable from 'react-draggable';
import { styles } from './styles.scss';
import Slider from 'rc-slider';

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
      fxvalue:props.id=='rightEye' || props.id=='rightBrow' ? -1 : 1,
      rmin:0,
      rmax:360,
      xymax:60,
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

  flipChange = (cb) => {
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
  }
  handleScaleXInput(e) {
    const val = e.target.value/100;
    // this.$sxSlider.value = e.target.value;
    if (val != this.state.sxvalue){
      this.setState({sxvalue: val});
      this.props.action(this.props.id,'SX',val);
    }
  }
  handleScaleYInput(e) {
    const val = e.target.value/100;
    // this.$sySlider.value = e.target.value;
    if (val != this.state.syvalue){
      this.setState({syvalue: val});
      this.props.action(this.props.id,'SY',val);
    }
  }

  handleDragXY(e, ui) {
    // console.log(this.props.id);
    let moveMax = 25;
    let position = 'deltaPosition';

   if (this.props.id=="eyeFocus"){
    //  moveMax = 20;
     position = 'eyePosition';
   }

   const {x, y} = this.state[position];

   this.setState({
     [position]: {
       x: x + ui.deltaX,
       y: y + ui.deltaY,
     }
   });

   let xchange = ((this.state[position].x)/this.state.xymax)*moveMax;
   let ychange = ((this.state[position].y)/this.state.xymax)*moveMax;

   if (this.props.id=="eyeFocus"){
     this.props.action('leftEyeBall','DX',xchange);
     this.props.action('leftEyeBall','DY',ychange);
     this.props.action('rightEyeBall','DX',-xchange);
     this.props.action('rightEyeBall','DY',ychange);
    //  console.log(xchange,ychange);
   }else{
     this.props.action(this.props.id,'DX',xchange);
     this.props.action(this.props.id,'DY',ychange);
   }

 }

  render() {
    return (
      <div className={ `${styles}` }>
        {/*<div>ControlsInput</div>*/}

        {/*<input ref={kfInput => this[this.props.id + 'Input'] = kfInput } id={`${this.props.id}Input`} name={`${this.props.id}Input`}/>
        <button ref={kf => this[this.props.id + 'Button'] = kf }>adjust</button>*/}

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
            ref={fxflip => this.$fxflip = fxflip}
            id="checkBox-flip"
            type="checkbox"
            onClick={this.flipChange}/>
          <label for="checkBox-flip">Flip x-axis?</label>
        </div>

        <div className={ `control-input scale-control ${this.state.activeInput=='scale'?'active':''}` }>
          <h4>Scale X</h4><input type="text" value={Math.round(this.state.sxvalue*100)} onChange={this.handleScaleXInput.bind(this)} />
          <Slider
          ref={sxSlider => this.$sxSlider = sxSlider}
            className="sliderSX"
            defaultValue={this.state.sxvalue*100}
            value={this.state.sxvalue*100}
            trackStyle={{ backgroundColor: '#eeaa22', height: 20, position:'relative' }}
            handleStyle={{ display:'none' }}
            railStyle={{ backgroundColor: '#eeeeee', height: 20, width: '100%', position:'absolute'}}
            onChange={this.onSliderChangeSX}
          />
          <h4>Scale Y</h4><input type="text" value={Math.round(this.state.syvalue*100)} onChange={this.handleScaleYInput.bind(this)} />
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
          <div className="moveBounds">
            <Draggable
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
