import React from "react";
import events from "../events";
import EventCard from "./EventCard";

const EventsPage = () => {
  return (<div>
    <h1 style={{textAlign:"center"}}>
      Events Page
    </h1>
      <dl className="dictionary">
      {events.map((event, index) => (
        <EventCard
          key={index}
          date={event.date}
          name={event.name}
          location={event.location}
          description={event.description}
          time={event.time}
          eventLink={`/event/${index + 1}`}
        />
      ))}
      </dl>
    </div>
  );
};

export default EventsPage;
