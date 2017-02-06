import { 
    ACTION_FETCHING, 
    ACTION_FETCH_OK, 
    ACTION_FETCH_ERROR 
} from './index';

const indexActionFetch = () => {
    return {
        type: ACTION_FETCHING,
        payload: {}
    }
}

const indexActionFetchError = () => {
    return {
        type: ACTION_FETCH_ERROR,
        payload: {}
    }
}

const indexActionFetchResult = (data) => {
    return {
        type: ACTION_FETCH_OK,
        payload: data
    }
}

const indexInitAction = () => {
    return (dispatch) => {
        dispatch(indexActionFetch());
        fetch(window.Hi1896.serverUrl+'/index').then((data) => {
            dispatch(indexActionFetchResult(data));
        }).catch(() => {
            dispatch(indexActionFetchError());
        });

    }
}

export default {
    indexInitAction: indexInitAction
}