import { DATA_FETCHED, LOADING } from './constans';

const initialState = {
  data: {},
  isLoading: true,
};

export default function reducer(state = initialState, action = {}) {
  const { type, data, isLoading } = action;

  switch (type) {
    case DATA_FETCHED:
      return {
        ...state,
        isLoading: false,
        data,
      };
    case LOADING:
      return {
        ...state,
        isLoading,
      };
    default:
      return state;
  }
}
