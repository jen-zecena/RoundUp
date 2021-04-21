import React from "react";
import {Nav,NavDropdown,Navbar} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EventPage from "./EventPage";
import {LinkContainer} from 'react-router-bootstrap'
import Login from "./Login";

function HomePage() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>RoundUp</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/eventpage">
            <Nav.Link>Event Page</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   <EventPage />
   </div>
  );
}

export default HomePage;
