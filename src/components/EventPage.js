import React from "react";
import RsvpForm from './RsvpForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';


const EventPage = ({ match, location, eventsList }) => {
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
              <Card.Title > {eventsList[eventId - 1].name} </ Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
              {eventsList[eventId - 1].eventTime}{' '}{eventsList[eventId - 1].location}
              </Card.Subtitle>
              <Card.Text >{eventsList[eventId - 1].description}</Card.Text>
            </ Card.Body>
            </ Card>
          </ Col>
          <Col> <RsvpForm/>  </Col>
        </ Row>
      </ Jumbotron>
      </ Container>
    </ div>
  );
};

export default EventPage;
