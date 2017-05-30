import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PageNotFound from '../../src/components/PageNotFound.jsx';

describe('PageNotFound Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PageNotFound />);
  });

  it('should render a html container', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have 1 h3 tag', () => {
    expect(wrapper.find('h3')).to.have.length(1);
  });

  it('should have a render function', () => {
    expect(wrapper.render).to.be.a('function');
  });
});
