import reducer from '../showReducer';
import * as actionTypes from '../../actionTypes';

const initialState = {
  id: '',
  title: '',
  description: '',
  coverImage: null,
  episodes: [],
  loading: false,
  error: null,
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
          error: null,
        },
      })
    ).toEqual({
      id: 'test',
      title: 'test',
      description: 'test',
      coverImage: 'http//:test',
      episodes: [],
      loading: false,
      error: null,
    });
  });

  it('should set loading state to true', () => {
    expect(reducer(undefined, { type: actionTypes.GET_SHOW_START })).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it('should set loading state to false if data fetching failed', () => {
    expect(
      reducer(
        { ...initialState, loading: true },
        { type: actionTypes.GET_SHOW_FAIL, error: { message: 'test' } }
      )
    ).toEqual({
      ...initialState,
      loading: false,
      error: { message: 'test' },
    });
  });
});
