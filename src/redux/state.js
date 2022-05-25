import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        //this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
   }
}




export default store;