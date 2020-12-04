import { put } from 'redux-saga/effects';
import sanitizeHtml from 'sanitize-html';
import { baseUrl } from 'api/api-client';
import { getShowStart, getShowSuccess, getShowFail } from 'state/show/showActions';

export function* getShowSaga() {
  try {
    yield put(getShowStart());
    const response = yield fetch(`${baseUrl}/shows/6771?embed[]=episodes`);
    const data = yield response.json();
    const episodes = {};
    // eslint-disable-next-line no-underscore-dangle
    data._embedded.episodes.forEach((episode) => {
      episodes[episode.id] = {
        key: episode.id,
        title: episode.name,
        season: episode.season,
        airdate: episode.airdate,
      };
    });
    const payload = {
      id: data.id,
      title: data.name,
      description: sanitizeHtml(data.summary) || data.name,
      coverImage: data.image.medium,
      episodes,
    };
    yield put(getShowSuccess(payload));
  } catch (error) {
    yield put(getShowFail(error));
  }
}
