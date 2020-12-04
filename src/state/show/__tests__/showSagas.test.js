import { runSaga } from 'redux-saga';
import { waitFor } from '@testing-library/react';

import { mockedResponse, payload } from '../__mocks__/showMocks';
import { getShowSaga } from '../showSagas';

describe('Show saga', () => {
  it('should call fetch and dispatch start and success action', async () => {
    jest.spyOn(window, 'fetch');
    const request = window.fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockedResponse),
    });

    const dispatched = [];

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getShowSaga
    );

    expect(request).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(dispatched).toEqual([{ type: 'GET_SHOW_START' }, payload]));
  });
});
