import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Alert from 'components/Layout/Alert';
import Layout from 'components/Layout';
import Show from 'components/Show';
import Routes from 'components/Routing/Routes';
import messages from 'lang/en-US.json';
import store from 'state/store';

import './App.scss';

function App() {
  return (
    <IntlProvider locale="en-US" messages={messages}>
      <Provider store={store}>
        <Layout>
          <div className="App">
            <Alert />
            <BrowserRouter>
              <Route exact path="/" component={Show} />
              <Route component={Routes} />
            </BrowserRouter>
          </div>
        </Layout>
      </Provider>
    </IntlProvider>
  );
}

export default App;
