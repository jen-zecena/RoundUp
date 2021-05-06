import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getEventAction } from '../actions/eventActions';
import { getEventsByTimeAction } from '../actions/eventActions';
import { connect } from 'react-redux';
import { propTypes } from 'react-bootstrap/esm/Image';


class AllEvents extends Component {
   
    componentWillMount(){
        this.props.getEventAction("1"); 
    
    }
    render() {
        const EventItems = this.props.events.map(event => (
            <div key={event.id}>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
            </div>
        ))
        return (
            <div>
                <h1>Events</h1>
                {EventItems}
            </div>
        )
    }
}

AllEvents.propTypes = {
    getEventAction: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    events: state.events.items
});

export default connect(mapStateToProps,{ getEventAction })(AllEvents);