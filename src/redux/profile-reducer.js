const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_PROFILE_USER = 'SET_PROFILE_USER'

let initials =   {
    posts: [
        {id: '1', message: 'Hello my name is Vova ', likeCount: 32},
        {id: '2', message: 'Hello my name is dima ', likeCount: 11},
    ],
        newPostText:'',
    profileInfo: null
};
const profileReducer = (state = initials, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '3',
                message: state.newPostText + ' ',
                likeCount: 1
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE_USER:
            return {...state, profileInfo: action.profileInfo}
        default: return state;
    }
}
export let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let updateNewPostText = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export let setProfileUser = (profileInfo) =>{
    return{type:SET_PROFILE_USER, profileInfo}
}

// export const getProfileUsere = () => {
//     return (dispatch) => {
//
//     }
// }
export default profileReducer;