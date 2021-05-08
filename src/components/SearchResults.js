import React from "react";
import EventCard from "./EventCard";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router } from "react-router-dom";
import { getEventsByTimeAction, deleteEventAction } from "../actions/eventActions";
import { connect } from "react-redux";

/* This component displays the search results that match a users's search criteria,
 the correct events list is passed to this component through the redux state  */
class SearchResults extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1 style={{ textAlign: "center" }}>Events Page</h1>
            <dl className="dictionary">
            {/* this.props.events access the list of events that match a user search*/}
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
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  events: Object.values(state.events.events),
});

export default connect(mapStateToProps, {
  getEventsByTimeAction,
  deleteEventAction,
})(SearchResults);
