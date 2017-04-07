import React from 'react';
import './app.css';

import TestComponent from './TestComponent/TestComponent.js';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <p>Lets get this party started!</p>
        <TestComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
