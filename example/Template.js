import React, { Component } from 'react';

class Template extends Component {
  render() {

    let {
      header,
      footer
    } = this.props

    return [
        <header key="header" className="header-container">
          { header }
        </header>,
        <section key="section" className="section-container">
          { this.props.children }
        </section>,
        <footer key="footer" className="footer-container">
          { footer }
        </footer>
      ]
  }
}

export default Template;
