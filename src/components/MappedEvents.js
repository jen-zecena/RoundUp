import React from "react";
// import events from "../events";
import EventCard from "./EventCard";
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { getEventsByTimeAction, deleteEventAction } from '../actions/eventActions';
import { connect } from 'react-redux';

class EventsPage extends React.Component {
    componentDidMount() {
      var toTime = new Date().getTime();
      console.log("toTime");
      console.log(toTime);
      var fromTime = new Date();
      console.log("fromTime");
      console.log(fromTime);
      fromTime.setMonth(fromTime.getMonth() - 1);
      console.log("fromTime");
      console.log(fromTime);
      fromTime = fromTime.getTime();
      console.log("fromTime");
      console.log(fromTime);
      console.log("React.version");
      console.log(React.version);

      
      // this.props.getEventsByTimeAction(fromTime, toTime)
      
    }
    

    handleDeleteEvent = () =>{
      this.props.deleteEventAction(36, 1)
    }
    render() {
    return (
      <Router>
    <div>
      <h1 style={{textAlign:"center"}}>
        Events Page
      </h1>
        <dl className="dictionary">
        {this.props.events.map((event, index) => (
          <EventCard
            key={event.eID}
            date={event.date}
            name={event.name}
            location={event.location}
            description={event.description}
            time={event.time}
            posterUrl={event.posterUrl === 'no poster' ? "https://picsum.photos/200" : event.posterUrl}
            eventLink={`/event/${event.eID}`}
          />
        ))}
        <Button variant="danger" onClick={this.handleDeleteEvent}>
              Submit
            </Button>
        </dl>
      </div>
      </Router>
    );
  }
};

const mapStateToProps = state => ({
  events: Object.values(state.events.events)
});

export default connect(
  mapStateToProps,
  { getEventsByTimeAction, deleteEventAction }
)(EventsPage);
