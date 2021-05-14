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

import authReducer from '../../reducers/authReducer';
import {
  testUser,
  loadingUserState,
  loadedUserState,
  loggedOutUserState,
  error,
  defaultAuthStateWithError,
  loadingUserStateWithError
} from '../testData';

import {
  defaultAuthState
} from '../../reducers/authReducer';



describe('reducingSuccessfulLoadUserAction', () => {
  it('should return the default auth state', () => {
    expect(authReducer(undefined, {})).toEqual(defaultAuthState)
  })

  it('should handle a LOADING_USER action', () => {
    expect(
      authReducer(undefined, { type: LOADING_USER })
    ).toEqual(loadingUserState)

    expect(
      authReducer( loadingUserState, { type: LOADING_USER })
    ).toEqual(loadingUserState)
  })

  it('should handle LOADING_USER_SUCCESS action', () => {
    expect(
      authReducer(undefined, { type: LOADING_USER_SUCCESS, payload: testUser })
    ).toEqual(loadedUserState)

    expect(
      authReducer( loadingUserState, { type: LOADING_USER_SUCCESS, payload: testUser })
    ).toEqual(loadedUserState)
  })
})

describe('reducingFailedLoadUserAction', () => {
  it('should handle LOADING_USER_FAIL action', () => {
    expect(
      authReducer(undefined, { type: LOADING_USER_FAIL, error: error})
    ).toEqual(defaultAuthStateWithError)

    expect(
      authReducer(loadingUserState, { type: LOADING_USER_FAIL, error: error})
    ).toEqual(loadingUserStateWithError)
  })
})

describe('reducingSuccessfulRegistrationAction', () => {
  it('should handle a REGISTRATION_SUCCESS action', () => {
    expect(
      authReducer(undefined, { type: REGISTRATION_SUCCESS, payload: testUser })
    ).toEqual(loadedUserState)

    expect(
      authReducer( loadingUserState, { type: REGISTRATION_SUCCESS, payload: testUser })
    ).toEqual(loadedUserState)
  })
})

describe('reducingFailedRegistrationAction', () => {
  it('should handle REGISTRATION_FAIL action', () => {
    expect(
      authReducer(undefined, { type: REGISTRATION_FAIL, error: error })
    ).toEqual(defaultAuthStateWithError)

    expect(
      authReducer( loadingUserState, { type: REGISTRATION_FAIL, error: error })
    ).toEqual(loadingUserStateWithError)
  })
})

describe('reducingSuccessfulLoginAction', () => {
  it('should handle a LOGIN_SUCCESS action', () => {
    expect(
      authReducer(undefined, { type: LOGIN_SUCCESS, payload: testUser })
    ).toEqual(loadedUserState)

    expect(
      authReducer( loadingUserState, { type: LOGIN_SUCCESS, payload: testUser })
    ).toEqual(loadedUserState)
  })
})

describe('reducingFailedLoginAction', () => {
  it('should handle LOGIN_FAIL action', () => {
    expect(
      authReducer(undefined, { type: LOGIN_FAIL, error: error })
    ).toEqual(defaultAuthStateWithError)

    expect(
      authReducer( loadingUserState, { type: LOGIN_FAIL, error: error })
    ).toEqual(loadingUserStateWithError)
  })

})

describe('reducingSuccessfulLogoutAction', () => {
  it('should handle a LOGOUT_SUCCESS action', () => {
    expect(
      authReducer(undefined, { type: LOGOUT_SUCCESS, payload: testUser })
    ).toEqual(defaultAuthState)

    expect(
      authReducer( loadingUserState, { type: LOGOUT_SUCCESS, payload: testUser })
    ).toEqual(defaultAuthState)
  })
})

describe('reducingFailedLogoutAction', () => {
  it('should handle LOGIN_FAIL action', () => {
    expect(
      authReducer(undefined, { type: LOGOUT_FAIL, error: error })
    ).toEqual(defaultAuthStateWithError)

    expect(
      authReducer( loadingUserState, { type: LOGOUT_FAIL, error: error })
    ).toEqual(loadingUserStateWithError)
  })

})
