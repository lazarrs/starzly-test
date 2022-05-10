import {createSelector} from 'reselect';
import {RootState} from '..';

const getDiscoverState = ({discover}: RootState) => discover;

export const feedSelector = createSelector(
  [getDiscoverState],
  discover => discover,
);
