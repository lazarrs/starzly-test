import {
  createStore,
  applyMiddleware,
  compose,
  Reducer,
  CombinedState,
  AnyAction,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import {DiscoverState} from '../types';

declare const window: any;

type RootReducer = Reducer<
  CombinedState<{
    discover: DiscoverState;
  }>,
  AnyAction
>;

export type RootState = ReturnType<RootReducer>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

if (__DEV__) {
  window.store = store;
}

sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
