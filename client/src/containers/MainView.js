import { createContainer } from '../common/ConnectHelper';

import MainContainer from './main/MainContainer';

function mapStateToProps(state) {
    return {
        isFetching: state.main.isFetching,
        message: state.main.message
    }
}

export default createContainer(mapStateToProps, undefined, MainContainer);