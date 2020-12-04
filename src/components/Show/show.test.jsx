/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from 'utils/test-utils';

import Show from './Show';
import mockedResponse from './__mocks__/mocks';

describe('Show component', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch');
    const mockJsonPromise = Promise.resolve(mockedResponse);
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => mockJsonPromise,
    });
  });

  it('should show spinner while fetching data', () => {
    render(<Show />);
    const spinner = document.querySelector('.ant-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should render show component', async () => {
    render(<Show />);
    const title = await screen.findByText(/Under the Dome/i);
    const description = screen.getByText(/It is the story of a small town/i);
    const coverImage = screen.getByTestId('cover-image');
    const episodesTable = screen.getByTestId('episodes-table');
    const episode1 = screen.getByText(/Pilot/i);
    const episode2 = screen.getByText(/The Fire/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(coverImage).toHaveAttribute(
      'src',
      'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg'
    );
    expect(episodesTable).toBeInTheDocument();
    expect(episode1).toHaveAttribute('href', '/episodes/1');
    expect(episode2).toHaveAttribute('href', '/episodes/2');
  });

  it('should redirect to episode page', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    render(<Show />, { history });

    const episode1 = await screen.findByText(/Pilot/i);
    fireEvent.click(episode1);
    expect(history.push).toHaveBeenCalledWith('/episodes/1');
  });
});
