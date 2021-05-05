import axios from 'axios';
import { stopSubmit } from 'redux-form';
import { apiRequest } from './commonActions';

import { tokenConfig } from './authActions';

import {
  ADD_SUBSCRIPTION_SUCCESS,
  ADD_SUBSCRIPTION_FAIL,
  DELETE_SUBSCRIPTION_SUCCESS,
  DELETE_SUBSCRIPTION_FAIL,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_FAIL,
  GET_SUBSCRIBERS_SUCCESS,
  GET_SUBSCRIBERS_FAIL
} from './types/subscriptionActionTypes';


// action related to subscriptions **
/**
  @param followerID: the id of the user who is doing the following
  @param followedID: the id of the user being followed

  This method adds a new subscription by passing new subscription information
  to the backend to be added to the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the added subscription.
*/
export const addSubscriptionAction = (followerID, followedID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to add the new subscription.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.post(`/subscriptions`, { followerID, followedID }, tokenConfig(getState));
    dispatch({
      type: ADD_SUBSCRIPTION_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
      dispatch({
        type: ADD_SUBSCRIPTION_FAIL,
        error: error.message
      });
      return error;
  }
}

/**
  @param followerID: the id of the user who is doing the following

  This method retrieves user's subscriptions from the database by making
  a request to the backend.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved subscriptions.
*/
export const getSubscriptionsAction = (followerID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve the user's subscriptions.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.get(`/users/${followerID}/subscriptions`, tokenConfig(getState));
    dispatch({
      type: GET_SUBSCRIPTIONS_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
      dispatch({
        type: GET_SUBSCRIPTIONS_FAIL,
        error: error.message
      });
      return error;
  }
}

/**
  @param followedID: the id of the user being followed

  This method retrieves user's subscribers from the database by making
  a request to the backend.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the retrieved subscribers.
*/
export const getSubscribersAction = (followedID) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to retrieve the user's subscribers.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.get(`/users/${followedID}/subscribers/`, tokenConfig(getState))
    dispatch({
      type: GET_SUBSCRIBERS_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
      dispatch({
        type: GET_SUBSCRIBERS_FAIL,
        error: error.message
      });
      return error;
  }
}


/**
  @param followerID: the id of the user who is doing the following
  @param followedID: the id of the user being followed

  This method deletes a subscription by making a request to the backend to delete the
  specified subscription from the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the deleted subscription.
*/
export const deleteSubscriptionAction = ({ followerID, followedID }) => async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to delete the specified subscription.
    3. If the attempt was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  dispatch(apiRequest());
  try {
    const response = await axios.delete(`/subscriptions`, { followerID, followedID }, tokenConfig(getState));
    dispatch({
      type: DELETE_SUBSCRIPTION_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
      dispatch({
        type: DELETE_SUBSCRIPTION_FAIL,
        error: error.message
      });
      return error;
  }
}
