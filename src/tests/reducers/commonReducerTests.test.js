import authReducer from '../../reducers/authReducer';

import {
  API_REQUEST
} from '../../actions/types/commonActionTypes';

import {
  loadingUserState
} from '../testData';

import {
  defaultAuthState
} from '../../reducers/authReducer';

describe('reducingApiRequestAction', () => {
  it('should return the default auth state', () => {
    expect(authReducer(undefined, {})).toEqual(defaultAuthState)
  })

  it('should return the default auth state', () => {
    expect(authReducer(loadingUserState, {})).toEqual(loadingUserState)
  })
})
