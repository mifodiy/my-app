import React from 'react';
import classes from './Header.module.css'
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUser} from "../../redux/auth-reducer";
import axios from "axios";
import {authUserAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
            authUserAPI.checkAuth().then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUser(id,login,email);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) =>({
        isAuth:state.auth.isAuth,
        login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUser})(HeaderContainer);