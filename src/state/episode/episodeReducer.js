import * as actionTypes from 'state/actionTypes';

const initialState = {
  id: '',
  title: '',
  description: '',
  coverImage: null,
  loading: false,
  error: null,
};

const getEpisodeStart = (state) => ({
  ...state,
  loading: true,
  error: null,
});

const getEpisodeSuccess = (state, action) => ({
  ...state,
  ...action.payload,
  loading: false,
});

const getEpisodeFail = (state, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

const clearEpisodeData = () => ({
  ...initialState,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_EPISODE_START:
      return getEpisodeStart(state);
    case actionTypes.GET_EPISODE_SUCCESS:
      return getEpisodeSuccess(state, action);
    case actionTypes.GET_EPISODE_FAIL:
      return getEpisodeFail(state, action);
    case actionTypes.CLEAR_EPISODE_DATA:
      return clearEpisodeData();
    default:
      return state;
  }
};

export default reducer;
