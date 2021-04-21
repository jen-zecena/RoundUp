import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const header = () => {
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
      <LinkContainer to="/events">
      <Nav.Link>Events</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default header
