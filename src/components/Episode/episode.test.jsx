/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from 'utils/test-utils';

import Episode from './Episode';
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
    render(<Episode />);
    const spinner = document.querySelector('.ant-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should render show component', async () => {
    render(<Episode />);
    const title = await screen.findByText(/Pilot/i);
    const backButton = screen.getByRole('button');
    const description = screen.getByText(/When the residents of Chester's Mill/i);
    const coverImage = screen.getByTestId('cover-image');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(coverImage).toHaveAttribute(
      'src',
      'http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg'
    );
    expect(backButton).toBeInTheDocument();
  });

  it('should redirect to show page', async () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    render(<Episode />, { history });

    const backButton = await screen.findByRole('button');
    fireEvent.click(backButton);
    expect(history.push).toHaveBeenCalledWith('/');
  });
});
