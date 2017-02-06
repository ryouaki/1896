import React from 'react';

class IndexView extends React.Component {

    componentDidMount() {
        this.props.indexInitAction();
    }

    render() {
        return(
            <div>111
            </div>
        )
    }
}

export default IndexView;