/* eslint-disable import/prefer-default-export */
import { put } from 'redux-saga/effects';
import { getEpisodeStart, getEpisodeSuccess, getEpisodeFail } from '../actions/episode';

export function* getEpisodeSaga(action) {
  try {
    yield put(getEpisodeStart());
    const response = yield fetch(`http://api.tvmaze.com/episodes/${action.episodeId}`);
    const data = yield response.json();
    const payload = {
      id: data.id,
      title: data.name,
      description: data.summary,
      coverImage: data.image.medium,
    };
    yield put(getEpisodeSuccess(payload));
  } catch (error) {
    yield put(getEpisodeFail());
  }
}
