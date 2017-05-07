import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Login from '../../components/App';
import GoogleLogin from 'react-google-login';

describe('<Login />', () => {
  it('renders 1 <GoogleLogin /> component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find(GoogleLogin)).to.have.length(1);
  });

   it('has a p tag with text: Please login to continue', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('renders as a <div>', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.type()).to.eql('div');
  });

});