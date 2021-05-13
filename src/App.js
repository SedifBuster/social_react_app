import React from 'react';
import './App.css';
import Navbar from "./Nav/Nav";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import LoginPage from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/preloader/Preloader";


class App extends React.Component {
    componentDidMount()
    {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized){
        return <Preloader/>}
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper--content'>
                        <Route path='/profile:userId?' render={() => <ProfileContainer/>}
                        />
                        <Route path='/dialogs' render={() => <DialogsContainer/>}
                        />
                        <Route path='/users' render={() => <UsersContainer/>}
                        />
                        <Route path='/login' render={() => <LoginPage/>}
                        />
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter,
    connect (mapStateToProps, {initializeApp} )) (App)
