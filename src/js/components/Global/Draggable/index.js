import React, { Component } from 'react';
import { styles } from './styles.scss';


export default class Draggable extends Component {
  constructor(props){
    super(props)
    // console.log('Asset Grid',props);
    this.state={

    }
  }

  componentDidMount() {


  }

  componentWillUpdate(){
    // console.log(this.props.data.id,'willupdate');
  }
  componentDidUpdate(props){
    // console.log('update props asset', props);
  }

  render() {

    return (
      <div className="draggableKnob">
      </div>
    )
  }
}
