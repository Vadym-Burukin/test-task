/* eslint-disable import/prefer-default-export */
import { put } from 'redux-saga/effects';
import { getShowStart, getShowSuccess, getShowFail } from '../actions/show';

export function* getShowSaga() {
  try {
    yield put(getShowStart());
    const response = yield fetch('http://api.tvmaze.com/shows/6771?embed[]=episodes');
    const data = yield response.json();
    const episodes = {};
    // eslint-disable-next-line no-underscore-dangle
    data._embedded.episodes.forEach((episode) => {
      episodes[episode.id] = {
        id: episode.id,
        title: episode.name,
        description: episode.summary,
        coverImage: episode.image?.medium,
      };
    });
    const payload = {
      id: data.id,
      title: data.name,
      description: data.summary,
      coverImage: data.image.medium,
      episodes,
    };
    yield put(getShowSuccess(payload));
  } catch (error) {
    yield put(getShowFail());
  }
}
