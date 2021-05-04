import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import DisplayEventsPage from './DisplayEventsPage';


const Parent = () => {
  const [eventsList, setEventList] = useState([{
    id: 1,
    ownerID: "id",
    name: "Event 1",
    date: "1/5/21",
    time: "10:25am",
    location: "CMC",
    description: "event 1 description is going to go here.",
    tags: ["CMC", "EconDepartment"]
  }]);

  function handleEventsListChange(eventsL){
    setEventList(eventsL);
  }

  return(
      <div>
        < DisplayEventsPage
            handleEventsListChange = {handleEventsListChange}
            eventsList = {eventsList}
        />
      </div>


    );

};

export default Parent;