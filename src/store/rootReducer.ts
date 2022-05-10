import {combineReducers} from 'redux';

import discoverReducer from './discover/reducer';

export default combineReducers({
  discover: discoverReducer,
});
