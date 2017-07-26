import React, { Component } from 'react';
import { styles } from './styles.scss';


export default class AssetGrid extends Component {
  constructor(props){
    super(props)
    // console.log('ElementControls',props);
    this.state={
      id:props.id,
      activeAvatar:props.user.user.activeAvatar,
      activeArt:null,
      artPrefix:props.id=='mouth'?'mouth':'eye',
    }
  }

  componentDidMount() {
    var that = this

  }
  componentWillUpdate(){
    // console.log(this.props.data.id,'willupdate');
  }
  componentDidUpdate(props){
    // console.log(this.props.data.id, props);
  }

  render() {

    return (
      <div className={ `asset-grid ${this.state.id}` }>
          <div className='grid-row'>
            <div className='grid-cell'>{this.state.id}</div>
            <div className='grid-cell'>{this.state.id}</div>
            <div className='grid-cell'>{this.state.id}</div>
            <div className='grid-cell'>{this.state.id}</div>
          </div>
      </div>
    )
  }
}
