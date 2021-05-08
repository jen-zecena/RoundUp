import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link} from "react-router-dom";

function EventCard(props){

  return (
    <Card style = {{ width: '18rem'}} class="card" >
    <Card.Img variant = "top" src = {props.posterUrl} />
    <Card.Body >
      <Card.Title class="tile"> {props.name} </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {props.date}{' '}{props.time}{' '}{props.location}
      </Card.Subtitle>
      <Card.Text class="text">
        {props.description}
      </Card.Text>
      <Link to={props.eventLink}>
        <Button variant="danger" class="button"> More Information </Button>
      </Link>
    </Card.Body>
  </Card>
  );

}

export default EventCard;
