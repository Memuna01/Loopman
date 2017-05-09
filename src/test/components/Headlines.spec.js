import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Headlines from '../../components/Headlines';

describe('<Headlines />', () => {
  let wrapper;
  const initialState = {
    articles: [],
  };

  beforeEach(() => {
    wrapper = shallow(<Headlines />);
  });

  it('should have 1 h2 tag', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have state in props', () => {
    expect(wrapper.state())
      .to
      .deep
      .equal(initialState);
  });

});
