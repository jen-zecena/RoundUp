import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import UploadEvent from './components/UploadEvent';
import AboutPage from './components/AboutPage';
import Login from './components/Login';
import Register from './components/Register';
import EventPage from './components/EventPage';
import DisplayEventsPage from './components/DisplayEventsPage';
import UserSearch from './components/UserSearch';
import Parent from './components/Parent';

function App() {

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
    const sortedEvents =  updatedEventsList.slice().sort((a,b) => (a.eventTime > b.eventTime) ? 1: -1);
    return sortedEvents;
  }

  const events =
    [
        {
        userId: 10,
        eventTime: "2021-07-04 14:55:10.888",
        posterUrl: "",
        name: "Event 9",
        description: "event 9 description is going to go here.",
        location: "CMC",
        tags: ["CMC", "EconDepartment"]
      },
      {
        userId: 9,
        eventTime: "2025-04-04 14:55:10.888",
        posterUrl: "",
        name: "Event 10",
        description: "event 10 description is going to go here.",
        location: "CMC",
        tags: ["CMC", "EconDepartment"]
      },
      {
        userId: 11,
        eventTime: "2024-04-04 14:55:10.888",
        posterUrl: "",
        name: "Event 11",
        description: "event 10 description is going to go here.",
        location: "CMC",
        tags: ["CMC", "EconDepartment"]
      }
    ];


  var filteredEvents = removePastEvents(events);
  const finalEventsList = sortEvents(filteredEvents);


  const [eventsList, setEventsList] = useState(finalEventsList);

  function handleChangeToEventList(newEventsList){
    setEventsList(newEventsList);
  }


  return (
  <React.StrictMode>
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/uploadEvent" component={UploadEvent} />
        <Route path="/about" component={AboutPage} />
        <Route
            exact
            path="/events"
            render={(props) => <DisplayEventsPage {...props} eventsList={eventsList} onChange={handleChangeToEventList}/>}
          />
        <Route
            exact
            path="/event/:eventId"
            render={(props) => <EventPage {...props} eventsList={eventsList} />}
          />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/userSearch" component={UserSearch}/>
        <Route path="/parent" component={Parent}/>
      </Switch>
    </Router>
  </React.StrictMode>

  );
}

export default App;
