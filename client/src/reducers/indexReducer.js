import { 
    ACTION_FETCHING, 
    ACTION_FETCH_OK, 
    ACTION_FETCH_ERROR 
} from '../actions';

const INITIAL_STATE = {
    isFetching: false,
    indexMenu: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_FETCHING:
            return { ...state, isFetching: true};
        case ACTION_FETCH_OK:
            return { ...state, isFetching: false, indexMenu: action.payload};
        case ACTION_FETCH_ERROR:
            return { ...state, isFetching: false, indexMenu: []};
        default:
            return state;
    }
}