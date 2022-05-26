import '../Profile.module.css';
import * as React from "react";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onChangeText = (text) => {
        props.store.dispatch(updateNewPostText(text))
    }
    return <MyPosts updateNewPostText={onChangeText} addPost={addPost} posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>

}

export default MyPostsContainer;