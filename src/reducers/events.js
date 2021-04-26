import _ from 'lodash';

import {
  ADD_EVENT,
  GET_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  GET_EVENTS
} from '../actions/types/events';

/**
  @param state: the current state of the web application
  @param action: the action that was performed by the app/ user
  @return state: the new state.

  This function processes responses from event requests made by the client
  api, and updates the centralized state with events accordingly.
*/
export default function eventReducer(state={}, action) {
  switch (action.type) {
    case ADD_EVENT:
      /*
        return an updated state object with a new event object
        which has the same information as the newly added event.
      */
      return {
      ...state,
      [action.payload.id]: action.payload
    };
    case GET_EVENT:
      /*
        return state object with the complete details of the
        given event.
      */
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case UPDATE_EVENT:
      /*
        return an updated state object where the event information
        on the updated event is updated to the current version.
      */
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_EVENT:
      /*
        return an updated state object with the deleted event omitted
        from the list of retrieved events.
      */
      return _.omit(state, action.payload);
    case GET_EVENTS:
      /*
        return an updated state object where the list of events is updated with
        the retrieved events;
      */
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    default:
      /*
        return the state object as is.
      */
      return state;
  }
}
