import {
  GET_EPISODE_INIT,
  GET_EPISODE_START,
  GET_EPISODE_SUCCESS,
  GET_EPISODE_FAIL,
  CLEAR_EPISODE_DATA,
} from '../actionTypes';

export const getEpisodeInit = (episodeId) => ({
  type: GET_EPISODE_INIT,
  episodeId,
});

export const getEpisodeStart = () => ({
  type: GET_EPISODE_START,
});

export const getEpisodeSuccess = (payload) => ({
  type: GET_EPISODE_SUCCESS,
  payload,
});

export const getEpisodeFail = (error) => ({
  type: GET_EPISODE_FAIL,
  error,
});

export const clearEpisodeData = () => ({
  type: CLEAR_EPISODE_DATA,
});
