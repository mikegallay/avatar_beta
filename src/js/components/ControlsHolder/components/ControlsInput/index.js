import React, { Component } from 'react';
import Knob from 'react-canvas-knob';
import Draggable from 'react-draggable';
import { styles } from './styles.scss';
import Slider from 'rc-slider';
// import { connect } from "react-redux"

//import { bindActionCreators } from 'redux'

export default class ControlsInput extends Component {
  constructor(props){
    super(props)
    console.log('ControlsInput',props);
    this.state = {activeInput:'rotate',rzvalue: 0, rmin:0, rmax:360, xymax:60,
      deltaPosition: {
        x: 0, y: 0
      }
    };
  }
  componentWillMount() {

  }
  componentDidUpdate(){
    /*var bref = this[this.props.id + 'Input'];
    var id = this.props.id;
    var that = this;*/
    if (this.props.id == this.props.controls.activeControl && this.props.controls.activeInput != this.state.activeInput){
      console.log('inputtt',this.props.controls.activeInput,this.state.activeInput);
      this.setState({activeInput: this.props.controls.activeInput});
    }

  }
  knobChangeRZ = (newValue) => {
    // var id = this.props.id;
    this.props.action(this.props.id,'RZ',Number(newValue));
    this.setState({rzvalue: newValue});
  }
  knobChangeRZEnd = (newValue) => {
  }

  onSliderChangeSX = (value) => {
    console.log('sx',value/100);
    // var id = this.props.id;
    this.props.action(this.props.id,'SX',Number(value/100));
  }
  onSliderChangeSY = (value) => {
    // var id = this.props.id;
    this.props.action(this.props.id,'SY',Number(value/100));
    //console.log('sy',value/100); //eslint-disable-line
  }
  handleDragXY(e, ui) {
   const {x, y} = this.state.deltaPosition;

   this.setState({
     deltaPosition: {
       x: x + ui.deltaX,
       y: y + ui.deltaY,
     }
   });


   let xchange = ((this.state.deltaPosition.x)/this.state.xymax)*25;
   let ychange = ((this.state.deltaPosition.y)/this.state.xymax)*25;
   console.log(xchange,ychange);
   this.props.action(this.props.id,'DX',xchange);
   this.props.action(this.props.id,'DY',ychange);
 }

  render() {
    return (
      <div className={ `${styles}` }>
        {/*<div>ControlsInput</div>*/}

        {/*<input ref={kfInput => this[this.props.id + 'Input'] = kfInput } id={`${this.props.id}Input`} name={`${this.props.id}Input`}/>
        <button ref={kf => this[this.props.id + 'Button'] = kf }>adjust</button>*/}

        <div className={ `control-input rotate-control ${this.state.activeInput=='rotate'?'active':''}` }>
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

        <div className={ `control-input scale-control ${this.state.activeInput=='scale'?'active':''}` }>
          <h4>Scale X</h4>
          <Slider
            className="sliderSX"
            defaultValue={50}
            trackStyle={{ backgroundColor: '#eeaa22', height: 20, position:'relative' }}
            handleStyle={{ display:'none' }}
            railStyle={{ backgroundColor: '#eeeeee', height: 20, width: '100%', position:'absolute'}}
            onChange={this.onSliderChangeSX}
          />
          <h4>Scale Y</h4>
          <Slider
            className="sliderSY"
            defaultValue={50}
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
