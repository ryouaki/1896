import React, { Component } from 'react';

import Template from './../Template';
import Panel from './../Panel';
import { Button } from './../../src';

class ButtonPage extends Component {
  render() {
    return <Template header={'Button'} >
      <Panel
        title={'按钮'}
      >
        <Button
          className="button-position"
          isPrimary
        />
        <Button
          className="button-position"
        />
        <Button
          className="button-position"
          isSimple
        />
      </Panel>
    </Template>
  }
}

export default ButtonPage;
