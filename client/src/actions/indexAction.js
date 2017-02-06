import { 
    ACTION_FETCHING, 
    ACTION_FETCH_OK, 
    ACTION_FETCH_ERROR 
} from './index';

export const indexActionFetch = () => {
    return {
        type: ACTION_FETCHING,
        payload: {}
    }
}

export const indexActionFetchError = () => {
    return {
        type: ACTION_FETCH_ERROR,
        payload: {}
    }
}

export const indexActionFetchResult = (data) => {
    return {
        type: ACTION_FETCH_OK,
        payload: data
    }
}

export const indexTestAction = () => {
    return (dispatch) => {
        dispatch(indexActionFetch());
        fetch(window.Hi1896.serverUrl+'/index').then((data) => {
            dispatch(indexActionFetchResult(data));
        }).catch(() => {
            dispatch(indexActionFetchError());
        });

    }
}