import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PageBase from './components/layouts/PageBase';
import { checkExpireTime, clearStorages, getToken } from './utils/storage';
import pages from './pages';
import AppContextProvider from './contexts';
import { routes } from './configs/routes';

const noAuthRoutes = ['/login'];
const noAuth = noAuthRoutes.some(r => location.pathname.match(r));

if (!getToken() && !noAuth) {
  location.href = '/login';
} else if (checkExpireTime() && !noAuth) {
  clearStorages();
  location.href = '/login';
} else if (getToken() && noAuth) {
  location.href = '/';
}

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <AppContextProvider>
        <PageBase>
          <Switch>
            <Route component={pages.Login} exact path={routes.LOGIN()} />
            <Route component={pages.Dashboard} exact path={routes.DASHBOARD()} />
            <Route component={pages.Error404} />
          </Switch>
        </PageBase>
      </AppContextProvider>
    </Router>
  </Provider>
);

export default hot(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};
