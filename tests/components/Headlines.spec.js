import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Headlines from '../../src/components/Headlines.jsx';

describe('Headlines Component', () => {
  let wrapper;
  const initialState = {
    headlines: [],
    loading: false,
    sourceName: '',
  };
  beforeEach(() => {
    wrapper = shallow(<Headlines />);
  });
  it('should have 1 h3 tag', () => {
    expect(wrapper.find('h3')).to.have.length(1);
  });

  it('should render a html container', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have state in props', () => {
    expect(wrapper.state())
      .to
      .deep
      .equal(initialState);
  });

  it('should have a render method', () => {
    expect(wrapper.render).to.exist;
  });
});
