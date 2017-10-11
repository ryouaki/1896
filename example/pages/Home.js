import React, { Component } from 'react';
import Template from './../Template';

class HomePage extends Component {
  render() {
    return <Template
        header={'开始'}
        body={
          [
            '这不仅仅是一个基于React的UI库，更是一个学习React和学习构建组件的资料',
            <div>
              目标:
            </div>,
            <ul>
              <li>开发一套基于React.js的UI类库</li>
              <li>它需要包含一个网站系统最基本的功能组件，要能涵盖大多数应用场景</li>
              <li>这些组件要易于扩展，包括且不限于样式</li>
              <li></li>
            </ul>
          ]
        }
      />
  }
}

export default HomePage;
