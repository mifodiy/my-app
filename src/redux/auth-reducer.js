import {authUserAPI} from "../api/api";

const SET_AUTH_USER = 'SET_AUTH_USER';

let initials =  {
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
                ...action.data,
                isAuth: true
            }
        }

        default: return state;

    }
}

export let setAuthUser = (userId, login, email) => {
    return {type: SET_AUTH_USER, data:{userId,login,email}}
}

export const checkAuth = () => {
    return (dispatch) => {
        authUserAPI.checkAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUser(id,login,email));
            }
        });
    }
}

export const singIn = (email, password, rememberMe) => {
    return (dispatch) => {
        authUserAPI.singIn(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(checkAuth())
            }
        });
    }
}

export const singOut = () => {
    return (dispatch) => {
        authUserAPI.singOut().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(checkAuth)
            }
        });
    }
}


export default authReducer;