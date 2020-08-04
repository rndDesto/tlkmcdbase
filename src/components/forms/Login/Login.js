import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Button from '../../elements/Button';
import TextField from '../../fields/Text';
import Password from '../../fields/Password';
import styles from './styles.scoped.css';
import { useSelector } from 'react-redux';

export default function Login(props) {
  const { handleSubmit } = props;
  const { message } = useSelector(s => s.login);
  const textInputProps = { placeholder: 'cth. admin@email.com' };
  const passwordInputProps = { placeholder: 'Min. 6 karakter' };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <Field component={TextField} inputProps={textInputProps} label="Email" name="email"/>
      <Field component={Password} inputProps={passwordInputProps} label="Kata Sandi" name="password" />
      {message && <p className={styles.error}>{message}</p>}
      <Button onSubmit={handleSubmit}>MASUK</Button>
    </form>
  );
}

Login.defaultProps = {
  handleSubmit: () => {},
  invalid: true
};

Login.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool
};
