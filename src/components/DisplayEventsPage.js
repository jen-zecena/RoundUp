import React, { useState } from "react";
import events from "../events";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

console.log(events);
//
// function sortEventsByDate(prop){
//   return function(a, b) {
//         if (a[prop] > b[prop]) {
//             return 1;
//         } else if (a[prop] < b[prop]) {
//             return -1;
//         }
//         return 0;
//     }
// }
//
// const sortedEvents = array.sort(sortEventsByDate("date"));;


const DisplayEventsPage = () => {

  const [data, setData] = useState([]);

  const sortArray = type => {
      const types = {
        date: 'date',
      };
      const sortProperty = types[type];
      const sorted = events.sort((a, b) => b[sortProperty] - a[sortProperty]);
      console.log(sorted);
      setData(sorted);
    };

  const sortedEvents = sortArray('date');
  console.log(sortedEvents);



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
