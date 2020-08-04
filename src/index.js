import React from 'react';
import { render } from 'react-dom';
import 'typeface-lato';
import configureStore, { history } from './store/configureStore';
import App from './App';
import './App.css';
require('./favicon.ico');
const store = configureStore();

render (
  <App store={store} history={history} />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render (
      <NewApp store={store} history={history} />,
      document.getElementById('app')
    );
  });
}