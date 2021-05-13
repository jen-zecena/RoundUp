import {
  ADD_RSVP_SUCCESS,
  ADD_RSVP_FAIL,
  DELETE_RSVP_SUCCESS,
  DELETE_RSVP_FAIL,
  GET_USER_RSVPS_SUCCESS,
  GET_USER_RSVPS_FAIL,
  GET_ATTENDEES_SUCCESS,
  GET_ATTENDEES_FAIL
} from '../../actions/types/rsvpActionTypes';

import rsvpReducer from '../../reducers/rsvpReducer';
import {
  error,
  testRsvp,
  testRsvps,
  testExtraRsvps,
  testRsvpsWithExtraRsvps
} from '../testData';

describe('reducingSuccessfulAddRsvpAction', () => {
  const rsvps = {
    rsvps: [
      ...testRsvps.rsvps,
      testRsvp
    ]};

  it('should handle a ADD_RSVP_SUCCESS action', () => {
    expect(
      rsvpReducer(undefined, { type: ADD_RSVP_SUCCESS, payload: testRsvp })
    ).toEqual({
      rsvps: [testRsvp]
    })

    expect(
      rsvpReducer(testRsvps, { type: ADD_RSVP_SUCCESS, payload: testRsvp })
    ).toEqual(rsvps)
  })
})

describe('reducingFailedAddRsvpAction', () => {
  it('should handle ADD_RSVP_FAIL action', () => {
    expect(
      rsvpReducer(undefined, { type: ADD_RSVP_FAIL, error: error})
    ).toEqual({
      rsvps:[],
      error: error
    })

    expect(
      rsvpReducer(testRsvps, { type: ADD_RSVP_FAIL, error: error})
    ).toEqual({
      rsvps: testRsvps.rsvps,
      error: error
    })
  })
})



describe('reducingSuccessfulGetUserRsvpsAction', () => {
  it('should handle a GET_USER_RSVPS_SUCCESS action', () => {
    expect(
      rsvpReducer(undefined, { type: GET_USER_RSVPS_SUCCESS, payload: testRsvps.rsvps })
    ).toEqual(testRsvps)

    expect(
      rsvpReducer(testRsvps, { type: GET_USER_RSVPS_SUCCESS, payload: testExtraRsvps.rsvps })
    ).toEqual(testRsvpsWithExtraRsvps)
  })
})

describe('reducingFailedGetUserRsvpsAction', () => {
  it('should handle GET_USER_RSVPS_FAIL action', () => {
    expect(
      rsvpReducer(undefined, { type: GET_USER_RSVPS_FAIL, error: error})
    ).toEqual({
      rsvps:[],
      error: error
    })

    expect(
      rsvpReducer(testRsvps, { type: GET_USER_RSVPS_FAIL, error: error})
    ).toEqual({
      rsvps: testRsvps.rsvps,
      error: error
    })
  })
})

describe('reducingSuccessfulDeleteRsvpAction', () => {
  it('should handle a DELETE_RSVP_SUCCESS action', () => {
    expect(
      rsvpReducer(undefined, { type: DELETE_RSVP_SUCCESS, payload: testRsvp })
    ).toEqual({
      rsvps: []
    })

    expect(
      rsvpReducer(
        {
          rsvps: [...testRsvps.rsvps, testRsvp]
        },
        {
          type: DELETE_RSVP_SUCCESS,
          payload: testRsvp
        })
    ).toEqual(testRsvps)
  })

})

describe('reducingFailedDeleteRsvpAction', () => {
  it('should handle DELETE_RSVP_FAIL action', () => {
    expect(
      rsvpReducer(undefined, { type: DELETE_RSVP_FAIL, error: error})
    ).toEqual({
      rsvps:[],
      error: error
    })

    expect(
      rsvpReducer(testRsvps, { type: DELETE_RSVP_FAIL, error: error})
    ).toEqual({
      rsvps: testRsvps.rsvps,
      error: error
    })
  })
})
