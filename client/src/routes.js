import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import IndexView from './containers/IndexView';
import MainView from './containers/MainView';

export default (
    <Router path="/" component={MainView}>
        <IndexRoute component={IndexView} />
    </Router>
);