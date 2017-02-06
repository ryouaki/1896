import { connect } from 'react-redux';

import IndexView from './index/IndexView';
import actions from '../actions/indexAction';

function mapStateToProps(state) {
    return {
        isFetching: state.index.isFetching,
        indexMenu: state.index.indexMenu
    }
}

export default connect(mapStateToProps, actions)(IndexView);