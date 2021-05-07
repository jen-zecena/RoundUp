import React from "react";
// import events from "../events";
import EventCard from "./EventCard";

import { getEventsByTimeAction, deleteEventAction } from '../actions/eventActions';
import { connect } from 'react-redux';

class EventsPage extends React.Component {
    componentDidMount() {
      var toTime = new Date('2025-12-17 12:14:00').getTime();
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

      this.props.getEventsByTimeAction(fromTime, toTime)
    }

    render() {
    return (<div>
      <h1 style={{textAlign:"center"}}>
        All Upcoming Events
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
            posterUrl={event.posterUrl === 'poster2.jpg' ? "https://roundupposters.s3.amazonaws.com/poster2.jpg" : event.posterUrl}
            eventLink={`/event/${event.eID}`}
          />
        ))}
        </dl>
      </div>
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
