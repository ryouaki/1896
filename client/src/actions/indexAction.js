import {
    ACTION_FETCHING,
    ACTION_FETCH_OK,
    ACTION_FETCH_ERROR,
    ACTION_INDEX_INIT
} from './index';

const indexActionFetchResult = (data) => {
    return {
        type: ACTION_INDEX_INIT,
        payload: data
    }
}

const indexInitAction = () => {
    return (dispatch) => {
        dispatch({ type: ACTION_FETCHING });
        fetch(window.Hi1896.serverUrl + '/index').then((data) => {
            dispatch({ type: ACTION_FETCH_OK });
            dispatch(indexActionFetchResult(data));
        }).catch(() => {
            dispatch({ type: ACTION_FETCH_ERROR });
        });

    }
}

export default {
    indexInitAction: indexInitAction
}