import React from 'react';
import {
  classname
} from './../utils';

class Button extends React.PureComponent {

  static defaultProps = {
    type: 'button',
    body: 'Button',
    className: '',
    isPrimary: false,
    isWaiting: false,
    isDisabled: false
  }

  static propTypes = {

  }

  render() {
    let {
      body,
      isPrimary
    } = this.props;

    return <button className={classname("ryouaki-ui-button", {'primary': isPrimary})}>
        { body }
      </button>
  }
}

export default Button;
