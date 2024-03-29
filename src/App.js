import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import './App.css'
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {authtorized, initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component{
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialize){
            return <Preloader/>
        }
        return (

            <HashRouter basemname={`/${process.env.PUBLIC_URL}`}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={() =>
                            <UsersContainer />}/>
                        <Route path='/login' render={() =>
                            <Login/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialize: state.app.initialize
    }
}
export default compose(
    connect(mapStateToProps, {initializeApp})

)(App);
