import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileUsers} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileUsers(userId)
    }

    render() {
        return<Profile {...this.props}/>

    }
}

const mapStateToProps = (state) =>{
    return {
        profileInfo: state.profilePage.profileInfo,
    }
}
let RedirectProfileComponent = withAuthRedirect(ProfileContainer)
let GetUrlParametrComponent = withRouter(RedirectProfileComponent)
export default connect(mapStateToProps,{getProfileUsers})(GetUrlParametrComponent)