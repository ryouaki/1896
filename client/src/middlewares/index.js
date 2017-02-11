function isPromise(val) {
    return val && typeof val.json === 'function';
}

export default function ({getState, dispatch}) {
    return (next) => (action) => {
        return isPromise(action.payload) ? action.payload.json().then(function (result) {
            return dispatch({ ...action, payload: {status: action.payload.status, data: result}});
        }, function (error) {
            return dispatch({ ...action, payload: {status: action.payload.status, error: error}});
        }) : next(action);
    }
}