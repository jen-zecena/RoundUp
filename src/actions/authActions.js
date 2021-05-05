import axios from 'axios';
import { stopSubmit } from 'redux-form';
import { apiRequest } from './commonActions';

import {
  LOADING_USER,
  LOADING_USER_SUCCESS,
  LOADING_USER_FAIL,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from './types/authActionTypes';

import store from '../store';

export const loadUserAction = () => async (dispatch, getState) => {
  /*
    1. tell the web application that the user information is being loaded.
    2. retrieve authentication token from local storage
    3. use authentication token to rtrieve user information from database
    4. if the user is successfully loaded, tell authentication reducer about
    success and pass along retrieved user information
    5. otherwise, tell the authentication reducer about the failed attempt.

  */
  dispatch({
    type: LOADING_USER
  });

  dispatch(apiRequest());
  try {
    const response = await axios.get('/users/', tokenConfig(getState));
    dispatch({
      type: LOADING_USER_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: LOADING_USER_FAIL,
      error: error.message
    });
    return error;
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
export const loginUserAction = (email, password)  => async dispatch => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to login the user.
    3. If the login was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */

  // creating request headers and body
  const config = getHeaders();
  const body = JSON.stringify({ email, password });

  // get token with this method
  // btoa("email:password")


  dispatch(apiRequest());
  try {
    const response = await axios.post('/users/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      error: error.message
    });
    // dispatch(stopSubmit('loginForm', error.response.data));
    return error;
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
export const registerUserAction = (firstName, lastName, email, password, campus) =>  async dispatch => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to register the user.
    3. If the registration was successful, tell authentication reducer about
    success and pass along user information
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  // creating request headers and body
  const config = getHeaders();
  const body = JSON.stringify({ firstName, lastName, email, password, campus });

  dispatch(apiRequest());
  try {
    const response = await axios.post('/users/register', body,  config)
    dispatch({
      type: REGISTRATION_SUCCESS,
      payload: response.data
    });
    return response;
  } catch (error) {
    dispatch({
      type: REGISTRATION_FAIL,
      error: error.message
    });
    // dispatch(stopSubmit('registrationForm', error.response.data));
    return error;
  }
}


/**
  This method logs out the user by passing user information to the backend.

  The method dispatches the result of the action to the reducer, which
  informs the web app of the user's authentication state
*/
export const logoutUserAction = () =>  async (dispatch, getState) => {
  /*
    1. Create the request configuration and stringify the parameters
    2. Make a request to the backend to logout the user.
    3. If the logout was successful, tell authentication reducer about
    success.
    4. otherwise, tell the authentication reducer about the failed attempt.
  */
  const token = getToken(getState);
  if (token) {
    dispatch({
      type: LOGOUT_SUCCESS
    })
  } else {
    dispatch({
      type: LOGOUT_FAIL
    })
  }
}

/**
  @param getState: the state
  This method is a helper function to retrieve the authentication token
*/
export const tokenConfig = getState => {
  // Get token
  const token = getToken(getState);

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

function getToken(getState) {
  var token = null;
  try {
    token = getState().auth.token;
  } catch (error) {}
  return token;
}

function getHeaders() {
  return {
    headers: {
      'Content-Type': 'application/json',
    }
  };
}
