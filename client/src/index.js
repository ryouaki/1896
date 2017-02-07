import './common';
import './styles';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import mainMiddleWare from './middlewares';
import Reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import Routes from './routes';

let middleware = [ReduxThunk, promise, mainMiddleWare];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    Reducers,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>,
    document.getElementById('root')
);