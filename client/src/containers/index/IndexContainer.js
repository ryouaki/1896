import React from 'react';

import Loading from '../../components/Loading';
import HeaderBar from '../../components/HeaderBar';

class IndexContainer extends React.Component {

    componentDidMount() {
        this.props.indexInitAction();
    }

    render() {
        return(
            <div>
                { this.props.isFetching && <Loading/> }
                <HeaderBar/>
                <div>
                    222
                </div>
            </div>
        )
    }
}

export default IndexContainer;