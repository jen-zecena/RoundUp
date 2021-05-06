import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import eventReducer from './eventReducer';
import rsvpReducer from './rsvpReducer';
import subscriptionReducer from './subscriptionReducer';
import { LOGOUT_SUCCESS } from '../actions/types/authActionTypes';

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  events: eventReducer,
  rsvps: rsvpReducer,
  subscriptions: subscriptionReducer,
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
