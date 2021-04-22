import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function EventInfo(props){

  return (
    <Card style = {{ width: '18 rem'}} >
    <Card.Img variant = "top" src = "https://picsum.photos/200" / >
    < Card.Body >
      <Card.Title > First Club Meeting < /Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        9/20/21 6:00pm CMC Cube
      </Card.Subtitle>
      <Card.Text >
        Come to the first club event of the semester! Rest of description goes here

      </Card.Text>
    </Card.Body>
  </Card>
  );

}


export default EventInfo;
