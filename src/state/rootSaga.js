import { takeEvery } from 'redux-saga/effects';
import * as actionsTypes from 'state/actionTypes';

import { getEpisodeSaga } from './episode/episodeSagas';
import { getShowSaga } from './show/showSagas';

export function* watchGetEpisode() {
  yield takeEvery(actionsTypes.GET_EPISODE_INIT, getEpisodeSaga);
  yield takeEvery(actionsTypes.GET_SHOW_INIT, getShowSaga);
}
