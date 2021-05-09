import React from "react";
import EventCard from "./EventCard";

import { getEventsByTimeAction } from "../actions/eventActions";
import { connect } from "react-redux";


/**
 * This React components displays all upcoming events that are stored in the database
 * so that when a user is on the main page they can quicly browse through all events on the site
**/
class EventsPage extends React.Component {
  //functions within a componentDidMount get called as soon as the page loads
  componentDidMount() {

    var toTime = new Date("2025-12-17 12:14:00").getTime();
    console.log("toTime");
    console.log(toTime);

    var fromTime = new Date();
    fromTime.setMonth(fromTime.getMonth() - 1);
    fromTime = fromTime.getTime();
    console.log("fromTime");
    console.log(fromTime);

    /**
    @param fromTime: eventsList is a name for the props that will be passed into this function
    @param ToTime: eventsList is a name for the props that will be passed into this function
    @return: all of the upcoming events stored in the data base
    
    CHANGE: In our design plans and in our implementation of this component without redux, I defined a removePastEvents
    function in order to filter out events that have already occured.
    
    ACTUAL: Instead I now use the function getEventsByTimeAction (which is defined in the eventsActions file)
    to only retrieve events from the database that will occur in the future by setting fromTime = the current time
    **/

    // This function call updates the list of events stored in the redux state, the state will contain all upcoming events
    this.props.getEventsByTimeAction(fromTime, toTime);
  }

  render() {
    return (
      <div className="allevents">
        <h1 style={{ textAlign: "center" }} className="header">
          All Upcoming Events
        </h1>
        <dl className="dictionary">
          {/* this.props.events contains the list of events that we map through in order to display all of the evnets */}
          {/* To Improve code redability the EventCard code is in a seperate component (EventCard.js) and in this file 
          we pass in the properties required to render each card*/}
          {this.props.events.map((event, index) => (
            <EventCard
              key={event.eID}
              date={event.date}
              name={event.name}
              location={event.location}
              description={event.description}
              time={event.time}
              posterUrl={
                event.posterUrl === "no poster"
                  ? "https://picsum.photos/200"
                  : event.posterUrl
              }
              eventLink={`/event/${event.eID}`}
            />
          ))}
        </dl>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  events: Object.values(state.events.events),
});

// connect is used to connect the state and props in this file to the global store/state
export default connect(mapStateToProps, {
  getEventsByTimeAction
})(EventsPage);
