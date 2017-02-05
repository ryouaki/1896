import { combineReducers } from 'redux';

import IndexReducer from './indexReducer';

const rootReducer = combineReducers({
    index: IndexReducer
});

export default rootReducer;