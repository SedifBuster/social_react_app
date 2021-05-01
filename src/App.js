import React from 'react';
import './App.css';
import Navbar from "./Nav/Nav";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";


//sidebar={props.state.sidebar} сайдбар в навбар 

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar />
                <div className='app-wrapper--content'>
                    <Route path='/profile:userId?' render={() => <ProfileContainer/>}
                    />
                    <Route path='/dialogs' render={() => <DialogsContainer/>}
                    />
                    <Route path='/users' render={() => <UsersContainer/>}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
