import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EventCard from './EventCard';
import RsvpForm from './RsvpForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EventPage(props) {

  const [event, setEvent] = useState({
    img: "",
    description: "",
    date: "",
    location: ""
  });

  return (
    <div>
    <Container>
      <Row>
        <Col> <EventCard/> </Col>
        <Col> <RsvpForm/>  </Col>
      </Row>
    </Container>


    </div>
  );

}

export default EventPage;
