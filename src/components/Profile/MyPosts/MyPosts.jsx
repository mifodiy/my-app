import '../Profile.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";


const MyPosts = (props) => {
    let state = props.profilePage;

    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    let onAddPost = () => {
        props.addPost();
    }

    let onChangeText = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }
    return (
            <div className={s.posts}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onChangeText}
                                  value={props.newPostText}></textarea>
                    </div>
                    <div><button onClick={onAddPost}>Add</button></div>
                </div>
                <div>
                    {postsElement}
                </div>
            </div>
    )
}

export default MyPosts;