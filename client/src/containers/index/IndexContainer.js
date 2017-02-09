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
                    This is Content!
                </div>
            </div>
        )
    }
}

export default IndexContainer;