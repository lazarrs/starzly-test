import {handleActions} from 'redux-actions';
import produce from 'immer';

import * as actions from './actions';
import {FAIL, START, SUCCESS} from '../common';
import {DiscoverState} from '../../types';

const initialState: DiscoverState = {
  loading: false,
  items: [],
  page: 1,
  per_page: 10,
  hasMore: false,
  error: undefined,
};

const reducer = handleActions<DiscoverState, any>(
  {
    [actions.FETCH_FEED + START]: state =>
      produce(state, draft => {
        draft.loading = true;
        draft.error = undefined;
      }),
    [actions.FETCH_FEED + SUCCESS]: (state, {payload}) =>
      produce(state, draft => {
        draft.loading = false;
        draft.items =
          payload.page === 1 ? payload.data : [...state.items, ...payload.data];
        draft.hasMore = payload.total > draft.items.length;
        draft.page = payload.page;
        draft.error = undefined;
      }),
    [actions.FETCH_FEED + FAIL]: (state, {payload}) =>
      produce(state, draft => {
        draft.loading = false;
        draft.error = payload;
      }),
    [actions.LIKE_FEED]: (state, {payload}) =>
      produce(state, draft => {
        const index = state.items.findIndex(item => item.id === payload);
        if (index > -1) {
          draft.items[index].likes = (state.items[index].likes || 0) + 1;
        }
      }),
  },
  initialState,
);

export default reducer;
