import React from 'react';

import Loading from '../../components/Loading';

class IndexContainer extends React.Component {

    componentDidMount() {
        this.props.indexInitAction();
    }

    render() {
        return(
            <div>
                { this.props.isFetching && <Loading/> }
                1111
            </div>
        )
    }
}

export default IndexContainer;