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
      isPrimary,
      className
    } = this.props;

    return <button className={classname("ryouaki-ui-button", {'primary': isPrimary}, className)}>
        { body }
      </button>
  }
}

export default Button;
