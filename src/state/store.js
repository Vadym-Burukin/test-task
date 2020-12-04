import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { watchGetEpisode } from './rootSaga';

const initialStore = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchGetEpisode);

export default store;
