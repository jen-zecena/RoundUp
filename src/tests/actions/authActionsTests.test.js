import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';

import * as authActions from '../../actions/authActions';

import { API_REQUEST } from '../../actions/types/commonActionTypes';
import {
  LOADING_USER,
  LOADING_USER_SUCCESS,
  LOADING_USER_FAIL,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from '../../actions/types/authActionTypes';

import {
  testUser
} from '../testData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('creatingLoadUserAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates LOADING_USER_SUCCESS after successfully loading user', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testUser
      });
    });

    const expectedActions = [
      { type: LOADING_USER },
      { type: API_REQUEST },
      { type: LOADING_USER_SUCCESS,
        payload: testUser
      }
    ];

    const store = mockStore({ auth: {token: 'XXXXXXX', user: {}} })
    return store.dispatch(authActions.loadUserAction()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingLoadUserActionWithIncorrentParameters', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates LOADING_USER_FAIL after failing to load user', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: LOADING_USER },
      { type: API_REQUEST },
      { type: LOADING_USER_FAIL,
        error: 'Error message'
      },
    ];

    const store = mockStore({ auth: {token: 'YYYYYYYY', user: {}} })
    return store.dispatch(authActions.loadUserAction()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingRegisterUserAction', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates REGISTRATION_SUCCESS after successfully registering user', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testUser
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: REGISTRATION_SUCCESS,
        payload: testUser
      },
    ];

    const store = mockStore({ auth: {user: {}} })
    return store.dispatch(authActions.registerUserAction({ firstName: 'John', lastName: 'Doe', email: 'john@doe.edu', password: 'xxxxxxxx', campus: 'POM' })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingRegisterActionWithExistingUser', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates REGISTRATION_FAIL after failing to register user', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    // const expectedActions = [
    //   { type: API_REQUEST },
    //   { type: REGISTRATION_FAIL,
    //     error: 'Error message'
    //   },
    // ];
    const expectedActions = [
      { type: API_REQUEST },
      { type: REGISTRATION_FAIL,
        error: "Error message"},
      {
        error: true,
        meta: {
          form: "registerForm"
        },
        payload: "Error message",
        type: "@@redux-form/STOP_SUBMIT"
      },
    ];

    const store = mockStore({ auth: { user: {}} })
    return store.dispatch(authActions.registerUserAction({ firstName: 'John', lastName: 'Doe', email: 'john@doe.edu', password: 'xxxxxxxx', campus: 'POM' })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingLoginUserActionWithExistingUser', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates LOGIN_SUCCESS after successfully logging in user', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testUser
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: LOGIN_SUCCESS,
        payload: testUser
      },
    ];

    const store = mockStore({ auth: { user: {}} })
    return store.dispatch(authActions.loginUserAction({ email: 'joe@doe.edu', password: 'xxxxxxxx'})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingLoginActionWithNonexistentUser', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates LOGIN_FAIL after failing to log in user', async  () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        message: 'Error message',
      });
    });

    const expectedActions = [
      { type: API_REQUEST },
      { type: LOGIN_FAIL,
        error: 'Error message'
      },
      {
        error: true,
        meta: {
          form: "loginForm"
        },
        payload: "Error message",
        type: "@@redux-form/STOP_SUBMIT"
      },
    ];

    const store = mockStore({ auth: { user: {}} })
    return store.dispatch(authActions.loginUserAction( {email: 'joe@doe.edu', password: 'xxxxxxxx'})).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('cratingLogoutUserAction', () => {
  it('creates LOGOUT_SUCCESS after successfully logging out user', async  () => {
    const expectedActions = [
      { type: LOGOUT_SUCCESS },
    ];

    const store = mockStore({ auth: {token: 'XXXXXXX', user: {}} })
    return store.dispatch(authActions.logoutUserAction()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('creatingLogoutActionWithunauthenticatedUser', () => {
  it('creates LOGOUT_FAIL after failing to logout user', async  () => {
    const expectedActions = [
      { type: LOGOUT_FAIL },
    ];

    const store = mockStore({ auth: {user: {}} })
    return store.dispatch(authActions.logoutUserAction()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
