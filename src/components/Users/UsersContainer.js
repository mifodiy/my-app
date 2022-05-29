import s from './Users.module.css'
import Users from "./Users";
import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
debugger

export default UsersContainer;