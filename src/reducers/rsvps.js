import _ from 'lodash';

import {
  ADD_RSVP,
  DELETE_RSVP,
  GET_USER_RSVPS,
  GET_EVENT_RSVPS,
  GET_ATTENDEES
} from '../actions/types/rsvps';


/** rsvps **/
/**
  @param state: the current state of the web application
  @param action: the action that was performed by the app/ user
  @return state: the new state.

  This function processes responses from rsvp requests made by the client
  api, and updates the state with the user's rsvps accordingly.
*/
export default function rsvpReducer(state={}, action) {
  switch (action.type) {
    case ADD_RSVP:
      /*
        return an updated state object with a new rsvp object
        which has the same information as the newly added rsvp.
      */
      return {
        ...state,
        [action.payload.eventID]: action.payload
      };
    case DELETE_RSVP:
      /*
        return an updated state object with the deleted rsvp omitted
        from the list of retrieved rsvps.
      */
      return _.omit(state, action.payload);
    case GET_USER_RSVPS:
      /*
        return an updated state object where the list of the user's rsvps is updated
        with the retrieved rsvps;
      */
      return {
        ...state,
        ...action.payload
      }
    case GET_EVENT_RSVPS:
      /*
        return an updated state object where the list of rsvps for an event is updated
        with the retrieved rsvps;
      */
      return {
        ...state,
        ...action.payload
      }
    case GET_ATTENDEES:
      /*
        return an updated state the list of attendees for a specified event is updated.
      */
      return {
        ...state,
        ...action.payload
      }
    default:
      /*
        return the state object as is.
      */
      return state;
  }
}
