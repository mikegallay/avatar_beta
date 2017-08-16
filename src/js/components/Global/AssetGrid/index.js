import React, { Component } from 'react';
import { styles } from './styles.scss';


export default class AssetGrid extends Component {
  constructor(props){
    super(props)
    // console.log('Asset Grid',props);
    this.state={
      id:props.id,
      activeAvatar:props.user.user.activeAvatar,
      spriteSheet:props.user.avatars[props.user.user.activeAvatar].spriteSheet,
      activeArt:props.id+'0',
      initArt:'',
      // assetId:props.id=='mouth'?'mouth':'eyes',
      assets:props.avatarBuilt?props.avatar.assetVars:props.avatar.assetStyles,

    }
  }

  componentDidMount() {
    var that = this

    this.setActiveArt();

  }
  setActiveArt(){
    if (this.state.id == 'face' || this.state.id == 'leftEyeLid' || this.state.id == 'rightEyeLid') return;
    let artAsset = 'elements';
    let artKey = this.props.avatarBuilt?'artId':'';
    let artId = this.state.id == 'eyeFocus'?'leftEye':this.state.id;
    if (this.state.id == 'eyeFocus') artKey = 'eyeBallId';
    if (this.state.id == 'leftEye' || this.state.id == 'rightEye' || this.state.id == 'eyeFocus') artAsset = 'eyes';
    let activeAsset = this.props.user.avatars[this.props.user.user.activeAvatar][artAsset][artId];//.artId;

    this.setState({
      activeArt:activeAsset[artKey],
      initArt:this.props.avatarBuilt?activeAsset[artKey]:''
    })
    this.props.actions.adjustKeyableValue(this.state.id,'ID',activeAsset[artKey]);

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
      //  console.log('click',e.target.id);
      this.setState({
        activeArt:e.target.id
      })

      //'ID' is only used once the original avatar is build-next
      console.log('avatar build',this.props.avatarBuilt);
      let property = 'mainElement';
      this.props.actions.adjustKeyableValue(this.state.id,'ID',e.target.id);
      if(this.props.avatarBuilt){
        this.props.actions.setBuildItemStyle(this.state.id,'ID',e.target.id);
      }


   }

  render() {
    let assetId = this.state.id;
    if (assetId=='leftEye' || assetId=='rightEye') assetId = 'eyes';

    let assets = this.state.assets[assetId]?this.state.assets[assetId]:[];
    let totalAssets = assets;

    if (!isNaN(assets)) {
      assets=[];
      for (var i=0;i<totalAssets;i++){
        assets.push(this.state.id+i);
      }
    }

    let mappedElements = assets.map(element =>
      <div
        key={`${this.state.initArt}${element}`}
        ref={cell => this.$cell = cell}
        id={`${this.state.initArt}${element}`}
        className={ `grid-cell ${this.state.activeArt==(this.state.initArt+element)?'active':''}` }
        onClick={ this.clickHandler.bind(this) }
      >
        <svg
          key={element}
          viewBox='0 0 100 100'
          className='icon'
        >
          <use xlinkHref={`${this.state.spriteSheet}#${this.state.initArt}${element}`} />
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
