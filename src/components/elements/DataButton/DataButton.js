import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const DataButton = (props) => {
  const {
    buttonProps,
    children,
    onClick,
    isLoading } = props;
  return (
    <Button
      {...buttonProps}
      onClick={onClick}>
      {isLoading ? 'Mengirim':children}</Button>
  );
};

DataButton.defaultProps = {
  buttonProps: {},
  children: null,
  isLoading:false,
  onClick: () => {},
};

DataButton.propTypes = {
  buttonProps: PropTypes.object,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default DataButton;
