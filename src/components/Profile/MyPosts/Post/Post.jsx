import '../MyPosts.module.css';
import s from './Post.module.css';
import likeImg from '../../../../assets/image/pngwing.com.png'

const Post = ({message, likeCount}) => {
    return (
        <div className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            <span>{message}</span>
            <div><span className={s.textMessage}>
                <button className={s.likeButton}>
                    <img className={s.imgLike} src={likeImg}/>
                    {likeCount}</button></span></div>
        </div>
    )
}

export default Post;