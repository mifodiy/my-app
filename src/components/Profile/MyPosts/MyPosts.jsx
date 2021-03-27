import '../Profile.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    debugger;
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    return (
            <div className={s.posts}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div><button>Add</button></div>
                </div>
                <div>
                    {postsElement}
                </div>
            </div>
    )
}

export default MyPosts;