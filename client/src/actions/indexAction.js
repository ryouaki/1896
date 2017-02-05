import { 
    ACTION_FETCHING, 
    ACTION_FETCH_OK, 
    ACTION_FETCH_ERROR 
} from './index';

export const indexActionInit = (actionType) => {
    return {
        type: actionType,
        data: {}
    }
}

export const indexTestAction = () => {
    return (dispatch) => {
        dispatch(indexActionInit(ACTION_FETCHING));
        fetch(window.Hi1896.serverUrl+'/index').then(() => {
            dispatch(indexActionInit(ACTION_FETCH_OK));
        }).catch(() => {
            dispatch(indexActionInit(ACTION_FETCH_ERROR));
        });

    }
}