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
  const [eventsList, setEventList] = useState([{
    userId: 10,
    eventTime: "2022-07-04 14:55:10.888",
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
    eventTime: "2021-04-04 14:55:10.888",
    posterUrl: "",
    name: "Event 11",
    description: "event 10 description is going to go here.",
    location: "CMC",
    tags: ["CMC", "EconDepartment"]
  }]);


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
            render={(props) => <DisplayEventsPage {...props} eventsList={eventsList} />}
          />
        <Route path="/event/:eventId" component={EventPage}/>
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
