import {
  ADD_SUBSCRIPTION_SUCCESS,
  ADD_SUBSCRIPTION_FAIL,
  DELETE_SUBSCRIPTION_SUCCESS,
  DELETE_SUBSCRIPTION_FAIL,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_FAIL,
  GET_SUBSCRIBERS_SUCCESS,
  GET_SUBSCRIBERS_FAIL
} from '../../actions/types/subscriptionActionTypes';

import {
  testSubscription,
  testSubscriptions,
  testSubscribers,
  error,
  extraSubscription,
  extraSubscriber
} from  '../testData';

import subscriptionReducer from '../../reducers/subscriptionReducer';

const defaultSubscriptionState = {
  subscriptions: [],
  subscribers: []
}

const testSubscriptionState = {
  subscriptions: [
    { followerID: 1, followedID: 2 },
    { followerID: 1, followedID: 3 },
    { followerID: 1, followedID: 4 }
  ],
  subscribers: []
}

const testSubscriptionStateWithExtra = {
  subscriptions: [
    { followerID: 1, followedID: 2 },
    { followerID: 1, followedID: 3 },
    { followerID: 1, followedID: 4 },
    extraSubscription
  ],
  subscribers: []
}

const defaultSubscriptionStateWithError = {
  subscriptions: [],
  subscribers: [],
  error: error
}
const testSubscriptionStateWithError = {
  subscriptions: [
    { followerID: 1, followedID: 2 },
    { followerID: 1, followedID: 3 },
    { followerID: 1, followedID: 4 }
  ],
  subscribers: [],
  error: error
}

const testSubscribersState = {
  subscriptions: [],
  subscribers: [
    { uID: 2, firstName: "John", lastName: "Doe" },
    { uID: 3, firstName: "Jane", lastName: "Doe" }
  ]
}

const testSubscribersStateWithExtra = {
  subscriptions: [],
  subscribers: [
    { uID: 2, firstName: "John", lastName: "Doe" },
    { uID: 3, firstName: "Jane", lastName: "Doe" },
    { uID: 1, firstName: "Jane", lastName: "Doom" }
  ]
}

describe('reducingAddRsvpAction', () => {
  it('should handle a ADD_SUBSCRIPTION_SUCCESS action', () => {
    const expectedSubscriptions ={
      subscriptions: [
        testSubscription
      ],
      subscribers: []
    }

    expect(
      subscriptionReducer(undefined, { type: ADD_SUBSCRIPTION_SUCCESS, payload: testSubscription })
    ).toEqual(expectedSubscriptions)

    expect(
      subscriptionReducer(testSubscriptionState, { type: ADD_SUBSCRIPTION_SUCCESS, payload: testSubscription })
    ).toEqual(testSubscriptionState)

    expect(
      subscriptionReducer(testSubscriptionState, { type: ADD_SUBSCRIPTION_SUCCESS, payload: extraSubscription })
    ).toEqual(testSubscriptionStateWithExtra)
  })

  it('should handle ADD_SUBSCRIPTION_FAIL action', () => {
    expect(
      subscriptionReducer(undefined, { type: ADD_SUBSCRIPTION_FAIL, error: error})
    ).toEqual(defaultSubscriptionStateWithError)

    expect(
      subscriptionReducer(testSubscriptionState, { type: ADD_SUBSCRIPTION_FAIL, error: error})
    ).toEqual(testSubscriptionStateWithError)
  })
})

describe('reducingDeleteRsvpAction', () => {
  it('should handle a DELETE_SUBSCRIPTION_SUCCESS action', () => {
    const expectedSubscriptions = {
      subscriptions: [
        { followerID: 1, followedID: 3 },
        { followerID: 1, followedID: 4 }
      ],
      subscribers: []
    }

    expect(
      subscriptionReducer(undefined, { type: DELETE_SUBSCRIPTION_SUCCESS, payload: testSubscription })
    ).toEqual(defaultSubscriptionState)

    expect(
      subscriptionReducer(testSubscriptionState, { type: DELETE_SUBSCRIPTION_SUCCESS, payload: testSubscription })
    ).toEqual(expectedSubscriptions)
  })

  it('should handle DELETE_SUBSCRIPTION_FAIL action', () => {
    expect(
      subscriptionReducer(undefined, { type: DELETE_SUBSCRIPTION_FAIL, error: error})
    ).toEqual(defaultSubscriptionStateWithError)

    expect(
      subscriptionReducer(testSubscriptionState, { type: DELETE_SUBSCRIPTION_FAIL, error: error})
    ).toEqual(testSubscriptionStateWithError)
  })
})

describe('reducingSubscriptionsAction', () => {
  it('should handle a GET_SUBSCRIPTIONS_SUCCESS action', () => {
    expect(
      subscriptionReducer(undefined, { type: GET_SUBSCRIPTIONS_SUCCESS, payload: testSubscriptions })
    ).toEqual(testSubscriptionState)

    expect(
      subscriptionReducer(testSubscriptionState, { type: GET_SUBSCRIPTIONS_SUCCESS, payload: [] })
    ).toEqual(testSubscriptionState)

    expect(
      subscriptionReducer(testSubscriptionState, { type: GET_SUBSCRIPTIONS_SUCCESS, payload: [extraSubscription] })
    ).toEqual(testSubscriptionStateWithExtra)
  })

  it('should handle GET_SUBSCRIPTIONS_FAIL action', () => {
    expect(
      subscriptionReducer(undefined, { type: GET_SUBSCRIPTIONS_FAIL, error: error})
    ).toEqual(defaultSubscriptionStateWithError)

    expect(
      subscriptionReducer(testSubscriptionState, { type: GET_SUBSCRIPTIONS_FAIL, error: error})
    ).toEqual(testSubscriptionStateWithError)
  })
})

describe('reducingGetSubscribersAction', () => {
  it('should handle a GET_SUBSCRIBERS_SUCCESS action', () => {
    expect(
      subscriptionReducer(undefined, { type: GET_SUBSCRIBERS_SUCCESS, payload: testSubscribers })
    ).toEqual(testSubscribersState)

    expect(
      subscriptionReducer(testSubscribersState, { type: GET_SUBSCRIBERS_SUCCESS, payload: [] })
    ).toEqual(testSubscribersState)

    expect(
      subscriptionReducer(testSubscribersState, { type: GET_SUBSCRIBERS_SUCCESS, payload: testSubscribers })
    ).toEqual(testSubscribersState)

    expect(
      subscriptionReducer(testSubscribersState, { type: GET_SUBSCRIBERS_SUCCESS, payload: [extraSubscriber] })
    ).toEqual(testSubscribersStateWithExtra)
  })


  it('should handle GET_SUBSCRIBERS_FAIL action', () => {
    expect(
      subscriptionReducer(undefined, { type: GET_SUBSCRIBERS_FAIL, error: error})
    ).toEqual(defaultSubscriptionStateWithError)

    expect(
      subscriptionReducer(testSubscriptionState, { type: GET_SUBSCRIBERS_FAIL, error: error})
    ).toEqual(testSubscriptionStateWithError)
  })
})
