import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { Header } from '../../components/header';
import { Link } from 'react-router';
import { shallow, configure, to } from 'enzyme';
import { connect } from 'react-redux';
import { logoutUserAction } from '../../actions/authActions';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

it('should exists', function () {
  assert.isDefined(Header)
})
describe('header', () => {
  
    it('Should render all necessary links', () => {
      const wrapper = mount(<Header/>);
      expect(wrapper.exists('.some-class')).to.equal(true);
      expect(wrapper.containsMatchingElement(<LinkContainer to="/userSearch">
      <Nav.Link>Search</Nav.Link>
    </LinkContainer>)).toBe(true);

    });
});