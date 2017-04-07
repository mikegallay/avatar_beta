import React from 'react';
import { shallow } from 'enzyme';
import TestComponent from 'components/src/components/TestComponent.js';

describe('<TestComponent />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<TestComponent />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "testcomponent-component"', function () {
      expect(component.hasClass('testcomponent-component')).to.equal(true);
    });
  });
});
