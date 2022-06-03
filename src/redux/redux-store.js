import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store