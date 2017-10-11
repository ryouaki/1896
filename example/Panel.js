import React, { Component } from 'react';

class Panel extends Component {
  render() {

    let {
      title
    } = this.props

    return <div>
        { this.props.children }
      </div>
  }
}

export default Panel;
