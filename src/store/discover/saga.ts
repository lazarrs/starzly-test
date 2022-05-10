import {all, fork, put, select, take} from 'redux-saga/effects';

import {FAIL, START, SUCCESS} from '../common';
import * as actions from './actions';
import {mapError} from '../../helper';
import {AxiosInstance} from '../../services';
import {feedSelector} from './selector';
import {RootState} from '..';

function* fetchFeed() {
  while (true) {
    const {payload = {}} = yield take(actions.FETCH_FEED + START);
    const state: RootState = yield select();
    const {per_page} = feedSelector(state);
    const {page = 1} = payload;
    try {
      const {data} = yield AxiosInstance.get(
        `/featured-videos?page=${page}&per_page=${per_page}&app=1&new=1`,
      );
      yield put({type: actions.FETCH_FEED + SUCCESS, payload: {...data, page}});
    } catch (error) {
      yield put({type: actions.FETCH_FEED + FAIL, payload: mapError(error)});
    }
  }
}

export default function* () {
  yield all([fork(fetchFeed)]);
}
