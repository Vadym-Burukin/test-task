/* eslint-disable import/no-unresolved */
import { put } from 'redux-saga/effects';
import sanitizeHtml from 'sanitize-html';
import { baseUrl } from 'api/api-client';

import { getEpisodeStart, getEpisodeSuccess, getEpisodeFail } from './episodeActions';

export function* getEpisodeSaga(action) {
  try {
    yield put(getEpisodeStart());
    const response = yield fetch(`${baseUrl}/episodes/${action.episodeId}`);
    const data = yield response.json();
    const payload = {
      id: data.id,
      title: data.name,
      description: sanitizeHtml(data.summary) || data.name,
      coverImage: data.image?.medium || '/images/powerPuffGirls.jpg',
    };
    yield put(getEpisodeSuccess(payload));
  } catch (error) {
    yield put(getEpisodeFail(error));
  }
}
