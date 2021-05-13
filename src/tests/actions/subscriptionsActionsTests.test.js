import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as subscriptionActions from '../../actions/subscriptionActions';

import { API_REQUEST } from '../../actions/types/commonActionTypes';
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
  testSubscribers,
  testSubscriptions
} from '../testData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('creatingAddSubscriptionAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates ADD_SUBSCRIPTION_SUCCESS after successfully adding subscription', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testSubscription
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: ADD_SUBSCRIPTION_SUCCESS,
        payload: testSubscription
      },
    ];

    const store = mockStore({ subscriptions: {}})
    return store.dispatch(subscriptionActions.addSubscriptionAction(1, 2)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingAddExistingSubscriptionAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates ADD_SUBSCRIPTION_FAIL after failing to add subscription', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: ADD_SUBSCRIPTION_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ subscriptions: {}})
    return store.dispatch(subscriptionActions.addSubscriptionAction(1, 2)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingDeleteSubscriptionAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates DELETE_SUBSCRIPTION_SUCCESS after successfully deleting subscription', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testSubscription,
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: DELETE_SUBSCRIPTION_SUCCESS,
        payload: testSubscription
      },
    ];

    const store = mockStore({ subscriptions: {}})
    return store.dispatch(subscriptionActions.deleteSubscriptionAction(1, 2)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingIllegalDeleteSubscriptionAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });


  it('creates DELETE_SUBSCRIPTION_FAIL after failing to delete subscription', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: DELETE_SUBSCRIPTION_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ subscriptions: {}})
    return store.dispatch(subscriptionActions.deleteSubscriptionAction(1, 1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingGetSubscribersAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_SUBSCRIBERS_SUCCESS after successfully fetching user subscribers', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testSubscribers
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_SUBSCRIBERS_SUCCESS,
        payload: testSubscribers
      },
    ];

    const store = mockStore({ subscriptions: {}})
    return store.dispatch(subscriptionActions.getSubscribersAction(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingIllegalGetSubscribersAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_SUBSCRIBERS_FAIL after failing to retrieve user subscribers', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_SUBSCRIBERS_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ subscriptions: {}})
    return store.dispatch(subscriptionActions.getSubscribersAction(null)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingGetSubscriptionsAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_SUBSCRIPTIONS_SUCCESS after successfully  retrieving user subscriptions', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testSubscriptions
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_SUBSCRIPTIONS_SUCCESS,
        payload: testSubscriptions
      },
    ];

    const store = mockStore({ subscriptions: {}})
    return store.dispatch(subscriptionActions.getSubscriptionsAction(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingIllegalGetSubscriptionsAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });


  it('creates GET_SUBSCRIPTIONS_FAIL after failing to retrieve user subscriptions', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_SUBSCRIPTIONS_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ subscriptions: {}})
    return store.dispatch(subscriptionActions.getSubscriptionsAction(null)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
