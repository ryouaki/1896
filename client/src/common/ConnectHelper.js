import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export function createContainer( propsMap, actions, view) {
    return connect(propsMap, actions)(withRouter(view));
}