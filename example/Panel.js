import React, { Component } from 'react';

class Panel extends Component {
  render() {

    let {
      title
    } = this.props

    return <div className="section-panel">
        <header>
          { title }
        </header>
        <section>
        { this.props.children }
        </section>
      </div>
  }
}

export default Panel;
