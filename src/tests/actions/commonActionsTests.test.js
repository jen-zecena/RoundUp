import * as commonActions from '../../actions/commonActions';
import { API_REQUEST } from '../../actions/types/commonActionTypes';

test("testing apiRequest function", () => {
    expect(commonActions.apiRequest()).toEqual({type: API_REQUEST});
});
