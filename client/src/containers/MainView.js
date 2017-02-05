
import React from 'react';
import { connect } from 'react-redux';
import { indexTestAction } from '../actions/indexAction';

class MainView extends React.Component {

    componentDidMount() {
        this.props.indexTestAction();
    }

    render() {
        return(<div>111</div>)
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, { indexTestAction })(MainView);