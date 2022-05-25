const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let store = {
    _callSubscriber(){
        console.log('hello');
    },
    _state:{
        profilePage:
            {
                posts: [
                    {id: '1', message: 'Hello my name is Vova ', likeCount: 32},
                    {id: '2', message: 'Hello my name is dima ', likeCount: 11},
                ],
                newPostText:''
            },
        dialogsPage:
            {
                dialogs: [
                    {id: '1', name: 'Vova'},
                    {id: '2', name: 'Anna'},
                    {id: '3', name: 'Max'},],
                messages: [
                    {id: '1', message: 'Hi'},
                    {id: '2', message: 'Hi people'},
                    {id: '3', message: 'yo'},
                ],
                newMessageBody:''
            },
        sidebarPage:
            {
                friend: [
                    {id: '1', name: 'Sasha'},
                    {id: '2', name: 'Petya'},
                    {id: '3', name: 'Gera'}
                ]
            }
    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


   dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id: '3',
                message: this._state.profilePage.newPostText + ' ',
                likeCount: 1
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else
        if (action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: '4', message: body});

            this._callSubscriber(this._state);
        }else
        if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
   }
}

export let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let updateNewPostText = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export let sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}

export let updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default store;