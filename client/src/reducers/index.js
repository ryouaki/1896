import { combineReducers } from 'redux';

import MainReducer from './mainReducer';
import IndexReducer from './indexReducer';

const rootReducer = combineReducers({
    main: MainReducer,
    index: IndexReducer
});

export default rootReducer;