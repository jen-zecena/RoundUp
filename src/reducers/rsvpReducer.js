import _ from 'lodash';
import {
  ADD_RSVP_SUCCESS,
  ADD_RSVP_FAIL,
  DELETE_RSVP_SUCCESS,
  DELETE_RSVP_FAIL,
  GET_USER_RSVPS_SUCCESS,
  GET_USER_RSVPS_FAIL
} from '../actions/types/rsvpActionTypes';


/** rsvps **/
/**
  @param state: the current state of the web application
  @param action: the action that was performed by the app/ user
  @return state: the new state.

  This function processes responses from rsvp requests made by the client
  api, and updates the state with the user's rsvps accordingly.
*/
export default function rsvpReducer(state={rsvps: []}, action) {
  switch (action.type) {
    case ADD_RSVP_SUCCESS:
      /*
        return an updated state object with a new rsvp object
        which has the same information as the newly added rsvp.
      */

      return {
        rsvps: _.uniqBy([...state.rsvps, action.payload], function(rsvp) {
          return rsvp.email + rsvp.eventID
        })
      };
    case ADD_RSVP_FAIL:
      return {
        ...state,
        error: action.error
      };
    case DELETE_RSVP_SUCCESS:
      /*
        return an updated state object with the deleted rsvp omitted
        from the list of retrieved rsvps.
      */
      const rsvps = []
      for (var index in state.rsvps) {
        var rsvp = state.rsvps[index];
        if (rsvp !== action.payload) {
          rsvps.push(rsvp)
        }
      }
      return {
        ...state,
        rsvps: rsvps
      };
    case DELETE_RSVP_FAIL:
      return {
              ...state,
              error: action.error
            }
    case GET_USER_RSVPS_SUCCESS:
      /*
        return an updated state object where the list of the user's rsvps is updated
        with the retrieved rsvps;
      */
      return {
        rsvps: _.uniqBy([
          ...state.rsvps,
          ...action.payload
        ], function(rsvp) {
          return rsvp.email + rsvp.eventID
        })
      }
    case GET_USER_RSVPS_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      /*
        return the state object as is.
      */
      return state;
  }
}
