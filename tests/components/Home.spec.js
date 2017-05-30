import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../../src/components/Home.jsx';

describe('Home Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render a html container', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('should have 1 h2 tag', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });

  it('should have 2 p tags', () => {
    expect(wrapper.find('p')).to.have.length(2);
  });

  it('should have a render function', () => {
    expect(wrapper.render).to.be.a('function');
  });
});
