import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
    <header className={s.header}>
        <img src= 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png'/>
        <div className={s.authLogin}>
            {props.isAuth ? <div>{props.login} <button onClick={props.singOut}>SingOut </button></div>:
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>);
}

export default Header;