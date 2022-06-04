import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileUsers, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 24265
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
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps,{getProfileUsers, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
