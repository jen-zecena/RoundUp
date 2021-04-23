import React from 'react';
import Container from  "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
      <div>
        <Container>
          <Col class="col-sm-6 mx-auto">
            <Jumbotron>
              <h1 style={{textAlign:"center"}}> About Page </h1>
              <br/>
              <div>
                <p style={{textAlign:"center"}}> This can be a page where we describe what this website does. We could also provide a brief set of instructions for users/ Prof. Kampe  </p>
              </div>
            </Jumbotron>
          </Col>
        </Container>
        </div>
    )
}

export default AboutPage;
