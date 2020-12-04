import * as actionTypes from 'state/actionTypes';

const initialState = {
  id: '',
  title: '',
  description: '',
  coverImage: null,
  episodes: [],
  loading: false,
  error: null,
};

const getShowStart = (state) => ({
  ...state,
  loading: true,
  error: null,
});

const getShowSuccess = (state, action) => ({
  ...state,
  ...action.payload,
  loading: false,
});

const getShowFail = (state, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SHOW_START:
      return getShowStart(state);
    case actionTypes.GET_SHOW_SUCCESS:
      return getShowSuccess(state, action);
    case actionTypes.GET_SHOW_FAIL:
      return getShowFail(state, action);
    default:
      return state;
  }
};

export default reducer;
