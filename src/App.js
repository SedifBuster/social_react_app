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
import state from "./redux/state";


function App(props) {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={state.sidebar}/>
                <div className='app-wrapper--content'>
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updatePostText={props.updatePostText}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs messageData={state.dialogsPage.messageData}
                                                                  dialogsData={state.dialogsPage.dialogsData}
                                                                  addMessage={props.addMessage}
                                                                  updateMessageText={props.updateMessageText}
                                                                  newMessageText={state.dialogsPage.newMessageText}
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
