import { INDEX_ACTION_INIT } from '../actions';

const INITIAL_STATE = {
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case INDEX_ACTION_INIT:
            return { ...state };
        default:
            return state;
    }
}