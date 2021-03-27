import '../MyPosts.module.css';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            <span>{props.message}</span>
            <span className={s.textMessage}>like:{props.likeCount}</span>
        </div>
    )
}

export default Post;