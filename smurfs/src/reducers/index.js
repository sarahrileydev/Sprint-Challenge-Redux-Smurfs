import {
  GET_SMURFS,
  SMURFS_SUCCESS,
  ADD_SMURF,
  SMURF_ADDED,
  SMURFS_FAILURE
} from '../actions/index'


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  deletingSmurf: false,
  error: null
}



export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
    return {
      ...state,
      fetching: true
    }

    case SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      fetching: false
    }

    case ADD_SMURF:
    return {
      ...state,
      adding: true
    }

    case SMURF_ADDED:
    return {
      ...state,
      smurfs: action.payload,
      adding: false
    }

    case SMURFS_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }

    default:
    return state;
  }
}

export default reducer;
