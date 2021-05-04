import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link} from "react-router-dom";

function EventCard(props){

  return (
    <Card style = {{ width: '18rem'}} >
    <Card.Img variant = "top" src = "https://picsum.photos/200" / >
    < Card.Body >
      <Card.Title > {props.name} </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {props.date}{' '}{props.time}{' '}{props.location}
      </Card.Subtitle>
      <Card.Text >
        {props.description}

      </Card.Text>
      <Link to={props.eventLink}>
        <Button variant="danger" > More Information </Button>
      </Link>
    </Card.Body>
  </Card>
  );

}

export default EventCard;