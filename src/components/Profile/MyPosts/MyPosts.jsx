import '../Profile.module.css';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                my posts
                <div>new post</div>
                <div>
                    <Post message='Hello my name is Vova'/>
                    <Post message='Hello my name is dima'/>
                    <Post/>
                    <Post/>
                </div>
            </div>
    )
}

export default MyPosts;