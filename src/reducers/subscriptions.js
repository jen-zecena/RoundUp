import _ from 'lodash';

import {
  ADD_SUBSCRIPTION,
  DELETE_SUBSCRIPTION,
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIBERS
} from '../actions/types/subscriptions';

/** subscriptions **/
/**
  @param state: the current state of the web application
  @param action: the action that was performed by the app/ user
  @return state: the new state.

  This function processes responses from subscription requests made by the client
  api, and updates the state with the user's subscription information accordingly.
*/
export default function subscriptionReducer(state={}, action) {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      /*
        return an updated state object with a new subscription object
        which has the same information as the newly added subscription.
      */
      return {
        ...state,
        [action.payload.followerID]: action.payload
      };
    case DELETE_SUBSCRIPTION:
      /*
        return an updated state object with the deleted subscription omitted
        from the list of retrieved subscriptions.
      */
      return _.omit(state, action.payload);
    case GET_SUBSCRIPTIONS:
      /*
        return an updated state object where the list of subscriptions for
        the current user updated with the retrieved list of subscriptions;
      */
      return {
        ...state,
        ...action.payload
      }
    case GET_SUBSCRIBERS:
      /*
        return an updated state object where the list of subscribers for
        the current user updated with the retrieved list of subscribers;
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
