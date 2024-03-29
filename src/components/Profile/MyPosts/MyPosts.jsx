import '../Profile.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as React from "react";
import {reduxForm} from "redux-form";
import {maxElementLength, required} from "../../../util/validators/validators";
import {createField, Textarea} from "../../common/FormControls/FormControls";

const maxLength200 = maxElementLength(20)
const MyPostsForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        {createField('newPostText',
            Textarea,
            [required, maxLength200],
            'New text')}
        <div>
            <button>Add</button>
        </div>
    </form>
}

let MyPostsReduxForm = reduxForm({
    form: 'myPosts'
})(MyPostsForm)

const MyPosts = React.memo(props => {
    let state = props.profilePage;

    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    let addNewPostText = (value) => {
        props.addPostActionCreator(value.newPostText);
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <MyPostsReduxForm onSubmit={addNewPostText}/>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
})

export default MyPosts;