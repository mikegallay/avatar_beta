import React, { Component } from 'react';
import { styles } from './styles.scss';
import { connect } from "react-redux"
import { Link } from 'react-router';

export default class Welcome extends Component {
  constructor(props){
    super(props)
  }
  componentDidUpdate() {
    // console.log('Layout update',this.props);
  }
  componentDidMount(){
    // console.log('Layout',this.props);
  }

  render() {

    return (
      <div className={ `${styles}` }>
        <div className='welcome-holder'>
          <h1>Welcome</h1>
          <Link to={ `/build/mouth` } >
    				Start Building
    			</Link>
        </div>
      </div>
    )
  }
}
