import { INDEX_ACTION_INIT } from './index';

export const indexActionInit = () => {
    return {
        type: INDEX_ACTION_INIT,
        data: {}
    }
}

export const indexTestAction = () => {
    return (dispatch) => {
        dispatch(indexActionInit());
    }
}