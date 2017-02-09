import { connect } from 'react-redux';

import MainContainer from './main/MainContainer';

function mapStateToProps(state) {
    return {
        isFetching: state.main.isFetching,
        message: state.main.message
    }
}

export default connect(mapStateToProps)(MainContainer);