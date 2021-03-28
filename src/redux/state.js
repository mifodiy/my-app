import {rerenderEntireTree} from "../render";

let state = {
    profilePage:
        {
            posts: [
                {id: '1', message: 'Hello my name is Vova ', likeCount: 32},
                {id: '2', message: 'Hello my name is dima ', likeCount: 11},
            ]
        },
    dialogsPage:
        {
            dialogs: [
                {id: '1', name: 'Vova'},
                {id: '2', name: 'Anna'},
                {id: '3', name: 'Max'},],
            message: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Hi people'},
                {id: '3', message: 'yo'},
            ]
        }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: '3',
        message: postMessage + ' ',
        likeCount: 1
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let addMessage = (message) => {
    let newMessage = {
        id: '4',
        message: message
    }
    state.dialogsPage.message.push(newMessage);
    rerenderEntireTree(state);
}
export default state;