import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Episode from '../../Episode';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/episodes/:id" component={Episode} />
      </Switch>
    </section>
  );
};

export default Routes;
