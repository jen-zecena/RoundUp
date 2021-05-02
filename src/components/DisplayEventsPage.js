import React from "react";
import events from "../events";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function sortEvents(eventsObj){
  console.log("original list of events:")
  console.log(eventsObj);

  return eventsObj.slice().sort((a,b) => (a.eventTime > b.eventTime) ? 1: -1);

}

var sortedEvents = sortEvents(events);
console.log("sorted list of events");
console.log(sortedEvents);

function filterEvents(eventsObj){
  var currentDate = new Date();
  var dateTime = currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate() +
                 " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()

  console.log(dateTime);
  console.log(currentDate);
  console.log(currentDate.getFullYear());


  return sortedEvents.filter(function(e){
    return e.eventTime > dateTime;
  });
}



var filteredEvents = filterEvents(sortedEvents);

console.log("filtered Events");
console.log(filteredEvents);



const DisplayEventsPage = () => {


  return (<div>
    <h1 style={{textAlign:"center"}}>
      Events Page
    </h1>
      <dl className="dictionary">
      {filteredEvents.map((event, index) => (
        <Card style = {{ width: '18rem'}} key ={index} >
        <Card.Img variant = "top" src = "https://picsum.photos/200" / >
        < Card.Body >
          <Card.Title > {event.name} < /Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {event.eventTime}{' '}{event.location}
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
