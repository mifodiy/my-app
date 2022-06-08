import React from "react";
import {NavLink} from "react-router-dom";
import photo from "../../assets/image/usersicon.jpeg";
import s from "./Users.module.css";

export const User = ({user, followingProgress, unfollow, follow}) => {
    return <div>
        <div>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : photo}
                     className={s.photoUser}/>
            </NavLink>
        </div>

        <div>
            {user.followed
                ? <button disabled={followingProgress.some(id => id === user.id)}
                          onClick={() => {
                              unfollow(user.id)
                          }}>Unfollow</button>
                : <button disabled={followingProgress.some(id => id === user.id)}
                          onClick={() => {
                              follow(user.id)
                          }}>Follow</button>}
        </div>
        <div>{user.name}</div>
        <div>{user.status}</div>
        <div>{'u.location.city'}</div>
        <div>{'u.location.country'}</div>
    </div>
}