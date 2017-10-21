import React from 'react';
import PropTypes from 'prop-types';
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
    isDisabled: false,
    isSimple: false
  }

  static propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    body: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    className: PropTypes.string,
    isPrimary: PropTypes.bool,
    isSimple: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isWaiting: PropTypes.bool
  }

  render() {
    let {
      body,
      isPrimary,
      isSimple,
      className
    } = this.props;

    return <button className={classname("ryouaki-ui-button", {'primary': isPrimary}, {'simple': isSimple}, className)}>
        { body }
      </button>
  }
}

export default Button;
