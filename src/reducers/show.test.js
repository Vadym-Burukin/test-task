import reducer from './show';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  id: '',
  title: '',
  description: '',
  coverImage: null,
  episodes: [],
  loading: false,
};

describe('show reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should store the show data', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.GET_SHOW_SUCCESS,
        payload: {
          id: 'test',
          title: 'test',
          description: 'test',
          coverImage: 'http//:test',
          episodes: [],
        },
      })
    ).toEqual({
      id: 'test',
      title: 'test',
      description: 'test',
      coverImage: 'http//:test',
      episodes: [],
      loading: false,
    });
  });

  it('should set loading state to true', () => {
    expect(reducer(undefined, { type: actionTypes.GET_SHOW_START })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should set loading state to false if data fetching failed', () => {
    expect(
      reducer({ ...initialState, loading: true }, { type: actionTypes.GET_SHOW_FAIL })
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
