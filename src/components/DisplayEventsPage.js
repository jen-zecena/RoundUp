import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

/**
This component displays event posters that match a user's search tags in chronological order
**/



const DisplayEventsPage = ({eventsList}) => {
  console.log("this is the eventsList Prop:");
  console.log(eventsList);


  /**
  @param eventsList: eventsList is a name for the events list object prop that will be passed into this function
  @return: and updated eventsList
  this function will use the filter function to remove any events that have already occured by
  checking to see if the date listed as one of the event's properties is greater than the current date
  if it is bigger the event will be kept, if not it will be removed
  **/

  function removePastEvents(events){
    var currentDate = new Date();
    var dateTime = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate() +
                   " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()

    console.log(dateTime);
    console.log(currentDate);
    console.log(currentDate.getFullYear());

    return events.filter(function(e){
      return e.eventTime > dateTime;
    });
  }



  /**
  @param updatedEventsList: updatedEventsList is a name for the props that will be passed into this function
  @return the final events list
  this function will use the date property of the events to sort events in the events list in chronological order.
  events that are happening soon will be first
  **/

  function sortEvents(updatedEventsList){
    console.log("original list of events:")
    console.log(updatedEventsList);

    return updatedEventsList.slice().sort((a,b) => (a.eventTime > b.eventTime) ? 1: -1);

  }



  var filteredEvents = removePastEvents(eventsList);

  console.log("filtered Events");
  console.log(filteredEvents);


  const sortedEvents = sortEvents(filteredEvents);
  console.log("sorted list of events");
  console.log(sortedEvents);

  //setEventsList([sortedEvents]);

  // function updateEventsList(newEventsList){
  //   this.props.handleEventsListChange(newEventsList);
  // }
  //
  // updateEventsList(sortedEvents);

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
        <Card.Title > {props.name} < /Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            {props.eventTime}{' '}{props.location}
        </Card.Subtitle>
        <Card.Text >
          {props.description}

        </Card.Text>
        <Link to={props.eventLink}>
          <Button variant="danger" > More Information < /Button>
        </Link>
      </Card.Body>
    </Card>
    );

  }

  return (<div>
    <div>
      <h3>{eventsList[0].name}</h3>
      <h3>{eventsList[1].name}</h3>
      <h3>{eventsList[2].name}</h3>
    </div>
    <h1 style={{textAlign:"center"}}>
      Events Page
    </h1>
      <dl className="dictionary">
      {sortedEvents.map((event, index) => (
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
