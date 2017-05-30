import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchLoopman from '../../src/components/SearchLoopman.jsx';

describe('SearchLoopman Component', () => {
  let wrapper;
  const initialState = {
    sources: [],
    searchValue: '',
    loading: true,
  };

  beforeEach(() => {
    wrapper = shallow(<SearchLoopman />);
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
  it('should render with a class \'container-fluid\'', () => {
    expect(wrapper.prop('className')).to.eql('container-fluid');
  });
});
