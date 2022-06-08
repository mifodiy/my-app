import React from 'react';
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

let Users = (props) => {

    return <div>
        <Paginator totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onChangeCurrentPage={props.onChangeCurrentPage}/>
        {
            props.users.map(u => <User user={u}
                                       follow={props.follow}
                                       unfollow={props.unfollow}
                                       followingProgress={props.followingProgress}/>
            )
        }
    </div>
}


export default Users