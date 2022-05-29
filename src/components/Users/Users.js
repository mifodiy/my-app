import s from './Users.module.css'
import React from 'react';
import axios from "axios";
import photo from '../../assets/image/usersicon.jpeg'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(54)//response.data.totalCount
        });
    }
    onChangeCurrentPage = (page) =>{
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let countPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let page = []
        for (let i = 1; i <= countPage; i++){
            page.push(i)
        }
        return <div>
            <div>{page.map(p =>
            <span className={this.props.currentPage === p && s.currentPage}
            onClick={() => {this.onChangeCurrentPage(p)}}>{p}</span>)}</div>
            {
                this.props.users.map(u => <div key={u.id}>
                        <div><img src={u.photos.small != null ? u.photos.small : photo}
                                  className={s.photoUser}/></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default Users