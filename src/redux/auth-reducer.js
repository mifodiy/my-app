import {authUserAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER';
const SET_CAPTCHA_SUCCESS = 'SET_CAPTCHA_SUCCESS';

let initials = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initials, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_CAPTCHA_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default: return state;
    }
}

export let setAuthUser = (userId, login, email, isAuth) => {
    return {type: SET_AUTH_USER, data: {userId, login, email, isAuth}}
}

export const setCaptchaSuccess = (captchaUrl) => {
    return{type: SET_CAPTCHA_SUCCESS, captchaUrl: captchaUrl}
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

export const singIn = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authUserAPI.singIn(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(checkAuth())
        } else {
            if (response.data.resultCode === 10){
                dispatch(getCaptcha())
            }
            dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
        }
    }
}

export const getCaptcha = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        dispatch(setCaptchaSuccess(response.data.url))
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