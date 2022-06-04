import React from 'react';
import classes from './Header.module.css'
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuth, setAuthUser, singOut} from "../../redux/auth-reducer";
import axios from "axios";
import {authUserAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
            this.props.checkAuth()
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) =>({
        isAuth:state.auth.isAuth,
        login: state.auth.login
})
export default connect(mapStateToProps, {checkAuth, singOut})(HeaderContainer);