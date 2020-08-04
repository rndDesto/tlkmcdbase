import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import login from '../pages/Login/reducer';
import dashboard from '../pages/Dashboard/reducer';

const rootReducer = combineReducers({
  dashboard,
  form: formReducer,
  login,
  routing: routerReducer,
});

export default rootReducer;
