import s from "../Navbar.module.css";

const BestFriendsItem =(props) => {
    return (
        <div className={s.bestFriends}>
            <div><img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/></div>
            <div className={s.bestFriendsName}>{props.name}</div>
        </div>
    )
}

export default BestFriendsItem