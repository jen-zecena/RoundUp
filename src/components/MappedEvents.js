import React from "react";
//import Entry from "./Entry";
import EventCard from "./EventCard";
import events from "../events";


function MappedEvents(){

  return(<div>
    <h1>
      Events Page
    </h1>
    <dl className="dictionary">
    {events.map(event => (
      <EventCard
        key={event.id}
        date={event.date}
        name={event.name}
        location={event.location}
        description={event.description}
        time={event.time}
      />
    ))}
    </dl>
    </div>);
    }
      // {events.map(event => (
      //   <Entry
      //     key={event.id}
      //     date={event.date}
      //     name={event.name}
      //     location={event.location}
      //   />
      // ))}




export default MappedEvents;
