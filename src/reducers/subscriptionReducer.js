import _ from 'lodash';

import {
  ADD_SUBSCRIPTION_SUCCESS,
  ADD_SUBSCRIPTION_FAIL,
  DELETE_SUBSCRIPTION_SUCCESS,
  DELETE_SUBSCRIPTION_FAIL,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_FAIL,
  GET_SUBSCRIBERS_SUCCESS,
  GET_SUBSCRIBERS_FAIL
} from '../actions/types/subscriptionActionTypes';

const defaultSubscriptionState = {
  subscriptions: [],
  subscribers: []
}

/** subscriptions **/
/**
  @param state: the current state of the web application
  @param action: the action that was performed by the app/ user
  @return state: the new state.

  This function processes responses from subscription requests made by the client
  api, and updates the state with the user's subscription information accordingly.
*/
export default function subscriptionReducer(state=defaultSubscriptionState, action) {
  switch (action.type) {
    case ADD_SUBSCRIPTION_SUCCESS:
      /*
        return an updated state object with a new subscription object
        which has the same information as the newly added subscription.
      */
      return {
        ...state,
        subscriptions: _.uniqBy([
          ...state.subscriptions,
          action.payload
        ], function(subscription) {
          return subscription.followedID + ":" + subscription.followerID
        })
      }
    case ADD_SUBSCRIPTION_FAIL:
      return {
        ...state,
        error: action.error
      };
    case DELETE_SUBSCRIPTION_SUCCESS:
      /*
        return an updated state object with the deleted subscription omitted
        from the list of retrieved subscriptions.
      */
      const subscriptions = []
      for (var index in state.subscriptions) {
        var subscription = state.subscriptions[index];
        if (!(subscription.followerID === action.payload.followerID &&
          subscription.followedID === action.payload.followedID))
          {
          subscriptions.push(subscription)
        }
      }
      return {
        ...state,
        subscriptions: subscriptions
      };
    case DELETE_SUBSCRIPTION_FAIL:
      return {
        ...state,
        error: action.error
      };
    case GET_SUBSCRIPTIONS_SUCCESS:
      /*
        return an updated state object where the list of subscriptions for
        the current user updated with the retrieved list of subscriptions;
      */
      return {
        ...state,
        subscriptions: _.uniqBy([
          ...state.subscriptions,
          ...action.payload
        ], function(subscription) {
          return subscription.followedID + ":" + subscription.followerID
        })
      }
    case GET_SUBSCRIPTIONS_FAIL:
      return {
        ...state,
        error: action.error
      };
    case GET_SUBSCRIBERS_SUCCESS:
      /*
        return an updated state object where the list of subscribers for
        the current user updated with the retrieved list of subscribers;
      */
      return {
        ...state,
        subscribers: _.uniqBy([
          ...state.subscribers,
          ...action.payload
        ], function(subscriber) {
          return subscriber.uID + subscriber.firstName + subscriber.lastName
        })
      }
      // return {
      //   ...state,
      //   subscribers: [
      //     ...action.payload
      //   ]
      // }
    case GET_SUBSCRIBERS_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      /*
        return the state object as is.
      */
      return state;
  }
}
