import { 
    ACTION_INDEX_INIT
} from '../actions';

const INITIAL_STATE = {
    indexMenu: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_INDEX_INIT:
            return { ...state, indexMenu: []};
        default:
            return state;
    }
}