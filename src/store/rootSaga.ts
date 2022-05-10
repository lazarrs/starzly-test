import {all, fork} from 'redux-saga/effects';
import {Dispatch} from 'redux';

import discoverSaga from './discover/saga';

export default function* rootSaga(_: Dispatch<any>) {
  yield all([fork(discoverSaga)]);
}
