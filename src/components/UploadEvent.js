import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UploadEvent(){
    return (
      <div className="container ">
        <Container >

        <Jumbotron>
        <div>
        <h1 style={{textAlign:"center"}}>
          Event Upload Form
        </h1>
        </div>
        <br/>
        <br/>
          <Container class ="justify-content-center">
          <Row>
          <Col>
          <Form>
          <Form.Group controlId="eventName">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              name="eventName"
              type="fname"
              placeholder="First Name" />
          </Form.Group>

          <Form.Group controlId="eventDate">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              name="eventDate"
              type="date"
              placeholder="Choose Event Date" />
          </Form.Group>

          <Form.Group controlId="eventTime">
            <Form.Label>Event Time</Form.Label>
            <Form.Control
              name="eventtime"
              type="time"
              placeholder="Choose Event Date" />
          </Form.Group>

          <Form.Group controlId="eventDescription">
            <Form.Label>Event Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write Event Description Here" />
          </Form.Group>

          <Form.Group controlId="firstName">
            <Form.File
              id="custom-file"
              label="Upload Poster Image"
              custom/>
          </Form.Group>

          </Form>
          </Col>
          <Col>
          <Form>

          <Form.Group controlId="eventTags">
            <Form.Label>Choose Event Tags</Form.Label>
            <Form.Control as="select" multiple htmlSize={5} custom>
              <option>Tag 1</option>
              <option>Tag 2</option>
              <option>Tag 3</option>
              <option>Tag 4</option>
              <option>Tag 5</option>
              <option>Tag 6</option>
              <option>Tag 7</option>
              <option>Tag 8</option>
              <option>Tag 9</option>
              <option>Tag 10</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="firstName">
            <Form.Label>Event Host First Name</Form.Label>
            <Form.Control
              name="fName"
              type="fname"
              placeholder="First Name" />
          </Form.Group>

          <Form.Group controlId="lastName">
            <Form.Label>Event Host Last Name</Form.Label>
            <Form.Control
              name="lName"
              type="lname"
              placeholder="Last Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email" />
          </Form.Group>
          </Form>

          <Button variant="danger" type="submit" >
            Submit
          </Button>
          </Col>

</Row>

</Container>
</Jumbotron>
        </Container>


      </div>
    )
}

export default UploadEvent;
