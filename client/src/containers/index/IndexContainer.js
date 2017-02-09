import React from 'react';

import HeaderBar from '../../components/HeaderBar';

class IndexContainer extends React.Component {

    componentDidMount() {
        this.props.indexInitAction();
    }

    render() {
        return(
            <div>
                <HeaderBar/>
                <div>
                    222
                </div>
            </div>
        )
    }
}

export default IndexContainer;