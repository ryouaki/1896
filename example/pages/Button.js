import React, { Component } from 'react';

import Template from './../Template';
import Panel from './../Panel';
import { Button } from './../../src';

class ButtonPage extends Component {
  render() {
    return <Template header={'Button'} >
      <div>
        按钮通常具有以下几种按钮:
      </div>
      <ul>
        <li>普通按钮: 可供用户选择的功能按钮</li>
        <li>状态按钮: 需要伴随某些数据状态，变得可点击，不可点击，或者是等待</li>
        <li>图标按钮: 按钮的文字部分是一个图标</li>
        <li>图文按钮: 按钮同时显示图标和文字</li>
        <li>简易按钮: 只是一个可点击的区域，区域居中显示文字</li>
      </ul>
      <div>
        按钮需要有以下几种状态:
      </div>
      <ul>
        <li>主要: 通常，在页面需要设置主要按钮和次要按钮来引导用户操作。减少用户的思考时间，通常一个操作区域不会多于一个主要按钮</li>
        <li>次要: 可供用户选择的功能按钮</li>
        <li>禁用: 不可操作按钮，需要显示鼠标的【not-allowed】或【wait】状态</li>
      </ul>
      <div>
        需要实现的功能:
      </div>
      <ul>
        <li>鼠标悬浮状态变换</li>
        <li>鼠标点击状态变换</li>
        <li>不同按钮不同状态</li>
        <li>预留样式接口，可以通过外部改变按钮样式</li>
        <li>预留点击事件接口</li>
        <li>预留改变按钮内部元素接口，可以自定义按钮显示内容，以满足对图文按钮和图标按钮的需求</li>
      </ul>
      <Panel
        title={'按钮'}
      >
        <Button
          isPrimary={true}
        />
        <Button
        />
        <Button
          className="customize-btn-style"
        />
      </Panel>
    </Template>
  }
}

export default ButtonPage;
