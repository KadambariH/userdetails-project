import { GET_USER_DETAILS, GET_USER_DETAILS_FAILURE, GET_USER_DETAILS_SUCCESS } from '../actions/constants';

const initialState = {
  isLoading: false,
  userdata: {},
  error: null,
}

export function userDetailsReducer(state = initialState, action) {

  switch (action.type) {
    case GET_USER_DETAILS: {
      return { ...state, isLoading: true }
    }
    case GET_USER_DETAILS_SUCCESS: {
      return { ...state, userdata: action.payload, isLoading: false }
    }
    case GET_USER_DETAILS_FAILURE: {
      return { ...state, error: action.payload, isLoading: false }
    }
    default: return state;
  }
}

