import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import './App.css'
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar store={props.store}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer store={props.store}/>}/>
                    <Route path='/profile' render={() =>
                        <ProfileContainer store={props.store}/>}/>
                    <Route path='/users' render={() =>
                        <UsersContainer store={props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
