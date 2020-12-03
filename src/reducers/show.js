import * as actionTypes from '../actions/actionTypes';

const initialState = {
  id: '',
  title: '',
  description: '',
  coverImage: null,
  episodes: [],
  loading: false,
};

const getShowStart = (state) => ({
  ...state,
  loading: true,
});

const getShowSuccess = (state, action) => ({
  ...state,
  ...action.payload,
  loading: false,
});

const getShowFail = (state) => ({
  ...state,
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SHOW_START:
      return getShowStart(state);
    case actionTypes.GET_SHOW_SUCCESS:
      return getShowSuccess(state, action);
    case actionTypes.GET_SHOW_FAIL:
      return getShowFail(state);
    default:
      return state;
  }
};

export default reducer;
