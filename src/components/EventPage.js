import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EventInfo from './EventInfo';
import RsvpForm from './RsvpForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

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
    <Jumbotron>

        <Row>
          <Col> <EventInfo/> </Col>
          <Col> <RsvpForm/>  </Col>
        </Row>

    </Jumbotron>
    </Container>
    </div>
  );

}

export default EventPage;
