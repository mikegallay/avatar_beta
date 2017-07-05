import React, { Component } from 'react';
import { styles } from './styles.scss';

// import { connect } from "react-redux"
import ControlsInput from '../ControlsInput'
//import { bindActionCreators } from 'redux'

export default class ElementControls extends Component {
  constructor(props){
    super(props)
    // console.log('ElementControls',props);
    this.state={
      isActive : this.props.data.id == this.props.data.activeControl,
    }
  }

  componentDidMount() {
    var that = this

    var id = this.props.data.id;
    var subtl = this.props.timeline.subTimelines[id];
    var bref = this[id + 'Input'];
    var count = 0;
    const d = .25;

    // console.log('test',id,this.props);
    this[id + 'Button'].addEventListener('click',function(){

      var rand = Math.random()*1;
      //testing added animated kf to sub timeline
      let subTL;

      //eyes have to be treated a little differently
      if (id=='leftEye' || id=='rightEye'){
        subTL = subtl.to('.'+id+'.element-scale',d,{scaleX:rand,scaleY:rand,
          onUpdateParams:["{self}"],
          onUpdate: (tween) => {
            const transform = tween.target[0]._gsTransform;
            let sx = transform.scaleX;
            let sy = transform.scaleY;
            let ow = .2;
            var s = (sx < sy) ? sx : sy;
            if (s < .5) ow = 1.2 + (10 * (1 - s));
            ow = ow + "em";
            TweenMax.set('.'+id+'.element-scale',{outlineWidth:ow})
          },
          ease:Linear.easeNone},count)
          .to('.'+id+'.element-rotateX',.25,{rotationX:(Math.random()*100 - 50),ease:Linear.easeNone},count)
          .to('.'+id+'.element-rotateY',d,{rotationY:(Math.random()*100 - 50),ease:Linear.easeNone},count)
          .to('.'+id+'.element-rotateZ',d,{rotationZ:(Math.random()*100 - 50),ease:Linear.easeNone},count)
      }else{
        subTL = subtl.to('.'+id+'.element-scale',d,{scaleX:rand,scaleY:rand, ease:Linear.easeNone},count)
                      // .to('.'+id+'.element-wrapper',d,{left:(rand * 50)+'%',ease:Linear.easeNone},count)
                     .to('.'+id+'.element-rotateX',d,{rotationX:(Math.random()*100 - 50),ease:Linear.easeNone},count)
                     .to('.'+id+'.element-rotateY',d,{rotationY:(Math.random()*100 - 50),ease:Linear.easeNone},count)
                     .to('.'+id+'.element-rotateZ',d,{rotationZ:(Math.random()*100 - 50),ease:Linear.easeNone},count)
      }

      //pass the edited subtimeline to the action.
      that.props.actions.addKeyFrame(id,subTL);

      count += d;
    })
  }
  componentWillUpdate(){
    // console.log(this.props.data.id,'willupdate');
  }
  componentDidUpdate(props){
    // console.log(this.props.data.id, props);
  }

  renderKeyableElementControls(){
    const allElements = [{id:'all'},{id:'scale'},{id:'rotate'},{id:'move'}];

    const mappedElements = allElements.map((element,index) =>
      <div
        key={element.id}
        ref = {keyableElement => element.id = keyableElement}
        data={{
          'index' : index,
          'id'    : element.id,
        }}>
        {element.id}&nbsp;|&nbsp;
        </div>
      )

    return mappedElements;
  }

  render() {
    return (
        <div className={ `element-controls ${this.props.data.id} test-${this.props.activeControl} ${this.props.activeControl == this.props.data.id ? 'active' : ''}` }>
          <div className='element-panel'>

            <div className='element-elements'>
              <div><span className='panel-title'>{this.props.data.id}&nbsp;-&nbsp;</span></div>
              {this.renderKeyableElementControls()}
            </div>
            <div className='element-buttons'>


              <input ref={kfInput => this[this.props.data.id + 'Input'] = kfInput } id={`${this.props.data.id}Input`} name={`${this.props.data.id}Input`}/>
              <button ref={kf => this[this.props.data.id + 'Button'] = kf }>ADD KEYFRAME</button>
              <ControlsInput id={this.props.data.id} action={this.props.actions.adjustKeyableValue}/>
            </div>
          </div>
      </div>
    )
  }
}
