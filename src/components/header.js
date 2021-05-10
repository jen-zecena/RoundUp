import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import { connect } from 'react-redux';
import { logoutUserAction } from '../actions/authActions';

class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>RoundUp</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
      <LinkContainer to="/uploadEvent">
        <Nav.Link>Upload Event</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/about">
        <Nav.Link>About</Nav.Link>
      </LinkContainer>

      {
        isAuthenticated
        ?

        <LinkContainer to="/">
          <Nav.Link onClick={this.props.logoutUserAction}>Logout</Nav.Link>
        </LinkContainer>

        :

        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
      }
      <LinkContainer to="/userSearch">
        <Nav.Link>Search</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutUserAction }
)(Header);
