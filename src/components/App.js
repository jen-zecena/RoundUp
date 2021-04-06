import React from "react";
import Entry from "./Entry";
import events from "../events";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {events.map(event => (
          <Entry
            key={event.id}
            date={event.date}
            name={event.name}
            location={event.location}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
