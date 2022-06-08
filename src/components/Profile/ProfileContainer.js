import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileUsers, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authtorizeUserId
            if (!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getProfileUsers(userId)
        this.props.getStatus(userId)
    }

    render() {
        return<Profile {...this.props}/>
    }
}

const mapStateToProps = (state) =>{
    return {
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        authtorizeUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps,{getProfileUsers, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
