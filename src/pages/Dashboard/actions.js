import { dashboard } from '../../utils/fetch';
import { DATA_FETCHED, LOADING } from './constans';

export function fetchDashboard() {
  return async dispatch => {
    dispatch(loadingAction(true));
    try {
      const { data } = await dashboard();
      dispatch(dataFetchedAction(data));
    } catch (err) {
      dispatch(loadingAction(false));
    }
  };
}

function dataFetchedAction(data) {
  return { type: DATA_FETCHED, data };
}

function loadingAction(isLoading) {
  return { type: LOADING, isLoading };
}
