import '../Profile.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";
import {addPostActionCreator, updateNewPostText} from "../../../redux/state";


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onChangeText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostText(text))
    }
    return (
            <div className={s.posts}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onChangeText}
                                  ref={newPostElement}
                                  value={props.newPostText}></textarea>
                    </div>
                    <div><button onClick={addPost}>Add</button></div>
                </div>
                <div>
                    {postsElement}
                </div>
            </div>
    )
}

export default MyPosts;