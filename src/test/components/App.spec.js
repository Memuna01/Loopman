import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import App from '../../components/App';
import Header from '../../components/Header';

describe('<App />', () => {
  it('renders 1 <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <App>
        <div className="main-container" />
      </App>,
    );
    expect(wrapper.contains(<div className="main-container" />)).to.equal(true);
  });

  it('renders as a <div>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.type()).to.eql('div');
  });
});
