import '../Profile.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let posts = [
    {id: '1', message: 'Hello my name is Vova', likeCount: 32},
    {id: '2', message: 'Hello my name is dima', likeCount: 11},
]

let postsElement = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

const MyPosts = () => {
    return (
            <div className={s.posts}>
                my posts
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