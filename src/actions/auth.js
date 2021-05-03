import axios from 'axios';
import { stopSubmit } from 'redux-form';

import {
  LOADING_USER,
  LOADED_USER,
  SUCCESSFUL_REGISTRATION,
  SUCCESSFUL_LOGIN,
  SUCCESSFUL_LOGOUT,
  AUTHENTICATION_ERROR,
  FAILED_REGISTRATION,
  FAILED_LOGIN,
  FAILED_LOGOUT
} from './types/auth';

import store from '../store';

export const loadUser = () => async (dispatch, getState) => {
  /*
    1. tell the web application that the user information is being loaded.
    2. retrieve authentication token from local storage
    3. use authentication token to rtrieve user information from database
    4. if the user is successfuly loaded, tell authentication reducer about
    success and pass along retrieved user information
    5. otherwise, tell the authentication reducer about the failed attempt.

  */
  dispatch({
    type: LOADING_USER
  });

  try {
    const response = await axios.get('/users/', tokenConfig(getState));
    dispatch({
      type: LOADED_USER,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: AUTHENTICATION_ERROR
    });
  }
}

/**
  @param email: the email of the user
  @param password: the password of the user

  This method logs in the user by making a request to the backend to
  check for the existence of a user with the provided email and password.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the user's state.
*/
export const login = (email, password)  => async dispatch => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to login the user.
    3. If the login was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  // get token with this method
  // btoa("email:password")

  // request body
  const body = JSON.stringify({ email, password });

  try {
    const response = await axios.post('/users/login', body, config);
    dispatch({
      type: SUCCESSFUL_LOGIN,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FAILED_LOGIN
    });
    dispatch(stopSubmit('loginForm', error.response.data));
  }
}


/**
  @param firstName: the first name of the new user
  @param lastName: the last name of the new user
  @param email: the email of the new user
  @param password: the password of the new user
  @param campus: the campus of the new user
  @param cohort: the cohort of the new user

  This method registers the user by passing user information to the backend to be added
  to the database.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the user's state.
  */
export const register = (firstName, lastName, email, password, campus, cohort) =>  async dispatch => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to register the user.
    3. If the registration was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  const body = JSON.stringify({ firstName, lastName, email, password, campus, cohort });

  try {
    const response = await axios.post('/users/register', body,  config)
    dispatch({
      type: SUCCESSFUL_REGISTRATION,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: FAILED_REGISTRATION
    });
    dispatch(stopSubmit('registrationForm', error.response.data));
  }
}


/**
  This method logs out the user by passing user information to the backend.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the user's authentication state
*/
export const logout = () =>  async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to logout the user.
    3. If the logout was successful, tell authentication reducer about
    success.
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const token = getState().auth.token;
  if (token) {
    dispatch({
      type: SUCCESSFUL_LOGOUT
    })
  } else {
    dispatch({
      type: FAILED_LOGOUT
    })
  }
}

/**
  @param getState: the state
  This method is a helper function to retrieve the authentication token
*/
export const tokenConfig = getState => {
  // Get token
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (token) {
    config.headers['Authorization'] = `Basic ${token}`;
  }

  return config;
};
