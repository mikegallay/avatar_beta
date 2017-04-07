import React from 'react';
import { shallow } from 'enzyme';
import Index from 'components/testComponent/Index.js';

describe('<Index />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Index />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "index-component"', function () {
      expect(component.hasClass('index-component')).to.equal(true);
    });
  });
});
