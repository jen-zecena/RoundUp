import React from "react";
import events from "../events";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link} from "react-router-dom";

const DisplayEventsPage = () => {
  return (<div>
    <h1 style={{textAlign:"center"}}>
      Events Page
    </h1>
      <dl className="dictionary">
      {events.map((event, index) => (
        <Card style = {{ width: '18rem'}} >
        <Card.Img variant = "top" src = "https://picsum.photos/200" / >
        < Card.Body >
          <Card.Title > {event.name} < /Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {event.date}{' '}{event.time}{' '}{event.location}
          </Card.Subtitle>
          <Card.Text >
            {event.description}
          </Card.Text>
          <Link to={`/event/${index + 1}`}>
            <Button variant="danger" > More Information < /Button>
          </Link>
        </Card.Body>
        </Card>
      ))}
      </dl>
    </div>
  );
};

export default DisplayEventsPage;
