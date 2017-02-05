import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import MainView from './containers/MainView';

export default (
    <Router path="/">
        <IndexRoute component={MainView} />
        <Route path="/index" component={MainView} />
    </Router>
);