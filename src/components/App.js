import React from 'react';
import './app.css';

import TestComponent from './TestComponent/TestComponent.js';

class AppComponent extends React.Component {
  constructor(props) {
		super(props);
    console.log('apps',props);
  }

  render() {

    return (
      <div className="index">
        <p>Lets gets this party started!</p>
        <TestComponent data={this.props}/>
        <p>gargag</p>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
