import React from 'react';
import Loading from '../../components/Loading';

class MainWarpView extends React.Component {

    render() {
        return(
            <div>
                { this.props.isFetching && <Loading/> }
                { this.props.children }
            </div>
        )
    }
}

export default MainWarpView;