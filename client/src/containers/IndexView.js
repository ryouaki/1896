import { connect } from 'react-redux';

import IndexView from './index/IndexView';

function mapStateToProps(state) {
    return {
        isFetching: state.index.isFetching,
        indexMenu: state.index.indexMenu
    }
}

export default connect(mapStateToProps, { indexTestAction })(IndexView);