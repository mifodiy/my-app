import {authUserAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {checkAuth} from "./auth-reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initials =  {
    initialize: false

}


const appReducer = (state = initials, action) => {

    switch (action.type) {
        case INITIALIZE_SUCCESS: {
            return {
                ...state,
                initialize: true
            }
        }

        default: return state;

    }
}

export let initializedSuccess = () => {
    return {type: INITIALIZE_SUCCESS}
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(checkAuth())
        promise.then(() => {dispatch(initializedSuccess())})

    }
}

export default appReducer;