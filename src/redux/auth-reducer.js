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


export default authReducer;