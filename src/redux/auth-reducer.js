import {authUserAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER';

let initials = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initials, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data
            }
        }
        default: return state;
    }
}

export let setAuthUser = (userId, login, email, isAuth) => {
    return {type: SET_AUTH_USER, data: {userId, login, email, isAuth}}
}

export const checkAuth = () => {
    return async (dispatch) => {
        let response = await authUserAPI.checkAuth()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUser(id, login, email, true));
        }
    }
}

export const singIn = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authUserAPI.singIn(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(checkAuth())
        } else {
            dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
        }
    }
}

export const singOut = () => {
    return async (dispatch) => {
        let response = await authUserAPI.singOut()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUser(null, null, null, false))
        }
    }
}

export default authReducer;