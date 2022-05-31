import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setProfileUser} from "../../redux/profile-reducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setProfileUser(response.data);
            });
    }

    render() {

        return<Profile {...this.props}/>

    }
}

const mapStateToProps = (state) =>{
    return {
        profileInfo: state.profilePage.profileInfo
    }
}
let GetUrlParametrComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,{setProfileUser})(GetUrlParametrComponent)