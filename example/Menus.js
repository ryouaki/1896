import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menus extends Component {
  render() {
    return <div className="slide-menus">
        <div className="menu-logo">
          Ryou-UI
        </div>
        <div className="menu-items">
        <Link to="/">开始</Link>
        </div>
        <div className="menu-items">
          组件
        </div>
        <div className="menu-items-list">
          <div className="menu-item">
            <Link to="/Button">Button</Link>
          </div>
        </div>
      </div>
  }
}

export default Menus;
