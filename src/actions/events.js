import axios from 'axios';
import { stopSubmit } from 'redux-form';
import { reset } from 'redux-form';

import {
  ADD_EVENT,
  GET_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  GET_EVENTS
} from './types/events';

import history from '../history';
import { tokenConfig } from './auth';

// actions related to the events **
/**
  @param userId: the ID of the user who is creating the event
  @param description: the description of the event to be created
  @param eventTime: the time the event will take place
  @param poster: the url for the poster corresponding to this event
  @param name: the name of the event given by the user
  @param location: the location of the event as given by the user

  This method adds a new event by passing new event information to the backend to be added
  to the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the added event.
*/
export default addEvent = ({ userId, description, eventTime, poster, name, location, tags }) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to add the new event.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.post('/events', { userId, description, eventTime, poster, name, location, tags }, tokenConfig(getState));
  dispatch({
    type: ADD_EVENT,
    payload: response.data
  });
}

/**
  @param eventID: the id of the specific event

  This method retrieves event information from the database by making
  a request to the backend.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved event.
*/
export default getEvent = (eventID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve the event information.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.get(`/events/${eventID}`, tokenConfig(getState));
  dispatch({
    type: GET_EVENT,
    payload: response.data
  });
}

/**
  @param eventID:  the id of the event to be updated
  @param userId: the user id of the user trying to update the event
  @param description: the new description for the event
  @param eventTime: the new time for the event
  @param poster: the url of the event poster
  @param name: the new name for the event
  @param location: the new location for the event

  This method modifies an event's information by makin a request to
  the backend to modify the specific event's information in the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the updated event.
*/
export default updateEvent = ({ eventID, userId, description, eventTime, poster, name, location, tags }) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to modify the specified event.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.put(`/events/${eventID}`, { eventID, userId, description, eventTime, poster, name, location, tags }, tokenConfig(getState));
  dispatch({
    type: UPDATE_EVENT,
    payload: response.data
  });
}

/**
  @param eventID: the id of the specific event

  This method deletes an event by making a request to the backend to delete the
  specified event from the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the deleted event.
*/
export default deleteEvent = (eventID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to delete the event.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.delete(`/events/${eventID}`, tokenConfig(getState));
  dispatch({
    type: DELETE_EVENT,
    payload: response.data
  });
}

/**
  @param tags: a list of tags associated with the event
  @param status: the status of events user is interested in

  This method retrieves events by making a request ot the backend to extract events with
  specified parameters.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved events.
*/
export default getEvents = (owner, tags, status) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve specified events.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.get(`/events/`, {owner, tags, status}, tokenConfig(getState));
  dispatch({
    type: GET_EVENTS,
    payload: response.data
  });
}
