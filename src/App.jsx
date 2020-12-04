import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import Show from './components/Show';
import Routes from './components/Routing/Routes';
import messages from './lang/en-US.json';
import store from './store';

import './App.scss';

function App() {
  return (
    <IntlProvider locale="en-US" messages={messages}>
      <Provider store={store}>
        <Layout>
          <div className="App">
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
