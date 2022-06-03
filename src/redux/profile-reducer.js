import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER'
const SET_STATUS = 'SET_STATUS'

let initials =   {
    posts: [
        {id: '1', message: 'Hello my name is Vova ', likeCount: 32},
        {id: '2', message: 'Hello my name is dima ', likeCount: 11},
    ],
        newPostText:'',
    profileInfo: null,
    status: ""
};
const profileReducer = (state = initials, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '3',
                message: action.value,
                likeCount: 1
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_PROFILE_USER:
            return {...state, profileInfo: action.profileInfo}
        case SET_STATUS:
            return {...state, status: action.status}
        default: return state;
    }
}
export let addPostActionCreator = (value) => {
    return {type: ADD_POST, value}
}

export let setProfileUser = (profileInfo) =>{
    return{type:SET_PROFILE_USER, profileInfo}
}
export let setStatus = (status) =>{
    return{type:SET_STATUS, status}
}

export const getProfileUsers = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setProfileUser(response.data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            dispatch(setStatus(status));
        });
    }
}
export default profileReducer;