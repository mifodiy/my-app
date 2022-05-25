import '../MyPosts.module.css';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/>
            <span>{props.message}</span>
            <div><span className={s.textMessage}>
                <button className={s.likeButton}>

                    <img className={s.imgLike} src='https://w7.pngwing.com/pngs/417/448/png-transparent-like-button-computer-icons-player-hand-thumb-signal-desktop-wallpaper.png'/>
                         {props.likeCount}</button></span></div>

        </div>
    )
}

export default Post;