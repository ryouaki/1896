import React, { Component } from 'react';
import { 
  Switch, 
  Route 
} from 'react-router-dom';
import Pages from './pages';

class Article extends Component {
  render() {
    let {
      match
    } = this.props;

    let Article = Pages[match.params.id] ;

    return Article?<Article/>:'卧槽，貌似这个网页丢了！';
  }
}

export default Article;
