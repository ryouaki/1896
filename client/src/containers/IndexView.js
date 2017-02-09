import { connect } from 'react-redux';

import IndexContainer from './index/IndexContainer';
import actions from '../actions/indexAction';

function mapStateToProps(state) {
    return {
        indexMenu: state.index.indexMenu
    }
}

export default connect(mapStateToProps, actions)(IndexContainer);