import React from "react";
// import events from "../events";
import EventCard from "./EventCard";

import { getEventsByTimeAction } from '../actions/eventActions';
import { connect } from 'react-redux';

class EventsPage extends React.Component {
    componentDidMount() {
      var toTime = new Date().getTime();
      var fromTime = new Date();
      fromTime.setMonth(fromTime.getMonth() - 1);
      fromTime = fromTime.getTime();

      this.props.getEventsByTimeAction({ fromTime: fromTime, toTime: toTime})
    }

    render() {
    return (<div>
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
  { getEventsByTimeAction }
)(EventsPage);
