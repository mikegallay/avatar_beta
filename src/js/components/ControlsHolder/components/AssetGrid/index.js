import React, { Component } from 'react';
import { styles } from './styles.scss';


export default class AssetGrid extends Component {
  constructor(props){
    super(props)
    console.log('Asset Grid',props);
    this.state={
      id:props.id,
      activeAvatar:props.user.user.activeAvatar,
      activeArt:null,
      // assetId:props.id=='mouth'?'mouth':'eyes',
      assets:props.avatar.assets
    }
  }

  componentDidMount() {
    var that = this

    /*let assetId = this.state.assetId;
    if (assetId=='leftEye' || assetId=='rightEye') assetId = 'eyes';

    if (assetId != this.state.assetId){
      this.setState({assetId:assetId,assets:this.props.avatar.assets[assetId]});
    }*/

    console.log(this.state.id,this.state.assetId,this.state.assets);
    // console.log('AssetGrid for '+this.state.id+' contains '+this.state.assets.length+'assets.');

  }
  componentWillUpdate(){
    // console.log(this.props.data.id,'willupdate');
  }
  componentDidUpdate(props){
    // console.log(this.props.data.id, props);
  }

  render() {
    let assetId = this.state.id;
    if (assetId=='leftEye' || assetId=='rightEye') assetId = 'eyes';

    let assets = this.state.assets[assetId]?this.state.assets[assetId]:[];

    let mappedElements = assets.map(element =>
      <div className='grid-cell'>
        <svg
          key={element}
          viewBox='0 0 100 100'
          className='icon'
          ref={svg => this.$svg = svg}
        >
          <use xlinkHref={`${this.props.user.user.spriteSheet}#${element}`} />
        </svg>
      </div>
    )

    return (
      <div className={ `asset-grid ${this.state.id}` }>
          <div className='grid-row'>
            <div className='grid-cell'>NO ART</div>
            {mappedElements}
          </div>
      </div>
    )
  }
}
