import React from "react";
// import events from "../events";
import RsvpForm from './RsvpForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

import _ from 'lodash';
import { addRsvpAction } from '../actions/rsvpActions';
import { getEventAction } from '../actions/eventActions';
import { connect } from 'react-redux';


class EventPage extends React.Component {
  componentDidMount() {
    this.props.getEventAction(this.props.match.params.eID);
  }

  render() {
    if (this.props.event) {
      const timeStamp = new Date(this.props.event.eventTime);
      const eventDate =  timeStamp.getMonth() + 1 + "/" + timeStamp.getDate() + "/" + timeStamp.getFullYear();
      const eventTime = timeStamp.getHours() + ":" + timeStamp.getMinutes() + ":" + timeStamp.getSeconds();

      return (
        <div>
          <Container>
          <Jumbotron>
            <Row>
              <Col>
                <Card style = {{ width: '18 rem'}} >
                <Card.Img variant = "top" src = { this.props.event.posterUrl === 'no poster' ? "https://picsum.photos/200": this.props.event.posterUrl } / >
                < Card.Body >
                  <Card.Title > {this.props.event.name} </Card.Title >
                  <Card.Subtitle className="mb-2 text-muted">
                  {eventDate} {eventTime} {this.props.event.location}
                  </Card.Subtitle>
                  <Card.Text >{this.props.event.description}</Card.Text>
                </ Card.Body>
                </ Card>
              </ Col>
              <Col> <RsvpForm eID={this.props.event.eID} />  </Col>
            </ Row>
          </ Jumbotron>
          </ Container>
        </ div>
      );
    }

    return "";
  }
};

const mapStateToProps = (state, ownProps) => ({
  event: _.filter(state.events.events, function(event) {
    return event.eID === parseInt(ownProps.match.params.eID);
  })[0]
});
export default connect(
  mapStateToProps,
  { getEventAction, addRsvpAction }
)(EventPage);
