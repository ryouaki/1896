import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import IndexView from './containers/IndexView';

export default (
    <Router path="/">
        <IndexRoute component={IndexView} />
    </Router>
);