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
  @param userId: the id of the user who is rsvp'ing to the event
  @param eventId: the id of the event to be rsvp'ing to

  This method adds a new rsvp by passing new rsvp information to be
  added to the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the added rsvp.
*/
export default addRsvp = (userId, eventId) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to add the new rsvp.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  try {
    dispatch({
      type: ,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type:
    })
  }
}


/**
  @param rsvpId: the id of the specific rsvp object

  This method retrieves a list of attendees for an event.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved attendees.
*/
export default getAttendees = (rsvpId) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve the list of attendees.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  try {
    dispatch({
      type: ,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type:
    })
  }
}

/**
  @param userId: the id of the user in question

  This method retrieves a user's rsvp history.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved rsvps.
*/
export default getUserRsvps = (userId) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve rsvp history.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  try {
    dispatch({
      type: ,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type:
    })
  }
}

/**
  @param eventId: the id of the event in question

  This method retrieves the list of an event's rsvps.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved rsvps.
*/
export default getEventRsvps = (eventId) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve an event's rsvps.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  try {
    dispatch({
      type: ,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type:
    })
  }
}

/**
  @param rsvpId: the id of the specific rsvp object

  This method deletes an rsvp by making a request to the backend to delete it
  from the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the deleted rsvp.
*/
export default deleteRsvp = (rsvpId) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to delete the specified rsvp object.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  try {
    dispatch({
      type: ,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type:
    })
  }
}
