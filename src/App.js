import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Nav/Nav";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";



function App(props) {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className='app-wrapper--content'>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs messageData={props.state.dialogsPage.messageData}
                                                                  dialogsData={props.state.dialogsPage.dialogsData}
                                                                  newMessageText={props.state.dialogsPage.newMessageText}
                                                                  dispatch={props.dispatch}
                    />}
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
