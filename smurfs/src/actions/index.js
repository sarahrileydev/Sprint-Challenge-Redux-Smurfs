import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const ADD_SMURF  = 'ADD_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const SMURFS_FAILURE ='SMURFS_FAILURE';


const url = 'http://localhost:3333/'

export const getSmurfs = () => dispatch => {
  dispatch({
    type: GET_SMURFS
  })
  axios
  .get(`${url}smurfs`)
  .then(response => {
    dispatch({
      type: SMURFS_SUCCESS, 
      payload: response.data
    })
  })
  .catch(err => {
    dispatch({
      type: SMURFS_FAILURE,
      payload: err
    })
  })
}

export const addSmurf = smurf => dispatch => {
  dispatch({
    type: ADD_SMURF
  })
  axios
  .post(`${url}smurfs`, smurf)
  .then(response => {
    dispatch({
      type: SMURF_ADDED,
      payload: response.data
    })
  })
  .catch(err => {
    dispatch({
      type: SMURFS_FAILURE,
      payload: err
    })
  })
}



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
