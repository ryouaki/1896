export default function ({getState, dispatch}) {
    return (next) => (action) => {
        return next(action);
    }
}