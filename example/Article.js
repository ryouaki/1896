import React, { Component } from 'react';
import Pages from './pages';

class Article extends Component {
  render() {
    let {
      match
    } = this.props;

    // 这里很有意思，React在jsx中，以小写字母开头的会被识别成html标签
    // 以大写开头的会被识别成React组件
    let Page = Pages[match.params.id || 'Home'];

    return <article className="article-container">
        { Page?<Page/>:'卧槽，貌似这个网页丢了！' }
      </article>
  }
}

export default Article;
