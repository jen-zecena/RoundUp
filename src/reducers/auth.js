// the default state of the user
const defaultAuthState = {
  /*
    Initialize state variables that will control web app
    behavior.
  */
  isLoading: false,
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem('token')
};


/**
  @param state: the current state of the web application
  @param action: the action that was performed by the app/ user
  @return state: the new state.

  This function processes responses from authentication requests made by the client
  api, and updates the user's authentication state accordingly.
*/
export default function authReducer(state=defaultState, action) {
  switch (action.type) {
    case LOADING_USER:
      /*
        return a state object that tells the
        web app that the app is currently trying
        to load the user without affecting the
        current state of the app
      */
      return {
        ...state,
        isLoading: true
      };
    case LOADED_USER:
     /*
       return a state object that tells the
       web app that the user is no longer being
       loaded and updates the previous state with
       the current user information. The app also
       needs to know that the user was successfully
       authenticated.
     */
     return {
       ...state,
       isLoading: false,
       isAuthenticated: true,
       user: action.payload,
       token: action.payload.token
     };
    case SUCCESSFUL_REGISTRATION:
      /*
        currently do nothing because the user information
        can be retrieved from the database if registration
        was successful.
      */
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        ...action.payload
      };
    case SUCCESSFUL_LOGIN:
      /*
        1. store the authentication token in local storage
        object.
        2. return an updated state object that tell the web app
        that the user is no longer being loaded, that the user was
        successfully authenticated, and updates the previous state
        with the current user information.
      */
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        ...action.payload
      };
    case SUCCESSFUL_LOGOUT:
      /*
        1. delete the authentication token from local storage.
        2. return an updated state object that has default values for
        an unauthenticated user.
      */
      localStorage.removeItem('token');
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        token: null
      };
    case AUTHENTICATION_ERROR:
      // do nothing
    case FAILED_REGISTRATION:
      // do nothing
    case FAILED_LOGIN:
      // do nothing
    case FAILED_LOGOUT:
      // do nothing
    default:
      /*
        return state as is
      */
      return state;
  }
}
