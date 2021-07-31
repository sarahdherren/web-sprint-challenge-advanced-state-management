import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const API_FETCH = "API_FETCH";
export const API_FAIL = "API_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: API_FETCH, payload: true });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_SMURFS, payload:res.data})
        })
        .catch(err => {
            dispatch({type: API_FAIL, payload: err})
        })
}

export const addSmurf = (smurf) => {
    return({type:ADD_SMURF, payload: smurf})
}

export const setError = () => (dispatch) => {
    dispatch({type:ERROR, payload: "All fields are required for submission"})
}

//Task List:
//X Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//X Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//X Add a standard action that allows us to set the value of the error message slice of state.