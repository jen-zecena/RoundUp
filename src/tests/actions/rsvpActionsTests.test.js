import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';

import * as rsvpActions from '../../actions/rsvpActions';

import { API_REQUEST } from '../../actions/types/commonActionTypes';
import {
  ADD_RSVP_SUCCESS,
  ADD_RSVP_FAIL,
  DELETE_RSVP_SUCCESS,
  DELETE_RSVP_FAIL,
  GET_USER_RSVPS_SUCCESS,
  GET_USER_RSVPS_FAIL
} from '../../actions/types/rsvpActionTypes';

import {
  testEvents,
  testRsvp,
  testAttendees
} from '../testData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('creatingAddRsvpAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates ADD_RSVP_SUCCESS after successfully adding rsvp', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testRsvp,
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: ADD_RSVP_SUCCESS,
        payload: testRsvp
      }
    ];

    const store = mockStore({ rsvps: {}})
    return store.dispatch(rsvpActions.addRsvpAction('john@doe.edu', 'John Doe', 1, 'XXXXXXX')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingAddRsvpActionWithExistingRsvpDetails', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates ADD_RSVP_FAIL after failing to add rsvp', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: ADD_RSVP_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ rsvps: {}})
    return store.dispatch(rsvpActions.addRsvpAction('john@doe.edu', 'John Doe', 1, 'XXXXXXX')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingGetUserRsvpsAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_USER_RSVPS_SUCCESS after successfully retrieving user rsvps', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          { eID: 2, owner: 1, name: "John Doe", posterUrl: "testPosterUrl" },
          { eID: 3, owner: 2, name: "John Doe", posterUrl: "testPosterUrl" }
        ]
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_USER_RSVPS_SUCCESS,
        payload: [
          { eID: 2, owner: 1, name: "John Doe", posterUrl: "testPosterUrl" },
          { eID: 3, owner: 2, name: "John Doe", posterUrl: "testPosterUrl" }
        ]
      },
    ];

    const store = mockStore({ rsvps: {}})
    return store.dispatch(rsvpActions.getUserRsvpsAction('joe@doe.edu', 'active')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingGetNonexistingUserRsvpsAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_USER_RSVPS_FAIL after failing to retrieve user rsvps', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: GET_USER_RSVPS_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ rsvps: {}})
    return store.dispatch(rsvpActions.getUserRsvpsAction('joe@doe.edu', 'active')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingDeleteRsvpAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates DELETE_RSVP_SUCCESS after successfully deleting rsvp', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response:  testRsvp
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: DELETE_RSVP_SUCCESS,
        payload:  testRsvp
      },
    ];

    const store = mockStore({ rsvps: {}})
    return store.dispatch(rsvpActions.deleteRsvpAction('john@doe.edu', 1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingIllegalDeleteRsvpAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates DELETE_RSVP_FAIL after failing to delete rsvp', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: DELETE_RSVP_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ rsvps: {}})
    return store.dispatch(rsvpActions.deleteRsvpAction('john@doe.edu', null)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
