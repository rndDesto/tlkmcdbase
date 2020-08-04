import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

export default function Button(props) {
  const { buttonProps, children, className, onClick } = props;
  const classes = [styles.root, className].filter(Boolean).join(' ');

  return (
    <button className={classes} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  buttonProps: {},
  children: null,
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  buttonProps: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
