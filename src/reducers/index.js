import { FETCH_SMURFS, API_FETCH, API_FAIL, ADD_SMURF, ERROR } from "../actions"

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ""
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        case API_FETCH:
            return {
                ...state,
                isLoading: action.payload
            }
        case API_FAIL:
            return {
                ...state,
                isLoading: false,
                error: `Our village seems to be out gathering smurf-berries, please try again later, ${action.payload}`
            }
        case ADD_SMURF:
            const newSmurf = {
                id: new Date(),
                name: action.payload.name,
                nickname: action.payload.nickname,
                position: action.payload.position,
                summary: action.payload.summary
            }
            return {
                ...state,
                smurfs: [state.smurfs, newSmurf]
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state; 
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//X Adds the following state values into the initialState:
//  X an array of smurfs
//  X a boolean indicating if the app is loading
//  X a string indicating a possible error message

//X Add in the arguments needed to complete a standard reducer function.
//X Add in a reducer case to accomidate the start of a smurf fetch.
//X Add in a reducer case to accomidate the successful smurf api fetch.
//X Add in a reducer cases to accomidate the failed smurf api fetch.
//X Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//X Add in a reducer case that adds in a value to the error message.