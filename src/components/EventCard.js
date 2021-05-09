import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


/**
  @param pops: the properties of the event that the EventCard will render
  @return: html code with embeded javascript that references properties in the prop passed into this function
  It will include the structure and content of a Event Poster Card

  The react component that this function returns will be populated with different data depending on the props
  passed into it. This component is very modular and we will display many of them in our final events display page

**/

function EventCard(props) {
  return (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Img variant="top" src={props.posterUrl} />
      <Card.Body>
        <Card.Title className="tile"> {props.name} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.date} {props.time} {props.location}
        </Card.Subtitle>
        <Card.Text className="text">{props.description}</Card.Text>
        <Link to={props.eventLink}>
          <Button variant="danger" className="button">
            {" "} More Information {" "}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
