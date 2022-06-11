import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileUsers, getStatus, savePhoto, saveProfileInfo, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    refreshUser() {
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
    componentDidMount() {
        this.refreshUser()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshUser()
        }
    }

    render() {
        return<Profile {...this.props}
            isOwner={!this.props.match.params.userId}/>
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
    connect(mapStateToProps,{getProfileUsers, getStatus, updateStatus, savePhoto, saveProfileInfo}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
