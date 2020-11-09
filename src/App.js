import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Nav/Nav";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";



function App(props) {
debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className='app-wrapper--content'>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}
                    />
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}
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
