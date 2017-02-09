import {
    ACTION_FETCHING,
    ACTION_FETCH_OK,
    ACTION_FETCH_ERROR
} from './index';

const indexActionFetchResult = (data) => {
    return {
        type: ACTION_FETCH_OK,
        payload: data
    }
}

const indexInitAction = () => {
    return (dispatch) => {
        dispatch({ type: ACTION_FETCHING });
        fetch(window.Hi1896.serverUrl + '/index').then((data) => {
            dispatch(indexActionFetchResult(data));
        }).catch(() => {
            dispatch({ type: ACTION_FETCH_ERROR });
        });

    }
}

export default {
    indexInitAction: indexInitAction
}