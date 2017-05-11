import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('should have 1 nav tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('renders the title', () => {
    const wrapper = render(<Header title="LoopmanNews SourcesLogin" />);
    expect(wrapper.text()).to.contain('LoopmanNews SourcesLogin');
  });
});
