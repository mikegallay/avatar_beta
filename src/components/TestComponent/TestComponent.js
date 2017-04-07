import React from 'react';
import './testcomponent.scss';

class TestComponent extends React.Component {

  render() {
    return (
      <div className="testcomponent-component">
        This is test Component copy.
      </div>
    );
  }
}

TestComponent.displayName = 'TestComponent';
TestComponent.propTypes = {};
TestComponent.defaultProps = {};

export default TestComponent;
