import axios from 'axios';
import { stopSubmit } from 'redux-form';
import { reset } from 'redux-form';
import { apiRequest } from './commonActions';

import {
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAIL,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  // GET_EVENTS_SUCCESS,
  // GET_EVENTS_FAIL,
  GET_EVENTS_BY_TAGS_SUCCESS,
  GET_EVENTS_BY_TAGS_FAIL,
  GET_EVENTS_BY_NAME_SUCCESS,
  GET_EVENTS_BY_NAME_FAIL,
  GET_EVENTS_BY_OWNER_SUCCESS,
  GET_EVENTS_BY_OWNER_FAIL,
  GET_EVENTS_BY_TIME_SUCCESS,
  GET_EVENTS_BY_TIME_FAIL,
  GET_EVENT_ATTENDEES_SUCCESS,
  GET_EVENT_ATTENDEES_FAIL
} from './types/eventActionTypes';

import {
  EVENTS_URL
} from './backendAccessPoints';

import history from '../history';
import { tokenConfig } from './authActions';

// actions related to the events **
/**
  @param uID: the ID of the user who is creating the event
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
export const addEventAction = ({ uID, description, eventTime, posterUrl, name, location, tags }) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to add the new event.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {

    console.log("add Event Action")
    var eventTimeTimestamp = new Date(eventTime).getTime();
    const response = await axios.post(EVENTS_URL, { uID: 1, description, eventTime: eventTimeTimestamp, posterUrl, name, location, tags }, tokenConfig(getState));
    console.log("add Event state");
    console.log(tokenConfig(getState));
    console.log(getState);
    dispatch({
      type: ADD_EVENT_SUCCESS,
      payload: response.data
    });
    console.log("add event response data");
    console.log(response.data);
    console.log("add event response ");
    console.log(response);
    return response;
  } catch (error) {
    console.log("PPPPPPPPPPPPPPPP");
    console.log(error);
    dispatch({
      type: ADD_EVENT_FAIL,
      error: error.message
    });
    return error;
  }
}

/**
  @param eventID: the id of the specific event

  This method retrieves event information from the database by making
  a request to the backend.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved event.
*/
export const getEventAction = (eventID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve the event information.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    console.log("event Action");
    const response = await axios.get(`${EVENTS_URL}${eventID}/`, tokenConfig(getState));
    dispatch({
      type: GET_EVENT_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: GET_EVENT_FAIL,
      error: error.message
    });
    return error;
  }
}

/**
  @param eventID:  the id of the event to be updated
  @param uID: the user id of the user trying to update the event
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
export const updateEventAction = ({ eventID, uID, description, eventTime, poster, name, location, tags }) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to modify the specified event.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.put(`${EVENTS_URL}${eventID}/`, { eventID, uID, description, eventTime, poster, name, location, tags }, tokenConfig(getState));
    dispatch({
      type: UPDATE_EVENT_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: UPDATE_EVENT_FAIL,
      error: error.message
    });
    return error;
  }

}

/**
  @param eventID: the id of the specific event

  This method deletes an event by making a request to the backend to delete the
  specified event from the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the deleted event.
*/
export const deleteEventAction = (eventID, uID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to delete the event.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.delete(EVENTS_URL, tokenConfig(getState), { 'eventID': eventID, 'uID': uID });
    dispatch({
      type: DELETE_EVENT_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: DELETE_EVENT_FAIL,
      error: error.message
    });
    return error;
  }
}

// /**
//   @param tags: a list of tags associated with the event
//   @param search: the key word to search events by
//   @param uID: the owner's user id
//   @param status: the status of events user is interested in
//   @param fromTime: the beginning of the events time window
//   @param toTime: the end of the events time window
//
//   This method retrieves eventsthat have particular tags by making a request ot the backend to extract events with
//   specified parameters.
//
//   The method dispatches the result of the action to the reducer, which
//   informs the web app of the retrieved events.
// */
// export const getEventsAction = ({ tags, search, uID, status, fromTime, toTime }) => async (dispatch, getState) => {
//   dispatch(apiRequest());
//   try {
//     const response = await axios.get(EVENTS_URL, {params: { tags: tags, search: search, status: status, fromTime: fromTime, toTime: toTime }});
//     dispatch({
//       type: GET_EVENTS_SUCCESS,
//       payload: response.data.events
//     });
//     return response;
//   } catch (error) {
//     dispatch({
//       type: GET_EVENTS_FAIL,
//       error: error.message
//     });
//     return error;
//   }
// }

/**


  This method retrieves eventsthat have particular tags by making a request ot the backend to extract events with
  specified parameters.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved events.
*/
export const getEventsByTagsAction = (tags, status) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve specified events.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.get(EVENTS_URL + "tags/", {tags, status}, tokenConfig(getState));
    dispatch({
      type: GET_EVENTS_BY_TAGS_SUCCESS,
      payload: response.data.events
    });
    console.log("response");
    console.log(response);
    return response;
  } catch (error) {
    dispatch({
      type: GET_EVENTS_BY_TAGS_FAIL,
      error: error.message
    });
    console.log("error");
    console.log(error);
    return error;
  }
  

}


/**
  @param uID: the owner's user id
  @param status: the status of events user is interested in

  This method retrieves events belonging to a particular owner by making a request ot the backend to extract events with
  specified parameters.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved events.
*/
export const getEventsByOwnerAction = (uID, status) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve specified events.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.get(EVENTS_URL + `owner/${uID}/`, {status}, tokenConfig(getState));
    dispatch({
      type: GET_EVENTS_BY_OWNER_SUCCESS,
      payload: response.data.events
    });
    return response;
  } catch (error) {
    dispatch({
      type: GET_EVENTS_BY_OWNER_FAIL,
      error: error.message
    });
    return error;
  }
}


/**
  @param search: the key word to search events by
  @param status: the status of events user is interested in

  This method retrieves events that that a key word by making a request ot the backend to extract events with
  specified parameters.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved events.
*/
export const getEventsByNameAction = (search, status) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve specified events.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.get(EVENTS_URL + "search/", {search, status}, tokenConfig(getState));
    dispatch({
      type: GET_EVENTS_BY_NAME_SUCCESS,
      payload: response.data.events
    });
    return response;
  } catch (error) {
    dispatch({
      type: GET_EVENTS_BY_NAME_FAIL,
      error: error.message
    });
    return error;
  }
}


/**
  @param fromTime: the beginning of the events time window
  @param toTime: the end of the events time window

  This method retrieves events within a time window by making a request ot the backend to extract events with
  specified parameters.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved events.
*/
export const getEventsByTimeAction = (fromTime, toTime) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve specified events.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.get(EVENTS_URL + "timeframe/",{ params: {fromTime, toTime}});
    dispatch({
      type: GET_EVENTS_BY_TIME_SUCCESS,
      payload: response.data.events
    });
    return response;
  } catch (error) {
    dispatch({
      type: GET_EVENTS_BY_TIME_FAIL,
      error: error.message
    });
    return error;
  }
}


/**
  @param eventID: the id of the event to be rsvp'ing to

  This method retrieves a list of attendees for an event.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved attendees.
*/
export const getEventAttendeesAction = (eventID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve the list of attendees.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.get(`${EVENTS_URL}${eventID}/attendees/`, tokenConfig(getState));
    dispatch({
      type: GET_EVENT_ATTENDEES_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: GET_EVENT_ATTENDEES_FAIL,
      error: error.message
    });
  }
}
