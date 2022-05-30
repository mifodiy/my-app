import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setProfileUser} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
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

export default connect(mapStateToProps,{setProfileUser})(ProfileContainer)