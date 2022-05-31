import s from './Users.module.css'
import React from 'react';
import photo from '../../assets/image/usersicon.jpeg'
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let countPage = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= countPage; i++) {
        page.push(i)
    }
    return <div>
        <div>{page.map(p =>
            <span className={props.currentPage === p && s.currentPage}
                  onClick={() => {
                      props.onChangeCurrentPage(p)
                  }}>{p}</span>)}</div>
        {
            props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                            <img src={u.photos.small != null ? u.photos.small : photo}
                                 className={s.photoUser}/>
                        </NavLink>
                    </div>

                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/
        ${u.id}`,{
                                    withCredentials:true,
                                    headers: {"API-KEY" : "b1ae9ead-f45f-4043-a7ce-212f583e09f0"}
                                })
                                    .then(response => {
                                        if (response.data.resultCode===0){
                                            props.unfollow(u.id)
                                        }

                                    });

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/
        ${u.id}`,{},{
                                    withCredentials:true,
                                    headers: {"API-KEY" : "b1ae9ead-f45f-4043-a7ce-212f583e09f0"}
                                })
                                    .then(response => {
                                        if (response.data.resultCode ===0){
                                            props.follow(u.id)
                                        }

                                    });

                            }}>Follow</button>}
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </div>
            )
        }
    </div>
}


export default Users