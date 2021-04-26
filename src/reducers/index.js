import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth';
import eventReducer from './events';
import rsvpReducer from './rsvps';
import subscriptionReducer from '/subscriptions';
import { SUCCESSFUL_LOGOUT } from '../actions/types';

const appReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  events: eventReducer,
  rsvps: rsvpReducer,
  subscriptions: subscriptionReducer,
})

const rootReducer = (state, action) => {
  if (action.type === SUCCESSFUL_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
