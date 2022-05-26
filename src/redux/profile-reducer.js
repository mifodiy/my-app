const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initials =   {
    posts: [
        {id: '1', message: 'Hello my name is Vova ', likeCount: 32},
        {id: '2', message: 'Hello my name is dima ', likeCount: 11},
    ],
        newPostText:''
};
const profileReducer = (state = initials, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '3',
                message: state.newPostText + ' ',
                likeCount: 1
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
}
export let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let updateNewPostText = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export default profileReducer;