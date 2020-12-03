import * as actionTypes from '../actions/actionTypes';

const initialState = {
  id: '',
  title: '',
  description: '',
  coverImage: null,
  loading: false,
};

const getEpisodeStart = (state) => ({
  ...state,
  loading: true,
});

const getEpisodeSuccess = (state, action) => ({
  ...state,
  ...action.payload,
  loading: false,
});

const getEpisodeFail = (state) => ({
  ...state,
  loading: false,
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
      return getEpisodeFail(state);
    case actionTypes.CLEAR_EPISODE_DATA:
      return clearEpisodeData();
    default:
      return state;
  }
};

export default reducer;
