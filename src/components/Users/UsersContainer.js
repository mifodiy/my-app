import Users from "./Users";
import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../redux/users-reducer";
import axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(54)//response.data.totalCount
            });
    }

    onChangeCurrentPage = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onChangeCurrentPage={this.onChangeCurrentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}/>
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) =>{
            dispatch(setCurrentPageAC(page))
        },
        setUsersCount: (count) =>{
            dispatch(setUsersCountAC(count))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)