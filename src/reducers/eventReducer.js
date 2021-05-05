import _ from 'lodash';

import {
  ADD_EVENT_SUCCESS,
  ADD_EVENT_FAIL,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAIL,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAIL,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  // GET_EVENTS_BY_TAGS_SUCCESS,
  // GET_EVENTS_BY_TAGS_FAIL,
  // GET_EVENTS_BY_NAME_SUCCESS,
  // GET_EVENTS_BY_NAME_FAIL,
  // GET_EVENTS_BY_OWNER_SUCCESS,
  // GET_EVENTS_BY_OWNER_FAIL,
  // GET_EVENTS_BY_TIME_SUCCESS,
  // GET_EVENTS_BY_TIME_FAIL,
  GET_EVENT_ATTENDEES_SUCCESS,
  GET_EVENT_ATTENDEES_FAIL
} from '../actions/types/eventActionTypes';

const defaultEventState = {
  events: [],
  attendees: []
}

/**
  @param state: the current state of the web application
  @param action: the action that was performed by the app/ user
  @return state: the new state.

  This function processes responses from event requests made by the client
  api, and updates the centralized state with events accordingly.
*/
export default function eventReducer(state=defaultEventState, action) {
  switch (action.type) {
    case ADD_EVENT_SUCCESS:
      /*
        return an updated state object with a new event object
        which has the same information as the newly added event.
      */
      _.remove(state.events, { eID: action.payload.eID })
      return {
        ...state,
        events: _.uniqBy([
          ...state.events,
          action.payload
        ], function(event) {
          return event.eID;
        })
      };
    case ADD_EVENT_FAIL:
      /*
        return an updated state object with a new event object
        which has the same information as the newly added event.
      */
      return {
      ...state,
      error: action.error,
    };
    case GET_EVENT_SUCCESS:
      /*
        return state object with the complete details of the
        given event.
      */
      _.remove(state.events, { eID: action.payload.eID })
      state = {
        ...state,
        events: _.uniqBy([
          ...state.events,
          action.payload
        ], function(event) {
          return event.eID;
        })
      };
      return state;
    case GET_EVENT_FAIL:
      /*
        return state object with the complete details of the
        given event.
      */
      return {
        ...state,
        error: action.error
      };
    case UPDATE_EVENT_SUCCESS:
      /*
        return an updated state object where the event information
        on the updated event is updated to the current version.
      */
      _.remove(state.events, { eID: action.payload.eID })
      return {
        ...state,
        events: _.uniqBy([
          ...state.events,
          action.payload
        ], function(event) {
          return event.eID;
        })
      };
    case UPDATE_EVENT_FAIL:
      /*
        return an updated state object where the event information
        on the updated event is updated to the current version.
      */
      return {
        ...state,
        error: action.error
      };
    case DELETE_EVENT_SUCCESS:
      /*
        return an updated state object with the deleted event omitted
        from the list of retrieved events.
      */
      _.remove(state.events, { eID: action.payload.eID})
      return state;
    case DELETE_EVENT_FAIL:
      /*
        return an updated state object with the deleted event omitted
        from the list of retrieved events.
      */
      return {
        ...state,
        error: action.error
      };
    case GET_EVENTS_SUCCESS:
      /*
        return an updated state object where the list of events is updated with
        the retrieved events;
      */
      return {
        ...state,
        events: _.uniqBy([
          ...state.events,
          ...action.payload
        ], function(event) {
          return event.eID
        })
      };
    case GET_EVENTS_FAIL:
      /*
        return an updated state object where the list of events is updated with
        the retrieved events;
      */
      return {
        ...state,
        error: action.error
      };
    // case GET_EVENTS_BY_TAGS_SUCCESS:
    //   /*
    //     return an updated state object where the list of events is updated with
    //     the retrieved events;
    //   */
    //   return {
    //     ...state,
    //     events: _.uniqBy([
    //       ...state.events,
    //       ...action.payload
    //     ], function(event) {
    //       return event.eID
    //     })
    //   };
    // case GET_EVENTS_BY_TAGS_FAIL:
    //   /*
    //     return an updated state object where the list of events is updated with
    //     the retrieved events;
    //   */
    //   return {
    //     ...state,
    //     error: action.error
    //   };
    // case GET_EVENTS_BY_NAME_SUCCESS:
    //   /*
    //     return an updated state object where the list of events is updated with
    //     the retrieved events;
    //   */
    //   return {
    //     ...state,
    //     events: _.uniqBy([
    //       ...state.events,
    //       ...action.payload
    //     ], function(event) {
    //       return event.eID
    //     })
    //   };
    // case GET_EVENTS_BY_NAME_FAIL:
    //   /*
    //     return an updated state object where the list of events is updated with
    //     the retrieved events;
    //   */
    //   return {
    //     ...state,
    //     error: action.error
    //   };
    // case GET_EVENTS_BY_OWNER_SUCCESS:
    //   /*
    //     return an updated state object where the list of events is updated with
    //     the retrieved events;
    //   */
    //   return {
    //     ...state,
    //     events: _.uniqBy([
    //       ...state.events,
    //       ...action.payload
    //     ], function(event) {
    //       return event.eID
    //     })
    //   };
    // case GET_EVENTS_BY_OWNER_FAIL:
    //   /*
    //     return an updated state object where the list of events is updated with
    //     the retrieved events;
    //   */
    //   return {
    //     ...state,
    //     error: action.error
    //   };
    // case GET_EVENTS_BY_TIME_SUCCESS:
    //   /*
    //     return an updated state object where the list of events is updated with
    //     the retrieved events;
    //   */
    //   return {
    //     ...state,
    //     events: _.uniqBy([
    //       ...state.events,
    //       ...action.payload
    //     ], function(event) {
    //       return event.eID
    //     })
    //   };
    // case GET_EVENTS_BY_TIME_FAIL:
    //   /*
    //     return an updated state object where the list of events is updated with
    //     the retrieved events;
    //   */
    //   return {
    //     ...state,
    //     error: action.error
    //     };
    case GET_EVENT_ATTENDEES_SUCCESS:
      /*
        return an updated state the list of attendees for a specified event is updated.
      */
      return {
        ...state,
        attendees: [
          ...action.payload
        ]
      }
    case GET_EVENT_ATTENDEES_FAIL:
      /*
        return an updated state the list of attendees for a specified event is updated.
      */
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
