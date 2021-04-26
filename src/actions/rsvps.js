import axios from 'axios';
import { stopSubmit } from 'redux-form';

import {
  ADD_RSVP,
  DELETE_RSVP,
  GET_USER_RSVPS,
  GET_EVENT_RSVPS,
  GET_ATTENDEES
} from './types/rsvps';

// ** rsvp **
/**
  @param userID: the id of the user who is rsvp'ing to the event
  @param eventID: the id of the event to be rsvp'ing to

  This method adds a new rsvp by passing new rsvp information to be
  added to the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the added rsvp.
*/
export default addRsvp = ({ userID, eventID }) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to add the new rsvp.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.post(`/rsvps`, { userID, eventID }, tokenConfig(getState));
  dispatch({
    type: ADD_RSVP,
    payload: response.data
  });
}


/**
  @param eventID: the id of the event to be rsvp'ing to

  This method retrieves a list of attendees for an event.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved attendees.
*/
export default getAttendees = (eventID) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve the list of attendees.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.get(`/events/${eventID}/attendees`, tokenConfig(getState));
  dispatch({
    type:GET_ATTENDEES,
    payload: response.data
  });
}

/**
  @param userID: the id of the user in question

  This method retrieves a user's rsvp history.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved rsvps.
*/
export default getUserRsvps = (userID) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve rsvp history.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.get(`/users/${userID}/rsvps/`, tokenConfig(getState));
  dispatch({
    type: GET_USER_RSVPS,
    payload: response.data
  });
}

/**
  @param eventID: the id of the event in question

  This method retrieves the list of an event's rsvps.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved rsvps.
*/
export default getEventRsvps = (eventID) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve an event's rsvps.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.get(`/events/${eventID}/rsvps`, tokenConfig(getState));
  dispatch({
    type: GET_EVENT_RSVPS,
    payload: response.data
  });
}

/**
  @param userID: the id of the user who is rsvp'ing to the event
  @param eventID: the id of the event to be rsvp'ing to

  This method deletes an rsvp by making a request to the backend to delete it
  from the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the deleted rsvp.
*/
export default deleteRsvp = ({ userID, eventID }) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to delete the specified rsvp object.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.delete(`/rsvps`, { userID, eventID }, tokenConfig(getState));
  dispatch({
    type: DELETE_RSVP,
    payload: response.data
  });
}
