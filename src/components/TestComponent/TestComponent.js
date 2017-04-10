import React from 'react';
import './testcomponent.scss';

class TestComponent extends React.Component {
  constructor(props) {
		super(props);
    console.log('testcomponent',props);
  }
  componentWillMount(){
    this.props.data.actions.changeItem('Bill');
    console.log('HERE',this.props);
  }

  render() {
    return (
      <div className="testcomponent-component">
        This is {this.props.data.addItem.user.name}’s house!
      </div>
    );
  }
}

TestComponent.displayName = 'TestComponent';
TestComponent.propTypes = {};
TestComponent.defaultProps = {};

export default TestComponent;
