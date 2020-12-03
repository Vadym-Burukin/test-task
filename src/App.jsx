import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Show from './components/Show';
import Routes from './components/Routing/Routes';
import English from './lang/en-US.json';

import './App.scss';

function App() {
  return (
    <IntlProvider locale="en-US" messages={English}>
      <Layout>
        <div className="App">
          <BrowserRouter>
            <Route exact path="/" component={Show} />
            <Route component={Routes} />
          </BrowserRouter>
        </div>
      </Layout>
    </IntlProvider>
  );
}

export default App;
