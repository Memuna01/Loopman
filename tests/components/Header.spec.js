import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import Header from '../../src/components/Header.jsx';

describe('Header Component', () => {
  it('should have 1 nav tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('should render the Links in the navigation bar', () => {
    const wrapper = render(<Header title="Loopman Login with Google+" />);
    expect(wrapper.text()).to.contain('Loopman Login with Google+');
  });
});
