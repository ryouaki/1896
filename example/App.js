import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Menus from './Menus';
import Article from './Article';

class App extends Component {
  render() {
    return [
      <Menus key='Menus'/>,
      <Route  key='Article' path="/:id" component={Article}/>
    ]
  }
}

export default App;
