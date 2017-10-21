import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Version } from './../src';
import menus from './asset/menus';

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
          <Link to="/principle">原则</Link>
        </div>
        <div className="menu-items">
          组件
        </div>
        <div className="menu-items-list">
          {
            menus.map( (menu, index) => {
              return <div key={index+''} className="menu-item">
                  <Link to={'/'+menu}>{menu}</Link>
                </div>
            })
          }
        </div>
        <div className="menu-footer">
          { Version }<a href="https://github.com/ryouaki">@Ryouaki</a>
        </div>
      </div>
  }
}

export default Menus;
