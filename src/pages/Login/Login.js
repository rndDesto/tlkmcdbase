import React from 'react';
import { useDispatch } from 'react-redux';
import Webp from '../../components/elements/Webp';
import LoginForm from '../../components/forms/Login';
import { login } from './actions';
import styles from './styles.scoped.css';

export default function Login() {
  const dispatch = useDispatch();
  const formSubmit = (values) => {
    const payload = {
      email: values.email,
      password: values.password,
      app: 'logee-web-admin',
      deviceId: 'dummy-DeviceID'
    };
    dispatch(login(payload));
  };

  return (
    <main className={styles.root}>
      <figure>
        <Webp name="ilu-transportation" />
        <img alt="Logee" src="/assets/ic-logo.svg" />
      </figure>
      <section>
        <h3>
          Selamat Datang di
          <br /><span>LogeeTrans.</span>
        </h3>
        <p>Solution untuk mengoptimalkan segala kebutuhan logistik
          perusahaan di seluruh Indonesia.</p>
        <LoginForm onSubmit={formSubmit} />
      </section>
    </main>
  );
}
