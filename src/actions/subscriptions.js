import axios from 'axios';
import { stopSubmit } from 'redux-form';

import {
  ADD_SUBSCRIPTION,
  DELETE_SUBSCRIPTION,
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIBERS
} from './types/subscriptions';

// action related to subscriptions **
/**
  @param followerID: the id of the user who is doing the following
  @param followedID: the id of the user being followed

  This method adds a new subscription by passing new subscription information
  to the backend to be added to the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the added subscription.
*/
export const addSubscription = ({ followerID, followedID }) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to add the new subscription.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.post(`/subscriptions`, { followerID, followedID }, tokenConfig(getState));
  dispatch({
    type: ADD_SUBSCRIPTION,
    payload: response.data
  });
}

/**
  @param followerID: the id of the user who is doing the following

  This method retrieves user's subscriptions from the database by making
  a request to the backend.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved subscriptions.
*/
export const getSubscriptions = (followerID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve the user's subscriptions.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.post(`/users/${followerID}/subscriptions`, tokenConfig(getState));
  dispatch({
    type: GET_SUBSCRIPTIONS,
    payload: response.data
  });
}

/**
  @param followedID: the id of the user being followed

  This method retrieves user's subscribers from the database by making
  a request to the backend.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved subscribers.
*/
export const getSubscribers = (followedID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve the user's subscribers.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.get(`/users/${followedID}/subscribers/`, tokenConfig(getState));
  dispatch({
    type: GET_SUBSCRIBERS,
    payload: response.data
  });
}


/**
  @param followerID: the id of the user who is doing the following
  @param followedID: the id of the user being followed

  This method deletes a subscription by making a request to the backend to delete the
  specified subscription from the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the deleted subscription.
*/
export const deleteSubscription = ({ followerID, followedID }) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to delete the specified subscription.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const response = await axios.delete(`/subscriptions`, { followerID, followedID }, tokenConfig(getState));
  dispatch({
    type: DELETE_SUBSCRIPTION,
    payload: response.data
  });
}
