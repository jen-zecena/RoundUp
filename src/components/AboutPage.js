import React from 'react';
import Container from  "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * This React functional component creates renders an about page
 * that contains information about the web app.
**/
function AboutPage() {
    return (
      <div>
        <Container>
          <Col className="col-sm-6 mx-auto">
            <Jumbotron>
              <h1 style={{textAlign:"center"}}> About Page </h1>
              <br/>
              <div>
                <p style={{textAlign:"center"}}> Welcome to RoundUp! Users of this website can browse events happening at the 5C's, can search for events using tags, can upload events to our site, and can RSVP for upcoming events! </p>
              </div>
            </Jumbotron>
          </Col>
        </Container>
        </div>
    )
}

export default AboutPage;
