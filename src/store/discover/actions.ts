import {createAction} from 'redux-actions';
import {START} from '../common';

export const FETCH_FEED = 'FETCH_FEED';
export const LIKE_FEED = 'LIKE_FEED';

export const fetchFeedAction = createAction(FETCH_FEED + START);
export const likeFeedAction = createAction(LIKE_FEED);
