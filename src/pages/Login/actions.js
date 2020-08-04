import { setToken, setUserData, setExpireTime } from '../../utils/storage';
import { loginUser } from '../../utils/fetch';
import { FAILED, LOADING } from './constants';

export function login(data) {
  return dispatch => {
    dispatch(loadingAction(true));

    loginUser(data)
      .then(res => {
        dispatch(loadingAction(false));
        if (res.data.accessToken) {
          const { accessToken } = res.data;
          setToken(accessToken);
          setUserData(res.data);
          setExpireTime(res.data.exp);
          location.href = '/';
        } else {
          dispatch(loginFailedAction('You are not allowed to access'));
        }
      })
      .catch(err => {
        const message = err.statusCode >= 400 && err.statusCode < 500 ? err.message : 'Username atau password yang ada masukan salah';
        dispatch(loginFailedAction(message));
        dispatch(loadingAction(false));
      });
  };
}

function loadingAction(isLoading) {
  return { type: LOADING, isLoading };
}

function loginFailedAction(message) {
  return { type: FAILED, message };
}
