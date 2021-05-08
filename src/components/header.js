import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import { logoutUserAction } from "../actions/authActions";
import { BrowserRouter as Router } from "react-router-dom";

/* This compoent displays the navigation Bar and links to other components*/

export class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>RoundUp</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/userSearch">
                <Nav.Link>Search</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/uploadEvent">
                <Nav.Link>Upload Event</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              {/* Checking Authentication */}
              {isAuthenticated ? (
                <LinkContainer to="/">
                  <Nav.Link onClick={this.props.logoutUserAction}>
                    Logout
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUserAction })(Header);
