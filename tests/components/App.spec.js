import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../src/components/App.jsx';
import Header from '../../src/components/Header.jsx';

describe('App Component', () => {
  it('should render 1 Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <App>
        <div className="main-container" />
      </App>,
    );
    expect(wrapper.contains(<div className="main-container" />)).to.equal(true);
  });

  it('should render a html container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.type()).to.eql('div');
  });
});
