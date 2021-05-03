import React from "react";
import RsvpForm from './RsvpForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';




const sortedEvents = [
    {
      userId: 3,
      eventTime: "2022-05-15 14:55:10.888",
      posterUrl: "",
      name: "Event 3",
      description: "event 3 description is going to go here.",
      location: "CMC",
      tags: ["CMC", "EconDepartment"]
    }];

const EventPage = ({ match, location }) => {
  const {
    params: { eventId }
  } = match;

  return (
    <div>
      <Container>
      <Jumbotron>
        <Row>
          <Col>
            <Card style = {{ width: '18 rem'}} >
            <Card.Img variant = "top" src = "https://picsum.photos/200" / >
            < Card.Body >
              <Card.Title > {sortedEvents[eventId - 1].name} < /Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
              {sortedEvents[eventId - 1].eventTime}{' '}{sortedEvents[eventId - 1].location}
              </Card.Subtitle>
              <Card.Text >{sortedEvents[eventId - 1].description}</Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col> <RsvpForm/>  </Col>
        </Row>
      </Jumbotron>
      </Container>
    </div>
  );
};

export default EventPage;
