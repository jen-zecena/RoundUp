import axios from 'axios';
import { stopSubmit } from 'redux-form';
import { apiRequest } from './commonActions';

import { tokenConfig } from './authActions';

import {
  ADD_RSVP_SUCCESS,
  ADD_RSVP_FAIL,
  DELETE_RSVP_SUCCESS,
  DELETE_RSVP_FAIL,
  GET_USER_RSVPS_SUCCESS,
  GET_USER_RSVPS_FAIL,
  // GET_ATTENDEES_SUCCESS,
  // GET_ATTENDEES_FAIL
} from './types/rsvpActionTypes';

import {
  USERS_URL,
  RSVPS_URL
} from './backendAccessPoints'

// ** rsvp **
/**
  @param uID: the id of the user who is rsvp'ing to the event
  @param eventID: the id of the event to be rsvp'ing to

  This method adds a new rsvp by passing new rsvp information to be
  added to the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the added rsvp.
*/
export const addRsvpAction = ({email, name, eID, time}) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to add the new rsvp.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    console.log("rsvp Action");
    const response = await axios.post(RSVPS_URL, { email, name, eID, time }, tokenConfig(getState));
    dispatch({
      type: ADD_RSVP_SUCCESS,
      payload: response.data
    });
    console.log("response data");
    console.log(response.data);
    console.log("response ");
    console.log(response);
    return response;
  } catch (error) {
    dispatch({
      type: ADD_RSVP_FAIL,
      error: error.message
    });
  }
}

/**
  @param uID: the id of the user in question

  This method retrieves a user's rsvp history.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved rsvps.
*/
export const getUserRsvpsAction = (email, status) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve rsvp history.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.get(`${USERS_URL}${email}/rsvps/${status}`, tokenConfig(getState));
    dispatch({
      type: GET_USER_RSVPS_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: GET_USER_RSVPS_FAIL,
      error: error.message
    });
  }
}

/**
  @param uID: the id of the user who is rsvp'ing to the event
  @param eventID: the id of the event to be rsvp'ing to

  This method deletes an rsvp by making a request to the backend to delete it
  from the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the deleted rsvp.
*/
export const deleteRsvpAction = ( email, eventID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to delete the specified rsvp object.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.delete(RSVPS_URL, { email, eventID }, tokenConfig(getState));
    dispatch({
      type: DELETE_RSVP_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: DELETE_RSVP_FAIL,
      error: error.message
    });
  }
}
