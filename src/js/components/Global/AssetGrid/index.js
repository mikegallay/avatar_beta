import React, { Component } from 'react';
import { styles } from './styles.scss';


export default class AssetGrid extends Component {
  constructor(props){
    super(props)
    // console.log('Asset Grid',props);
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

    this.setActiveArt();
    /*this.$cell.addEventListener('click',function(e){
      // console.log('click',this.artId);
      that.props.action(that.state.id,'ID',this.id);
      // this.props.action(this.state.id,'ID',this.artId);
    })*/

  }
  setActiveArt(){
    if (this.state.id == 'face') return;
    let artAsset = 'elements';
    let artKey = 'artId';
    let artId = this.state.id == 'eyeFocus'?'leftEye':this.state.id;
    if (this.state.id == 'eyeFocus') artKey = 'eyeBallId';
    if (this.state.id == 'leftEye' || this.state.id == 'rightEye' || this.state.id == 'eyeFocus') artAsset = 'eyes';
    let activeAsset = this.props.user.avatars[this.props.user.user.activeAvatar][artAsset][artId];//.artId;
    // console.log(this.state.id);
    console.log('set active art',activeAsset[artKey]);
    this.setState({
      activeArt:activeAsset[artKey]
    })
    this.props.action(this.state.id,'ID',activeAsset[artKey]);

  }

  componentWillUpdate(){
    // console.log(this.props.data.id,'willupdate');
  }
  componentDidUpdate(props){
    // console.log('update props asset', props);
  }

  clickHandler(e) {
       // Getting an array of DOM elements
       // Then finding which element was clicked
      //  console.log('click',e.target);
       console.log('click',e.target.id);
      this.setState({
        activeArt:e.target.id
      })
      this.props.action(this.state.id,'ID',e.target.id);

   }

  render() {
    let assetId = this.state.id;
    if (assetId=='leftEye' || assetId=='rightEye') assetId = 'eyes';

    let assets = this.state.assets[assetId]?this.state.assets[assetId]:[];

    let mappedElements = assets.map(element =>
      <div
        key={element}
        ref={cell => this.$cell = cell}
        id={element}
        className={ `grid-cell ${this.state.activeArt==element?'active':''}` }
        onClick={ this.clickHandler.bind(this) }
      >
        <svg
          key={element}
          viewBox='0 0 100 100'
          className='icon'

        >
          <use xlinkHref={`${this.props.user.user.spriteSheet}#${element}`} />
        </svg>
      </div>
    )

    return (
      <div className={ `asset-grid ${this.state.id}` }>
          <div className='grid-row'>
            <div
              ref={cell => this.$cell = cell}
              id='none'
              className={ `grid-cell no-art ${this.state.activeArt=='none'?'active':''}` }
              onClick={ this.clickHandler.bind(this) }
            >NO ART</div>
            {mappedElements}
          </div>
      </div>
    )
  }
}
