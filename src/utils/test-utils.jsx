/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import messages from 'lang/en-US.json';
import store from 'state/store';

const customRender = (ui, { history = createMemoryHistory(), ...options } = {}) => {
  const AllTheProviders = ({ children }) => {
    return (
      <IntlProvider locale="en-US" messages={messages}>
        <Provider store={store}>
          <Router history={history}>{children}</Router>
        </Provider>
      </IntlProvider>
    );
  };

  render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
