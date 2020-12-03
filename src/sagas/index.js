/* eslint-disable import/prefer-default-export */
import { takeEvery } from 'redux-saga/effects';
import * as actionsTypes from '../actions/actionTypes';

import { getEpisodeSaga } from './episode';
import { getShowSaga } from './show';

export function* watchGetEpisode() {
  yield takeEvery(actionsTypes.GET_EPISODE_INIT, getEpisodeSaga);
  yield takeEvery(actionsTypes.GET_SHOW_INIT, getShowSaga);
}
