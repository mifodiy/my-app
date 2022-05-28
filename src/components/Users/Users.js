import s from './Users.module.css'
import {followAC, unfollowAC} from "../../redux/users-reducer";
import React from 'react';

let Users = (props) => {

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <div><img src={u.photoUrl} className={s.photoUser}/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </div>
            )
        }
    </div>

}
export default Users