import React from 'react';
import { shallow } from 'enzyme';
import IndexJs from 'components/testComponent/IndexJs.js';

describe('<IndexJs />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<IndexJs />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "indexjs-component"', function () {
      expect(component.hasClass('indexjs-component')).to.equal(true);
    });
  });
});
