import './Navbar.module.css';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const BestFriends = (props) => {
    return (
        <div className={s.bestFriends}>
            <div><img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'/></div>
            <div className={s.bestFriendsName}>{props.name}</div>
        </div>
    )
}

const Navbar = (props) => {
   let friendsName = props.state.friend.map(f => <BestFriends id={f.id} name={f.name}/>)
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={`${s.item} ${s.active}`}><NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink></div>
            <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
            <div className={s.item}><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
            <div className={s.bestFriends}>{friendsName}</div>
        </nav>
    )
}

export default Navbar;

