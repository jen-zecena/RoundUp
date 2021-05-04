import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

/**
This component displays event posters that match a user's search tags in chronological order
**/


const DisplayEventsPage = ({eventsList, onChange}) => {

  /**
  @param props: the props object will contain the name, eventTime, location, posterUrl,
  description, and eventLink that will be used to generate an Event Card with the
  correct event information
  @return: html code with embeded javascript that references properties in the prop passed into this function
  It will include the structure and content of a Event Poster Card

  The react component that this function returns will be populated with different data depending on the props
  passed into it. This component is very modular and we will display many of them in our  displayEventsPage

  **/

  function EventPosterCard(props){

    return (
      <Card style = {{ width: '18rem'}} >
      <Card.Img variant = "top" src = "https://picsum.photos/200" / >
      < Card.Body >
        <Card.Title > {props.name} </ Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            {props.eventTime}{' '}{props.location}
        </Card.Subtitle>
        <Card.Text >
          {props.description}

        </Card.Text>
        <Link to={props.eventLink}>
          <Button variant="danger" > More Information </ Button>
        </ Link>
      </ Card.Body>
    </ Card>
    );

  }

  return (<div>
    <h1 style={{textAlign:"center"}}>
      Events Page
    </h1>
      <dl className="dictionary">
      {eventsList.map((event, index) => (
        <EventPosterCard
          key={index}
          eventTime={event.eventTime}
          name={event.name}
          location={event.location}
          description={event.description}
          eventLink={`/event/${index + 1}`}
        />
      ))}
      </dl>
    </div>
  );
};

export default DisplayEventsPage;
